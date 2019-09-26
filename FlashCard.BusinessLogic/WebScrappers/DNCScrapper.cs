using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class DNCScrapper
    {
        public void Start()
        {
            var html = "https://www.dotnetcurry.com/tutorials/aspnet-core";


            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(html);

            var node = htmlDoc.DocumentNode.SelectNodes("//h2[@class='"+ "articlehead']");

            //var links = node[2].SelectNodes("//ul/li/ul/li/div/div/a");
            //foreach(var link in links)
            //{
            //    var l = link.Attributes["href"].Value;
                
            //}

        }
    }
}
