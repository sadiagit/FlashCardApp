using Microsoft.AspNetCore.Mvc;
using MyFlashCardProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFlashCardProject.Controllers
{
    public class BaseController : ControllerBase
    {
        protected void LogErrorAndSetResponse<T>(Exception e, ServerResponse<T> response)
        {
            if (e.InnerException != null)
            {
                if (e.InnerException.InnerException != null)
                    response.Message = e.InnerException.InnerException.Message;
                else
                    response.Message = e.InnerException.Message;
            }

            else
                response.Message = e.Message;

            response.Success = false;
        }

        public void ExecuteAction<T>(Action action, ServerResponse<T> response)
        {
            try
            {
                action();
            }
            catch (Exception ex)
            {
                LogErrorAndSetResponse<T>(ex, response);
            }

        }

    }
}
