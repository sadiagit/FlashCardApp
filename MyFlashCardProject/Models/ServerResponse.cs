using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.Models
{
    public class ServerResponse<T>
    {

        public ServerResponse()
        {
            Success = true;
            this.PayLoad = default(T);
        }

        public ServerResponse(bool success, T payLoad, int? total = null, string message = null)
        {
            this.PayLoad = payLoad;
            this.Success = success;
            this.Message = message;
            this.Total = total;
        }
        public ServerResponse(T vm)
        {
            this.PayLoad = vm;
        }
        public bool Success
        {
            get; set;
        }

        public string Message
        {
            get; set;
        }

        public T PayLoad
        {
            get; set;
        }

        public int? Total
        {
            get;
            set;
        }
    }
}
