using System.Collections.Generic;

namespace Aurelia.Skeleton.NetCore.Razor.Infrastructure
{
    public interface IAureliaRouteProvider
    {
        string Area { get; }

        IEnumerable<AureliaRoute> Routes { get; }

        IDictionary<string, string> ModuleIdToViewUrlMappings { get; }
    }

    // NOTE: the "aurelia-app" route prefix is required (see main.js for the reason why)
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
                routes.Add(new AureliaRoute { Route = "todo-list/index", Name = "todo-list/index", ModuleId = "/aurelia-app/todo-list/index", Nav = true, Title = "Todo List" });
                routes.Add(new AureliaRoute { Route = "contact-manager/index", Name = "contact-manager/index", ModuleId = "/aurelia-app/contact-manager/index", Nav = true, Title = "Contact Manager" });
                routes.Add(new AureliaRoute { Route = "people", Name = "people/index", ModuleId = "/aurelia-app/people/index", Nav = true, Title = "People" });
                //routes.Add(new AureliaRoute { Route = "test/test-page", Name = "test/test-page", ModuleId = "./aurelia-app/test1/test-page", Nav = true, Title = "Test Page" });
                //routes.Add(new AureliaRoute { Route = "child-router", Name = "child-router", ModuleId = "./aurelia-app/child-router", Nav = true, Title = "Child Router" });

                return routes;
            }
        }

        public IDictionary<string, string> ModuleIdToViewUrlMappings => new Dictionary<string, string>
        {
            // HomeController
            { "aurelia-app/index", "index" },
            { "aurelia-app/app", "app" },
            { "aurelia-app/nav-bar", "nav-bar" },
            { "aurelia-app/flickr", "flickr" },

            // ContactManagerController
            { "aurelia-app/contact-manager/index", "contact-manager" },
            { "aurelia-app/contact-manager/details", "contact-manager/details" },
            { "aurelia-app/contact-manager/list", "contact-manager/list" },
            { "aurelia-app/contact-manager/no-selection", "contact-manager/no-selection" },

            // PersonController
            { "aurelia-app/people/index", "people" },

            // TodoListController
            { "aurelia-app/todo-list/index", "todo-list" }
        };
    }
}