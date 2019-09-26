using FlashCard.BusinessLogic.WebScrappers;
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var scrapper = new DNCScrapper();
            scrapper.Start();
        }
    }
}
