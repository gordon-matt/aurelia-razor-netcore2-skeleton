using System;
using System.Collections.Generic;
using Aurelia.Skeleton.NetCore.Razor.Data;
using Aurelia.Skeleton.NetCore.Razor.Infrastructure;
using Aurelia.Skeleton.NetCore.Razor.Models;
using Aurelia.Skeleton.NetCore.Razor.Services;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Framework.Data;
using Framework.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Aurelia.Skeleton.NetCore.Razor
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ServiceProvider { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();

            services.AddOData();

            services.AddMvc();

            ServiceProvider = InitializeContainer(services);
            return ServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                // Enable all OData functions
                routes.Select().Expand().Filter().OrderBy().MaxTop(null).Count();

                var registrars = ServiceProvider.GetRequiredService<IEnumerable<IODataRegistrar>>();
                foreach (var registrar in registrars)
                {
                    registrar.Register(routes, app.ApplicationServices);
                }

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        private static IServiceProvider InitializeContainer(IServiceCollection services)
        {
            var builder = new ContainerBuilder();
            builder.Populate(services);

            builder.RegisterType<ApplicationDbContextFactory>().As<IDbContextFactory>().SingleInstance();

            builder.RegisterGeneric(typeof(EntityFrameworkRepository<>))
                .As(typeof(IRepository<>))
                .InstancePerLifetimeScope();

            builder.RegisterType<AureliaRouteProvider>().As<IAureliaRouteProvider>().InstancePerDependency();
            builder.RegisterType<ODataRegistrar>().As<IODataRegistrar>().SingleInstance();

            builder.RegisterType<PersonService>().As<IPersonService>().InstancePerDependency();

            var container = builder.Build();
            return new AutofacServiceProvider(container);
        }
    }
}