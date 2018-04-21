using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("tutorials")]
    public class TutorialsController : Controller
    {
        [Route("todo")]
        public IActionResult Todo()
        {
            return PartialView();
        }
    }
}