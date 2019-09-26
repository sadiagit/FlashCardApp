using FlashCard.BusinessLogic.WebScrappers;
using NUnit.Framework;
using System;

namespace FlashCard.BusinessLogic.Tests
{
    [TestFixture]
    public class DNCScrapperTest
    {
        [Test]
        public void ParseTest()
        {
            var scrapper = new DNCScrapper();
            scrapper.Start();

        }
    }
}
