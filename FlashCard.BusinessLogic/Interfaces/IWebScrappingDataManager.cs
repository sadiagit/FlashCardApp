using FlashCard.BusinessLogic.ViewModels;
using FlashCard.DataModel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public interface IWebScrappingDataManager
    {
        List<Topic> GetTopics();
        void CreateTopic(TopicVM topicVM);
        int SaveChanges();
        Task<int> GetUnreadTopicsCount();
    }
}