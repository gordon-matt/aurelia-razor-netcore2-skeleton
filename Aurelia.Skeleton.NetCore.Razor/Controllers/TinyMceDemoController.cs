using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("tinymce-demo")]
    public class TinyMceDemoController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return PartialView();
        }
    }
}