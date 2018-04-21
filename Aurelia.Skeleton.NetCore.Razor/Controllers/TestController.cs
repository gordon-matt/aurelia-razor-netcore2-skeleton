using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("test1")]
    public class TestController : Controller
    {
        [Route("test-page")]
        public IActionResult TestPage()
        {
            return PartialView();
        }
    }
}