using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FlashCard.DataModel.Models
{
    public class FlashCardType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string TypeId { get; set; }
        public string Description { get; set; }
    }
}
