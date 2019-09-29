using HtmlAgilityPack;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class DNCScrapper : BaseScrapper, IDNCScrapper
    {
        public DNCScrapper(IWebScrappingDataManager dataManager) : base(dataManager)
        {
        }

        protected override string WebLink => "https://www.dotnetcurry.com/tutorials/aspnet-core";

       

        protected override void ParseHtmlDoc(HtmlDocument htmldoc)
        {

            var nodes = htmldoc.DocumentNode.SelectNodes("//h2[@class='" + "articlehead']");
            foreach (var node in nodes)
            {
                var link = node.ChildNodes[1];// ("//a[@class='artid']");
                var linkHref = link.GetAttributeValue("href", null);
                var tittle = link.InnerText;
                DataManager.CreateTopic(new ViewModels.TopicVM() { Link = linkHref, Title = tittle });
                
            }
            DataManager.SaveChanges();

        }
    }
}
