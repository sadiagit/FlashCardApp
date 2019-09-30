using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FlashCard.BusinessLogic.ViewModels;
using FlashCard.DataModel;
using FlashCard.DataModel.Models;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class WebScrappingDataManager : BaseManager, IWebScrappingDataManager
    {
        public WebScrappingDataManager(FlashCardContext dataContext) : base(dataContext)
        {
        }

        public void CreateTopic(TopicVM vm)
        {
            var isNewTopic = vm.TopicId == null || DataContext.Topics.FirstOrDefault(t => t.TopicTitle == vm.Title) == null;
            Topic topic = null;
            if (isNewTopic)
            {
                topic = new Topic()
                {
                    TopicTitle = vm.Title,
                    TopicLink = vm.Link,
                    TopicAdded = DateTime.Now
                };

                DataContext.Topics.Add(topic);
            }
            else
            {
                topic = DataContext.Topics.SingleOrDefault(t => t.TopicId == vm.TopicId);
                if (topic != null)
                {
                    topic.TopicTitle = vm.Title;
                    topic.TopicLink = vm.Link;
                }
            }
        }
        public void UpdateLastRead(int topicId)
        {
            var topic = DataContext.Topics.SingleOrDefault(t => t.TopicId == topicId);
            if (topic != null)
            {
                topic.TopicLastRead = DateTime.Now;
            }

        }
        public void UpdateInterested(int topicId, bool interested)
        {
            var topic = DataContext.Topics.SingleOrDefault(t => t.TopicId == topicId);
            if (topic != null)
            {
                topic.Interested = interested;
            }

        }
        public List<Topic> GetTopics()
        {
            return DataContext.Topics.Where(t => t.Interested.HasValue && t.Interested.Value).ToList();
        }
    }
}
