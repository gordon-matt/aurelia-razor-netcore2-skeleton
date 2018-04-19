using Microsoft.AspNetCore.Mvc;

namespace aurelia_razor_netcore2_skeleton.Controllers
{
    [Route("tutorials")]
    public class TutorialsController : Controller
    {
        [Route("todo")]
        public IActionResult Todo()
        {
            return PartialView();
        }

        [Route("contact-manager")]
        public IActionResult ContactManager()
        {
            return PartialView();
        }
    }
}