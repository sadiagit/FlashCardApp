using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MyFlashCardProject.BackgroundServices;
using NCrontab;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MyFlashCardProject.Schedulers
{
    /// <summary>
    /// From https://thinkrethink.net/2018/05/31/run-scheduled-background-tasks-in-asp-net-core/
    /// </summary>
    public abstract class ScheduledProcessor : BackgroundService
    {
        private CrontabSchedule _schedule;
        private DateTime _nextRun;
        protected abstract string Schedule { get; }

        private IServiceProvider _serviceProvider;
        public ScheduledProcessor(IServiceProvider serviceProvider) : base()
        {
            _serviceProvider = serviceProvider;
            _schedule = CrontabSchedule.Parse(Schedule);
            _nextRun = _schedule.GetNextOccurrence(DateTime.Now);
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            do
            {
                try
                {
                    var now = DateTime.Now;
                    //var nextrun = _schedule.GetNextOccurrence(now);
                    if (now > _nextRun)
                    {
                        await ProcessInScope();
                        _nextRun = _schedule.GetNextOccurrence(DateTime.Now);
                    }
                    await Task.Delay(5000, stoppingToken); //5 seconds delay
                }
                catch (Exception ex)
                {
                    Log.Error(ex, "Scheduled task error");
                    
                }
            }
            while (!stoppingToken.IsCancellationRequested);
        }

        private async Task ProcessInScope()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                await ProcessAsync(scope);
            }
        }
        protected abstract Task ProcessAsync(IServiceScope scope);
    }
}
