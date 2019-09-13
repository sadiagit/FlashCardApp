using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FlashCard.DataModel.Models
{
    public class Category
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        [ForeignKey("ParentCategoryId")]
        public Category ParentCategory { get; set; }
        public virtual ICollection<FlashCard> FlashCards { get; set; }
    }
}
