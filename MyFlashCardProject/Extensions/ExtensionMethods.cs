using FlashCard.DataModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MyFlashCardProject
{
    public static class ExtensionMethods
    {
        /// <summary>  
        /// Migrates the database.  
        /// </summary>  
        /// <typeparam name="T"></typeparam>  
        /// <param name="webHost">The web host.</param>  
        /// <returns>IWebHost.</returns>  
        public static IWebHost CreateDatabase<T>(this IWebHost webHost) where T : DbContext
        {
            using (var scope = webHost.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    Log.Information("Applying DB Migrations... ");
                    var db = services.GetRequiredService<T>();
                    db.Database.Migrate();
                }
                catch (Exception ex)
                {
                    Log.Error(ex, "Database Creation/Migrations failed!");
                }
            }
            return webHost;
        }

        public static void SeedDataBase(this IApplicationBuilder builder)
        {

            int retry = 0;
            Thread.Sleep(40000);//waiting for the sqlserver to up and running
            using (var scope = builder.ApplicationServices.CreateScope())
            {
                var context = scope.ServiceProvider.GetService<FlashCardContext>();

                using (context)
                {
                    try
                    {
                        Log.Information("Applying DB Migrations... ");
                        context.Database.Migrate();
                    }
                    catch (Exception ex)
                    {

                        while (retry < 10)
                        {
                            Thread.Sleep(20000);

                            try
                            {
                                Log.Information("retrying DB Migrations... ");
                                context.Database.Migrate();
                            }
                            catch (Exception)
                            {
                                Log.Warning(ex, "Database Creation/Migrations failed!");
                                retry++;
                            }
                        }
                        Log.Error(ex, "Database Creation/Migrations failed!");
                    }
                    finally
                    {
                        Log.CloseAndFlush();
                    }
                }
            }

        }


    }
}
