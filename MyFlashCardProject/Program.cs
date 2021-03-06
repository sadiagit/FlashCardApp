﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FlashCard.DataModel;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;

namespace MyFlashCardProject
{
    public class Program
    {
        private static string _environmentName;

        public static void Main(string[] args)
        {
            
            try
            {
                var webHost = CreateWebHostBuilder(args).Build();

                var configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json")
                            .AddJsonFile($"appsettings.{_environmentName}.json", optional: true, reloadOnChange: true) //read appsettings for specific env
                            .Build();

                //adding serilog https://github.com/serilog/serilog-aspnetcore
                //https://itnext.io/loggly-in-asp-net-core-using-serilog-dc0e2c7d52eb
                Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose()
                    .Enrich.WithProperty("ApplicationContext", "FlashCard")
                    .Enrich.FromLogContext()
                    .WriteTo.Console()
                    .WriteTo.Seq("http://seq")
                    .ReadFrom.Configuration(configuration)
                    .CreateLogger();                
                webHost.Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");

            }
            finally
            {
                Log.CloseAndFlush();

            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureLogging((hostingContext, config) =>
            {
                config.ClearProviders(); //clear default providers frm default builder to use serilog provider
                _environmentName = hostingContext.HostingEnvironment.EnvironmentName;
            })
            .UseStartup<Startup>()
            .UseSerilog();
    }

}
