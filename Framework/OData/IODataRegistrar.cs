using System;
using Microsoft.AspNetCore.Routing;

namespace Framework.OData
{
    public interface IODataRegistrar
    {
        void Register(IRouteBuilder routes, IServiceProvider services);
    }
}