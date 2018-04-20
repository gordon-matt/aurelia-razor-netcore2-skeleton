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

                routes.Add(new AureliaRoute { Route = "", Name = "index", ModuleId = "/aurelia-app/index", Nav = true, Title = "Home" });
                routes.Add(new AureliaRoute { Route = "flickr", Name = "flickr", ModuleId = "/aurelia-app/flickr", Nav = true, Title = "Flickr" });
                routes.Add(new AureliaRoute { Route = "tutorials/todo", Name = "tutorials/todo", ModuleId = "/aurelia-app/tutorials/todo", Nav = true, Title = "Todo List" });
                routes.Add(new AureliaRoute { Route = "contact-manager/index", Name = "contact-manager/index", ModuleId = "/aurelia-app/contact-manager/index", Nav = true, Title = "Contact Manager" });
                //routes.Add(new AureliaRoute { Route = "test/test-page", Name = "test/test-page", ModuleId = "./aurelia-app/test1/test-page", Nav = true, Title = "Test Page" });
                //routes.Add(new AureliaRoute { Route = "child-router", Name = "child-router", ModuleId = "./aurelia-app/child-router", Nav = true, Title = "Child Router" });

                return routes;
            }
        }
    }
}