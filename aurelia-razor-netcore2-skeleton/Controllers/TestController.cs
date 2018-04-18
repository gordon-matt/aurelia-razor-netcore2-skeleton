using Microsoft.AspNetCore.Mvc;

namespace aurelia_razor_netcore2_skeleton.Controllers
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