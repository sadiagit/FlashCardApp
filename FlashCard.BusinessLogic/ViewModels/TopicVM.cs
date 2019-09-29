using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic.ViewModels
{
    public class TopicVM
    {
        public int? TopicId { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public DateTime TopicAdded { get; set; }
        public DateTime TopicLastRead { get; set; }
        public bool Interested { get; set; }
    }

    public static class VmTransform
    {
        //public static TopicVM ToVM(this HtmlNode node)
        //{

        //}
    }

}
