using System.Threading;
using System.Threading.Tasks;

namespace FlashCard.BusinessLogic.WebScrappers
{
    public interface IDNCScrapper
    {
        Task Start();
    }
}