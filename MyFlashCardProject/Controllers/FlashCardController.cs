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

            sr.PayLoad = new List<FlashCardVM>() { new FlashCardVM() {Question= "What is docker?", Answer="this is a <p><strong>test</strong></p>", Type="General"},
                new FlashCardVM() {Question= "Code", Answer="if(true)"+"\r\n{"+"\r\n  print('apple');"+"\r\n}",  Type="Code"}
            };
            return new OkObjectResult(sr);
        }
        [HttpGet("categories")]
        public ActionResult GetCategories()
        {
            var sr = new ServerResponse<List<CategoryVM>>();
            sr.PayLoad = _flashCardContext.Categories.ToList().Select(c => new CategoryVM() { CategoryId = c.CategoryId, CategoryName = c.CategoryName, ParentCategoryId = c.ParentCategory?.CategoryId }).ToList();

            //    new List<CategoryVM>()
            //{
            //    new CategoryVM(){ CategoryId=1,CategoryName="Networking"},
            //    new CategoryVM(){ CategoryId=2,CategoryName="Cisco", ParentCategoryId=1},
            //    new CategoryVM(){ CategoryId=3,CategoryName="Programming"},
            //    new CategoryVM(){ CategoryId=4,CategoryName="Algorithm", ParentCategoryId=3},
            //    new CategoryVM(){ CategoryId=5,CategoryName="BFS", ParentCategoryId=4},
            //    new CategoryVM(){ CategoryId=6,CategoryName="DFS", ParentCategoryId=4},
            //    new CategoryVM(){ CategoryId=7,CategoryName="DataStructure", ParentCategoryId=3}

            //};

            return new OkObjectResult(sr);
        }

        [HttpPost("addnew")]
        public ActionResult AddNewFlashCard(FlashCardVM vm)
        {
            var sr = new ServerResponse<string>();
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
