using Microsoft.AspNetCore.Mvc;

namespace aurelia_razor_netcore2_skeleton.Controllers
{
    [Route("contact-manager")]
    public class ContactManagerController : Controller
    {
        [Route("index")]
        public IActionResult Index()
        {
            return PartialView();
        }

        [Route("list")]
        public IActionResult List()
        {
            return PartialView();
        }

        [Route("details")]
        public IActionResult Details()
        {
            return PartialView();
        }

        [Route("no-selection")]
        public IActionResult NoSelection()
        {
            return PartialView();
        }
    }
}