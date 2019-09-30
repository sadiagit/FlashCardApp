using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlashCard.BusinessLogic.WebScrappers;
using Microsoft.Extensions.DependencyInjection;

namespace MyFlashCardProject.Schedulers
{
    public class DNCScrapperScheduledTask : ScheduledProcessor
    {
        public DNCScrapperScheduledTask(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        protected override string Schedule => "* */2 * * *"; //every 2 hours

        protected override async Task ProcessAsync(IServiceScope scope)
        {
            var scopedProcessingService =
                     scope.ServiceProvider
                         .GetRequiredService<IDNCScrapper>();

            await scopedProcessingService.Start();
        }
    }
}
