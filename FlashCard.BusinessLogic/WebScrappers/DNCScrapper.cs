using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class DNCScrapper : BaseScrapper
    {
        public DNCScrapper(WebScrappingDataManager dataManager) : base(dataManager)
        {
        }

        protected override string WebLink => "https://www.dotnetcurry.com/tutorials/aspnet-core";

        protected override void ParseHtmlDoc(HtmlDocument htmldoc)
        {

            var nodes = htmldoc.DocumentNode.SelectNodes("//h2[@class='" + "articlehead']");
            //foreach(var node in nodes)
            //{
            //            DataManager.CreateTopic()
            //}

        }
    }
}
