using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlashCard.BusinessLogic.WebScrappers;
using Microsoft.AspNetCore.Mvc;

namespace MyFlashCardProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : BaseController
    {
        public TopicController(IWebScrappingDataManager dataManager)
        {
            _manager = dataManager;

        }

        public IWebScrappingDataManager _manager { get; private set; }

        public IActionResult GetTopics()
        {
            _manager.GetTopics();
            return new OkObjectResult("st");
        }
    }
}