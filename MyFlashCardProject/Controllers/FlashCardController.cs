using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlashCard.BusinessLogic;
using FlashCard.BusinessLogic.Interfaces;
using FlashCard.DataModel;
using FlashCard.DataModel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyFlashCardProject.DataModels.ViewModels;
using MyFlashCardProject.Models;

namespace MyFlashCardProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlashCardController : BaseController
    {
        private readonly IFlashCardManager _manager;
        public FlashCardController(IFlashCardManager manager)
        {
            _manager = manager;
        }
        // GET api/<controller>/5
        [HttpPost("get")]
        public ActionResult GetFlashCards(FlashCardSearchVM vm)
        {
            var sr = new ServerResponse<List<FlashCardVM>>();
            ExecuteAction(() =>
            {
                sr.PayLoad = _manager.GetFlashCards(vm).Select(fc => new FlashCardVM() { Question = fc.Question, Answer = fc.Answer, Category = fc.Category.CategoryId, Type = fc.FlashCardType.TypeId }).ToList();
            }, sr);

            return new OkObjectResult(sr);
        }
        [HttpGet("categories")]
        public ActionResult GetCategories()
        {
            var sr = new ServerResponse<List<CategoryVM>>();
            ExecuteAction(() =>
            {
                sr.PayLoad = _manager.GetCategories().Select(c => new CategoryVM() { CategoryId = c.CategoryId, CategoryName = c.CategoryName, ParentCategoryId = c.ParentCategory?.CategoryId }).ToList();
            }, sr);

            return new OkObjectResult(sr);
        }

        [HttpPost("addnew")]
        public ActionResult AddNewFlashCard(FlashCardVM vm)
        {
            var sr = new ServerResponse<string>();
            ExecuteAction(() =>
            {
                _manager.AddNewFlashCard(vm);
                sr.PayLoad = "good";
            }, sr);
           
            return new OkObjectResult(sr);

        }
        [HttpPost("addcategory")]
        public ActionResult AddCategory(CategoryVM vm)
        {
            var sr = new ServerResponse<string>();

            ExecuteAction(() =>
            {
                _manager.AddCategory(vm);
                sr.PayLoad = "good";
            }, sr);

            return new OkObjectResult(sr);

        }
    }
}
