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
        public Task<int> Start()
        {
            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(WebLink);

            var result = ParseHtmlDoc(htmlDoc);

            return Task.FromResult(result);
        }

        protected abstract int ParseHtmlDoc(HtmlDocument htmldoc);

    }
}

