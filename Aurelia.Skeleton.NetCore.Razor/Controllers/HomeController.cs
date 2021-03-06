﻿using System.Collections.Generic;
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

        [Route("get-moduleId-to-viewUrl-mappings")]
        public JsonResult GetModuleIdToViewUrlMappings()
        {
            var mappings = routeProviders
                .Where(x => x.Area == "Admin")
                .SelectMany(x => x.ModuleIdToViewUrlMappings);

            return Json(mappings);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}