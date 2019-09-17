using FlashCard.BusinessLogic.Interfaces;
using FlashCard.DataModel;
using FlashCard.DataModel.Models;
using MyFlashCardProject.DataModels.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FlashCard.BusinessLogic
{
    public class FlashCardManager : BaseManager, IFlashCardManager
    {
        public FlashCardManager(FlashCardContext context) : base(context)
        {

        }

        public List<Category> GetCategories()
        {
            return DataContext.Categories.ToList();
        }
        public void AddCategory(CategoryVM vm)
        {
            var category = DataContext.Categories.SingleOrDefault(c => c.CategoryName == vm.CategoryName && c.ParentCategory.CategoryId == vm.ParentCategoryId);
            var isNew = category == null;
            if (isNew)
            {
                DataContext.Categories.Add(new Category { CategoryName = vm.CategoryName, ParentCategory = vm.ParentCategoryId == null ? null : DataContext.Categories.FirstOrDefault(c => c.CategoryId == vm.ParentCategoryId) });
                DataContext.SaveChanges();
            }
            else
            {
                throw new Exception($"Category {category.CategoryName} already exists under parent {category.ParentCategory?.CategoryName}. Please change the parent category or add as a new parent category. ");
            }
        }
        public IQueryable<DataModel.Models.FlashCard> GetFlashCards(FlashCardSearchVM vm)
        {
            return DataContext.FlashCards.Where(fc => vm.SelectedCategory.CategoryId == fc.Category.CategoryId && (string.IsNullOrEmpty(vm.SearchText) || fc.Question.Contains(vm.SearchText) || fc.Answer.Contains(vm.SearchText)));
        }
        public void AddNewFlashCard(FlashCardVM vm)
        {
            try
            {
                var isNew = vm.FlashCardId == null;
                if (isNew)
                {
                    DataContext.FlashCards.Add(new DataModel.Models.FlashCard()
                    { Answer = vm.Answer, Question = vm.Question, Category = DataContext.Categories.Single(c => c.CategoryId == vm.Category), FlashCardType = DataContext.FlashCardTypes.Single(t => t.TypeId == vm.Type) });
                }
                else
                {
                    var flashCard = DataContext.FlashCards.SingleOrDefault(c => c.FlashCardId == vm.FlashCardId);
                    if (flashCard != null)
                    {
                        flashCard.Question = vm.Question;
                        flashCard.Answer = vm.Answer;
                        flashCard.FlashCardType = DataContext.FlashCardTypes.Single(t => t.TypeId == vm.Type);
                        flashCard.Category = DataContext.Categories.Single(c => c.CategoryId == vm.Category);
                    }
                }
                DataContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception($"Problem creating new flash card, see inner exception: {ex}");
            }
        }
    }
}
