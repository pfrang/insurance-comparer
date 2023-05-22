
using Insurance_;
using System.Net;
using System;
using System.Text;
using Newtonsoft.Json;
namespace Insurance_
{
  public class Server
  {
    // public static void Main()
    // {
    //   var server = new Server();
    //   server.Run();
    // }

    public void Run()
    {

      HttpListener listener = new HttpListener();
      listener.Prefixes.Add("http://localhost:8080/");
      listener.Start();

      Console.WriteLine("Listening for requests on http://localhost:8080/...");
      Console.WriteLine("Press enter to exit");

      // Handle incoming requests
      while (true)
      {

        // Get the context of the incoming request
        HttpListenerContext context = listener.GetContext();
        HttpListenerRequest request = context.Request;
        Console.WriteLine("Request received: " + request.HttpMethod + " " + request.Url);
        // Read the request body
        string body = "";
        if (request.HasEntityBody)
        {
          using (StreamReader reader = new StreamReader(request.InputStream, request.ContentEncoding))
          {
            body = reader.ReadToEnd();
          }
        }

        Console.WriteLine("Request received: " + request.HttpMethod + " " + body);

        switch (request.HttpMethod)
        {
          case "GET":
            string responseString = "Request accepted.";
            byte[] responseBytes = responseBytes = System.Text.Encoding.UTF8.GetBytes(responseString);
            context.Response.ContentType = "text/plain";
            context.Response.ContentLength64 = responseBytes.Length;
            context.Response.OutputStream.Write(responseBytes, 0, responseBytes.Length);
            break;
          case "POST":
            // Deserialize the JSON string into an object
            CarInsuranceFormBody requestBody = JsonConvert.DeserializeObject<CarInsuranceFormBody>(body);
            Console.WriteLine("Body received: " + requestBody.Ssn + " " + requestBody.Email);
            // Convert the JSON string to bytes
            string responseBody = "{\"message\": \"Hello from C#\"}";
            byte[] buffer = Encoding.UTF8.GetBytes(responseBody);

            // Set the response headers
            context.Response.StatusCode = (int)HttpStatusCode.OK;
            context.Response.ContentType = "application/json";
            context.Response.ContentLength64 = buffer.Length;
            // Get the response output stream
            var responseStream = context.Response.OutputStream;

            // Write the response to the output stream
            responseStream.Write(buffer, 0, buffer.Length);

            // Close the output stream
            responseStream.Flush();
            responseStream.Close();

            Console.WriteLine("Response sent!");
            break;
          default:
            context.Response.StatusCode = (int)HttpStatusCode.MethodNotAllowed;
            break;
        }

        // Check the content type of the request
        if (!string.IsNullOrEmpty(request.ContentType) && (request.ContentType == "application/json" || request.ContentType == "text/html"))
        {
          // Handle the request only if the content type is application/json
        }
        else
        {
          // If the content type is not application/json, return an error response
          context.Response.StatusCode = (int)HttpStatusCode.UnsupportedMediaType;
          context.Response.Close();
        }
      }
    }
  }
}


public class CarInsuranceFormBody
{
  public string Ssn { get; set; }
  public string Email { get; set; }
}
