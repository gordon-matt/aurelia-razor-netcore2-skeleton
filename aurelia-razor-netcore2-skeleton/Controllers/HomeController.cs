using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using aurelia_razor_netcore2_skeleton.Infrastructure;
using aurelia_razor_netcore2_skeleton.Models;
using Microsoft.AspNetCore.Mvc;

namespace aurelia_razor_netcore2_skeleton.Controllers
{
    public class HomeController : Controller
    {
        private readonly Lazy<IEnumerable<IAureliaRouteProvider>> routeProviders;

        public HomeController(
            Lazy<IEnumerable<IAureliaRouteProvider>> routeProviders)
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

        [Route("test-page")]
        public IActionResult TestPage()
        {
            return PartialView();
        }

        [Route("get-spa-routes")]
        public JsonResult GetSpaRoutes()
        {
            var routes = routeProviders.Value
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