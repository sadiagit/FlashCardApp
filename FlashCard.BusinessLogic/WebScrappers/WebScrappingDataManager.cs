using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FlashCard.BusinessLogic.ViewModels;
using FlashCard.DataModel;
using FlashCard.DataModel.Models;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public class WebScrappingDataManager : BaseManager
    {
        public WebScrappingDataManager(FlashCardContext dataContext) : base(dataContext)
        {
        }

        public void CreateTopic(TopicVM vm)
        {
            var isNewTopic = vm.TopicId == null;
            Topic topic = null;
            if (isNewTopic)
            {
                topic = new Topic()
                {
                    TopicTitle = vm.Title,
                    TopicLink = vm.Link,
                    TopicAdded = DateTime.Now
                };

            }
            else
            {
                topic = DataContext.Topics.SingleOrDefault(t => t.TopicId == vm.TopicId);
                if(topic != null)
                {
                    topic.TopicTitle = vm.Title;
                    topic.TopicLink = vm.Link;                    
                }
            }
        }
    }
}
