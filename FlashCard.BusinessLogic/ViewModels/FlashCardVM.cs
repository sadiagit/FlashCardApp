using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.DataModels.ViewModels
{
    public class FlashCardVM
    {
        public int? FlashCardId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Type { get; set; }
        public int Category { get; set; }

    }
}
