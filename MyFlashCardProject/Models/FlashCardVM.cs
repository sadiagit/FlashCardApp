using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.Models
{
    public class FlashCardVM
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Type { get; set; }
        public int Category { get; set; }

    }
}
