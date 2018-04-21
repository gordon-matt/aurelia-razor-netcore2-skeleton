using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Aurelia.Skeleton.NetCore.Razor.Infrastructure;
using Aurelia.Skeleton.NetCore.Razor.Models;
using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    public class HomeController : Controller
    {
        private readonly IEnumerable<IAureliaRouteProvider> routeProviders;

        public HomeController(
            IEnumerable<IAureliaRouteProvider> routeProviders)
        {
            this.routeProviders = routeProviders;
        }

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

        [Route("get-spa-routes")]
        public JsonResult GetSpaRoutes()
        {
            var routes = routeProviders
                .Where(x => x.Area == "Admin")
                .SelectMany(x => x.Routes);

            return Json(routes);
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