using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("todo-list")]
    public class TodoListController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return PartialView();
        }
    }
}