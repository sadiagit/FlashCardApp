using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
