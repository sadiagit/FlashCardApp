using FlashCard.BusinessLogic.WebScrappers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MyFlashCardProject.BackgroundServices
{
    public abstract class ScopedProcessor : BackgroundService
    {
        public IServiceProvider Services { get; private set; }
        public ScopedProcessor(IServiceProvider services) : base()
        {
            Services = services;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            do
            {
                await ProcessInScope();            

            }
            while (!stoppingToken.IsCancellationRequested);
        }
        private async Task ProcessInScope()
        {
            using (var scope = Services.CreateScope())
            {
                await ProcessAsync(scope);
            }
        }
        protected abstract Task ProcessAsync(IServiceScope scope);
    }
}
