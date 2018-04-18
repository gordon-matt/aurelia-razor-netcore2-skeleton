using System.Collections.Generic;

namespace aurelia_razor_netcore2_skeleton.Infrastructure
{
    public interface IAureliaRouteProvider
    {
        string Area { get; }

        IEnumerable<AureliaRoute> Routes { get; }
    }

    public class AureliaRouteProvider : IAureliaRouteProvider
    {
        public string Area => "Admin";

        public IEnumerable<AureliaRoute> Routes
        {
            get
            {
                var routes = new List<AureliaRoute>();

                routes.Add(new AureliaRoute { Route = "", Name = "index", ModuleId = "./index", Nav = true, Title = "Home", JsPath = "TODO" });
                routes.Add(new AureliaRoute { Route = "flickr", Name = "flickr", ModuleId = "./flickr", Nav = true, Title = "Flickr", JsPath = "TODO" });
                routes.Add(new AureliaRoute { Route = "test-page", Name = "test-page", ModuleId = "./test-page", Nav = true, Title = "Test Page", JsPath = "TODO" });
                routes.Add(new AureliaRoute { Route = "child-router", Name = "child-router", ModuleId = "./child-router", Nav = true, Title = "Child Router", JsPath = "TODO" });

                return routes;
            }
        }
    }
}