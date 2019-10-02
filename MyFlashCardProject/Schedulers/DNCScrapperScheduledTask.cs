using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlashCard.BusinessLogic.WebScrappers;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using MyFlashCardProject.SignalR;

namespace MyFlashCardProject.Schedulers
{
    public class DNCScrapperScheduledTask : ScheduledProcessor
    {
        public DNCScrapperScheduledTask(IServiceProvider serviceProvider, IHubContext<NotificationHub> hubContext) : base(serviceProvider)
        {
            _hubContext = hubContext;

        }

        public IHubContext<NotificationHub> _hubContext { get; private set; }

        protected override string Schedule => "*/10 * * * *"; //every 2 hours

        protected override async Task ProcessAsync(IServiceScope scope)
        {
            var scopedProcessingService =
                     scope.ServiceProvider
                         .GetRequiredService<IDNCScrapper>();
            var dataManager =
                    scope.ServiceProvider
                        .GetRequiredService<IWebScrappingDataManager>();

            var result = await scopedProcessingService.Start();
            if (result > 0)
            {
                var unreadTOpics = await dataManager.GetUnreadTopicsCount();

                await _hubContext.Clients.All.SendAsync("messageReceived", unreadTOpics); // angular listening on this method in AppController
            }
        }
    }
}
