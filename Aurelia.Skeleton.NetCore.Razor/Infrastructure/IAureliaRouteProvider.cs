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

                // HomeController
                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/index",
                    Route = "",
                    Name = "index",
                    Title = "Home",
                    Nav = true
                });

                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/flickr",
                    Route = "flickr",
                    Name = "flickr",
                    Title = "Flickr",
                    Nav = true
                });

                // ContactManagerController
                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/contact-manager/index",
                    Route = "contact-manager/index",
                    Name = "contact-manager/index",
                    Title = "Contact Manager",
                    Nav = true
                });

                // TodoListController
                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/todo-list/index",
                    Route = "todo-list/index",
                    Name = "todo-list/index",
                    Title = "Todo List",
                    Nav = true
                });

                // PersonController
                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/people/index",
                    Route = "people",
                    Name = "people/index",
                    Title = "People",
                    Nav = true
                });

                // DynamicHtmlTestController
                routes.Add(new AureliaRoute
                {
                    ModuleId = "/aurelia-app/dynamic-html-test/index",
                    Route = "dynamic-html-test",
                    Name = "dynamic-html-test/index",
                    Title = "Dynamic HTML Test",
                    Nav = true
                });

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
            { "aurelia-app/todo-list/index", "todo-list" },

            // DynamicHtmlTestController
            { "aurelia-app/dynamic-html-test/index", "dynamic-html-test" }
        };
    }
}