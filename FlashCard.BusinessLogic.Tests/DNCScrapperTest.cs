using FlashCard.BusinessLogic.WebScrappers;
using FlashCard.DataModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FlashCard.BusinessLogic.Tests
{
    [TestClass]
    public class DNCScrapperTest
    {
        [TestMethod]
        public void CanParseHtml()
        {
            // https://www.carlrippon.com/testing-ef-core-repositories-with-xunit-and-an-in-memory-db/
            DbContextOptions<FlashCardContext> options;
            var builder = new DbContextOptionsBuilder<FlashCardContext>();
            builder.UseInMemoryDatabase("FlashCardDB");
            options = builder.Options;
            FlashCardContext dtaContext = new FlashCardContext(options);
            dtaContext.Database.EnsureDeleted();
            dtaContext.Database.EnsureCreated();

            DNCScrapper scrapper = new DNCScrapper(new WebScrappingDataManager(dtaContext));
            scrapper.StartAsync(new System.Threading.CancellationToken());
        }
    }
}
