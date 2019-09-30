using HtmlAgilityPack;
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
        public Task Start()
        {
            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(WebLink);

            ParseHtmlDoc(htmlDoc);

            return Task.CompletedTask;
        }

        protected abstract void ParseHtmlDoc(HtmlDocument htmldoc);

    }
}

