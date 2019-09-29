using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class DNCScrapperHostedService : BackgroundService
    {
        public DNCScrapperHostedService(IServiceProvider services)
        {
            Services = services;
        }

        public IServiceProvider Services { get; private set; }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            await DoWork(stoppingToken);
        }

        private async Task DoWork(CancellationToken stoppingToken)
        {

            using (var scope = Services.CreateScope())
            {
                var scopedProcessingService =
                    scope.ServiceProvider
                        .GetRequiredService<IDNCScrapper>();

                await scopedProcessingService.Start(stoppingToken);
            }
        }

        public override async Task StopAsync(CancellationToken stoppingToken)
        {
            await Task.CompletedTask;
        }
    }
}