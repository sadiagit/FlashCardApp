using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.DataModels.ViewModels
{
    public class CategoryVM
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? ParentCategoryId { get; set; }
    }
}
