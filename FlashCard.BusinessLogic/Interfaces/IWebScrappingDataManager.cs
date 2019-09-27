using FlashCard.BusinessLogic.ViewModels;
using FlashCard.DataModel.Models;
using System.Collections.Generic;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public interface IWebScrappingDataManager
    {
        List<Topic> GetTopics();
        void CreateTopic(TopicVM topicVM);
        void SaveChanges();
    }
}