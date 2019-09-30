using FlashCard.BusinessLogic.WebScrappers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MyFlashCardProject.BackgroundServices
{
    public class DNCScrapperHostedService : ScopedProcessor
    {
        public DNCScrapperHostedService(IServiceProvider services) : base(services)
        {
        }

        protected override async Task ProcessAsync(IServiceScope scope)
        {
            var scopedProcessingService = scope.ServiceProvider.GetRequiredService<IDNCScrapper>();

            await scopedProcessingService.Start();
        }





    }
}