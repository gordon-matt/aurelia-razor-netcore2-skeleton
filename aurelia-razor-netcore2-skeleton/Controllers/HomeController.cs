using System.Diagnostics;
using aurelia_razor_netcore2_skeleton.Models;
using Microsoft.AspNetCore.Mvc;

namespace aurelia_razor_netcore2_skeleton.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        public IActionResult Host()
        {
            return View();
        }

        [Route("index")]
        public IActionResult Index()
        {
            return PartialView();
        }

        [Route("app")]
        public IActionResult App()
        {
            return PartialView();
        }

        [Route("nav-bar")]
        public IActionResult NavBar()
        {
            return PartialView();
        }

        [Route("flickr")]
        public IActionResult Flickr()
        {
            return PartialView();
        }

        [Route("test-page")]
        public IActionResult TestPage()
        {
            return PartialView();
        }

        //public IActionResult About()
        //{
        //    ViewData["Message"] = "Your application description page.";
        //    return PartialView();
        //}

        //public IActionResult Contact()
        //{
        //    ViewData["Message"] = "Your contact page.";
        //    return PartialView();
        //}

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}