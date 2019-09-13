using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlashCard.DataModel;
using FlashCard.DataModel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyFlashCardProject.Models;

namespace MyFlashCardProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlashCardController : ControllerBase
    {
        private readonly FlashCardContext _flashCardContext;
        public FlashCardController(FlashCardContext context)
        {
            _flashCardContext = context;
        }
        // GET api/<controller>/5
        [HttpPost("get")]
        public ActionResult GetFlashCards(FlashCardSearchVM vm)
        {
            var sr = new ServerResponse<List<FlashCardVM>>();
            sr.PayLoad = _flashCardContext.FlashCards.Where(fc => vm.SelectedCategory.CategoryId == fc.Category.CategoryId && (string.IsNullOrEmpty(vm.SearchText) || fc.Question.Contains(vm.SearchText) || fc.Answer.Contains(vm.SearchText)))
                .Select(fc => new FlashCardVM() { Question = fc.Question, Answer = fc.Answer, Category = fc.Category.CategoryId, Type = fc.FlashCardType.TypeId }).ToList();
                     
            return new OkObjectResult(sr);
        }
        [HttpGet("categories")]
        public ActionResult GetCategories()
        {
            var sr = new ServerResponse<List<CategoryVM>>();
            sr.PayLoad = _flashCardContext.Categories.ToList().Select(c => new CategoryVM() { CategoryId = c.CategoryId, CategoryName = c.CategoryName, ParentCategoryId = c.ParentCategory?.CategoryId }).ToList();                

            return new OkObjectResult(sr);
        }

        [HttpPost("addnew")]
        public ActionResult AddNewFlashCard(FlashCardVM vm)
        {
            var sr = new ServerResponse<string>();
            _flashCardContext.FlashCards.Add(new FlashCard.DataModel.Models.FlashCard()
            { Answer = vm.Answer, Question = vm.Question, Category = _flashCardContext.Categories.Single(c => c.CategoryId == vm.Category), FlashCardType = _flashCardContext.FlashCardTypes.Single(t => t.TypeId == vm.Type) });

            _flashCardContext.SaveChanges();

            sr.PayLoad = "good";
            return new OkObjectResult(sr);

        }
        [HttpPost("addcategory")]
        public ActionResult AddCategory(CategoryVM vm)
        {
            var sr = new ServerResponse<string>();
            _flashCardContext.Categories.Add(new Category { CategoryName = vm.CategoryName, ParentCategory = vm.ParentCategoryId == null ? null : _flashCardContext.Categories.FirstOrDefault(c => c.CategoryId == vm.ParentCategoryId) });
            _flashCardContext.SaveChanges();
            sr.PayLoad = "good";
            return new OkObjectResult(sr);

        }
    }
}
