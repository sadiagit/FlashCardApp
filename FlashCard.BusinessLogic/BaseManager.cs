using FlashCard.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic
{
    public class BaseManager
    {
        public FlashCardContext DataContext;
        public BaseManager(FlashCardContext dataContext)
        {
            DataContext = dataContext;
        }
    }
}
