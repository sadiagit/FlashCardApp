using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public abstract class BaseScrapper
    {
        protected BaseScrapper(WebScrappingDataManager dataManager)
        {
            DataManager = dataManager;
        }

        protected abstract string WebLink { get; }
        protected WebScrappingDataManager DataManager { get; set; }
        public void Start()
        {
            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(WebLink);

            ParseHtmlDoc(htmlDoc);

        }

        protected abstract void ParseHtmlDoc(HtmlDocument htmldoc);
    }
}
