using HtmlAgilityPack;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public abstract class BaseScrapper
    {
        protected BaseScrapper(IWebScrappingDataManager dataManager)
        {
            DataManager = dataManager;
        }

        protected abstract string WebLink { get; }
        protected IWebScrappingDataManager DataManager { get; set; }
        public IServiceProvider Services { get; }
        public async Task Start(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                HtmlWeb web = new HtmlWeb();

                var htmlDoc = web.Load(WebLink);

                ParseHtmlDoc(htmlDoc);

                await Task.Delay(10000, stoppingToken);
            }

        }

        protected abstract void ParseHtmlDoc(HtmlDocument htmldoc);


        //while (!stoppingToken.IsCancellationRequested)
        //{
        //    Start();
        //    await Task.Delay(500, stoppingToken);
        //}
    }
}

