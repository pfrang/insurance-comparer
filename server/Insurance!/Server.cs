using System;
using System.Diagnostics;
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

        var stopwatch = Stopwatch.StartNew();

        // Process the request here
        // ...

        // Check if the elapsed time exceeds the threshold
        TimeSpan threshold = TimeSpan.FromMinutes(3);
        if (stopwatch.Elapsed > threshold)
        {
          // Handle the timeout
          context.Response.StatusCode = (int)HttpStatusCode.RequestTimeout;
          return;
        }

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

            InsuranceResponse response = await InsuranceStreamer(requestBody);
            Console.WriteLine("Response: " + "tryg:" + response.tryg + " if:" + response.ifForsikring + " frende:" + response.frende);

            string stringifiedResponse = JsonConvert.SerializeObject(response);
            Console.WriteLine("Response: " + stringifiedResponse);
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

    public async Task<InsuranceResponse> InsuranceStreamer(InsuranceFormBodyRequest body)
    {
      Console.WriteLine("Body received: " + body.Ssn + " " + body.deductible + " " + body.forWhom + " " + body);
      TRYG tryg = new TRYG();
      Task<string> trygTask = Task.Run(() => tryg.TrygReise());
      Task<string> ifTask = Task.Run(() => tryg.IF_Reise());
      Task<string> frendeTask = Task.Run(() => tryg.Frende_Reise());

      string[] allPrices = await Task.WhenAll(trygTask, ifTask, frendeTask);

      string trygPrice = allPrices[0];
      string ifPrice = allPrices[1];
      string frendePrice = allPrices[2];

      InsuranceResponse response = new InsuranceResponse { tryg = trygPrice, ifForsikring = ifPrice, frende = frendePrice };
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
  public string tryg { get; set; }
  public string ifForsikring { get; set; }
  public string frende { get; set; }
}

public class InsuranceFormBodyRequest
{
  public string Ssn { get; set; }
  public string email { get; set; }
  public string forWhom { get; set; }
  public string deductible { get; set; }
}
