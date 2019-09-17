using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.DataModels.ViewModels
{
    public class FlashCardSearchVM
    {
        public CategoryVM SelectedCategory{get;set;}
        public string SearchText { get; set; }
    }
}
