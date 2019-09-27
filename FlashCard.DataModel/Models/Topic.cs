using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace FlashCard.DataModel.Models
{
    public class Topic
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int TopicId { get; set; }
        public string TopicTitle { get; set; }
        public string TopicLink { get; set; }
        public DateTime TopicAdded { get; set; }
        public DateTime? TopicLastRead { get; set; }
        public bool? Interested { get; set; }

    }
}
