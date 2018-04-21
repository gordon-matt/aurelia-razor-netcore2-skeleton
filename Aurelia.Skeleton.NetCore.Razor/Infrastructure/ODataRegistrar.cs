using System;
using Aurelia.Skeleton.NetCore.Razor.Data.Domain;
using Framework.OData;
using Microsoft.AspNet.OData.Builder;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNetCore.Routing;

namespace Aurelia.Skeleton.NetCore.Razor.Infrastructure
{
    public class ODataRegistrar : IODataRegistrar
    {
        public void Register(IRouteBuilder routes, IServiceProvider services)
        {
            ODataModelBuilder builder = new ODataConventionModelBuilder(services);

            builder.EntitySet<Person>("PersonApi");

            routes.MapODataServiceRoute("OData", "odata", builder.GetEdmModel());
        }
    }
}