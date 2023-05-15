﻿// See https://aka.ms/new-console-template for more information
using System;
using System.Net;
using Company.Function;

class Program
{
  static void Main(string[] args)
  {
    // Console.WriteLine(args.First<string>());
    // Create an HttpListener instance and start listening
    HttpListener listener = new HttpListener();
    listener.Prefixes.Add("http://localhost:8080/");
    listener.Start();

    Console.WriteLine("Listening for requests on http://localhost:8080/...");

    // Handle incoming requests
    while (true)
    {
      // Get the context of the incoming request
      HttpListenerContext context = listener.GetContext();
      HttpListenerRequest request = context.Request;

      Console.WriteLine(string.IsNullOrEmpty(request.ContentType));

      switch (request.HttpMethod)
      {
        case "GET":
          string responseString = "Request accepted.";
          byte[] responseBytes = System.Text.Encoding.UTF8.GetBytes(responseString);
          context.Response.ContentType = "text/plain";
          context.Response.ContentLength64 = responseBytes.Length;
          context.Response.OutputStream.Write(responseBytes, 0, responseBytes.Length);
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
