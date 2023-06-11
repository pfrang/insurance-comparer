using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Insurance_
{
  public class Server
  {
    private HttpListener listener;

    public async Task Run()
    {
      listener = new HttpListener();
      listener.Prefixes.Add("http://localhost:8080/");
      listener.Start();

      Console.WriteLine("Listening for requests on http://localhost:8080/...");
      Console.WriteLine("Press enter to exit");

      while (true)
      {
        HttpListenerContext context = await listener.GetContextAsync();
        _ = HandleRequestAsync(context);
      }
    }

    private async Task HandleRequestAsync(HttpListenerContext context)
    {
      try
      {
        HttpListenerRequest request = context.Request;
        Console.WriteLine("Request received: " + request.HttpMethod + " " + request.Url);

        string body = "";
        if (request.HasEntityBody)
        {
          using (StreamReader reader = new StreamReader(request.InputStream, request.ContentEncoding))
          {
            body = await reader.ReadToEndAsync();
          }
        }

        Console.WriteLine("Request received: " + request.HttpMethod + " " + body);

        switch (request.HttpMethod)
        {
          case "GET":
            string responseString = "Request accepted.";
            byte[] responseBytes = Encoding.UTF8.GetBytes(responseString);
            context.Response.ContentType = "text/plain";
            context.Response.ContentLength64 = responseBytes.Length;
            await context.Response.OutputStream.WriteAsync(responseBytes, 0, responseBytes.Length);
            break;
          case "POST":
            InsuranceFormBodyRequest requestBody = JsonConvert.DeserializeObject<InsuranceFormBodyRequest>(body);
            Console.WriteLine("Body received: " + requestBody.Ssn + " " + requestBody.Email);

            InsuranceResponse response = await InsuranceStreamer(requestBody.Ssn, requestBody.Email);
            Console.WriteLine("Response: " + response.Tryg + " " + response.Gjensidige);

            string stringifiedResponse = JsonConvert.SerializeObject(response);
            byte[] buffer = Encoding.UTF8.GetBytes(stringifiedResponse);

            context.Response.StatusCode = (int)HttpStatusCode.OK;
            context.Response.ContentType = "application/json";
            context.Response.ContentLength64 = buffer.Length;

            using (var responseStream = context.Response.OutputStream)
            {
              await responseStream.WriteAsync(buffer, 0, buffer.Length);
              await responseStream.FlushAsync();
            }

            Console.WriteLine("Response sent!");
            break;
          default:
            context.Response.StatusCode = (int)HttpStatusCode.MethodNotAllowed;
            break;
        }
      }
      catch (Exception ex)
      {
        // Handle any exceptions that occur during request handling
        Console.WriteLine("Error occurred during request handling: " + ex.Message);
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
      }
      finally
      {
        context.Response.Close();
      }
    }

    public async Task<InsuranceResponse> InsuranceStreamer(string ssn, string email)
    {
      TRYG tryg = new TRYG();
      string trygPrice = await tryg.TrygReiseForsikring(ssn);

      InsuranceResponse response = new InsuranceResponse { Tryg = trygPrice, Gjensidige = "TBA" };
      return response;
    }

    public void Stop()
    {
      listener?.Stop();
      listener?.Close();
    }
  }
}

public class InsuranceResponse
{
  public string Tryg { get; set; }
  public string Gjensidige { get; set; }
}

public class InsuranceFormBodyRequest
{
  public string Ssn { get; set; }
  public string Email { get; set; }
}
