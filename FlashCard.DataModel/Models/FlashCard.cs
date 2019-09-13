using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FlashCard.DataModel.Models
{
    public class FlashCard
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int FlashCardId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        
        public virtual FlashCardType FlashCardType { get; set; }

        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
    }
}
