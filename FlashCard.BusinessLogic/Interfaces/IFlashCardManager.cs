using FlashCard.DataModel.Models;
using MyFlashCardProject.DataModels.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FlashCard.BusinessLogic.Interfaces
{
    public interface IFlashCardManager
    {
        void AddCategory(CategoryVM vm);
        List<Category> GetCategories();
        IQueryable<DataModel.Models.FlashCard> GetFlashCards(FlashCardSearchVM vm);
        void AddNewFlashCard(FlashCardVM vm);
    }
}
