using System.Threading.Tasks;
using Aurelia.Skeleton.NetCore.Razor.Models;
using Framework.Rendering;
using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("dynamic-html-test")]
    public class DynamicHtmlTestController : Controller
    {
        private readonly IRazorViewRenderService razorViewRenderService;

        public DynamicHtmlTestController(IRazorViewRenderService razorViewRenderService)
        {
            this.razorViewRenderService = razorViewRenderService;
        }

        [Route("")]
        public IActionResult Index()
        {
            return PartialView();
        }

        // Example of dynamically injecting HTML and Model into Aurelia
        [Route("get-editor-ui/{settingsType}")]
        public async Task<JsonResult> GetEditorUI(SettingsType settingsType)
        {
            string view = string.Empty;
            dynamic model = null;

            // This is just for demo purposes. In reality, we would have something like an ISettings interface and various implementations thereof stored in the database.
            string editorTemplatePath = null;
            switch (settingsType)
            {
                case SettingsType.DateTimeSettings:
                    {
                        editorTemplatePath = "/Views/Shared/EditorTemplates/DateTimeSettings.cshtml";
                        model = new
                        {
                            defaultTimeZoneId = string.Empty,
                            allowUsersToSetTimeZone = false
                        };
                    }
                    break;
                case SettingsType.MembershipSettings:
                    {
                        editorTemplatePath = "/Views/Shared/EditorTemplates/MembershipSettings.cshtml";
                        model = new
                        {
                            disallowUnconfirmedUserLogin = false,
                            generatedPasswordLength = 7,
                            generatedPasswordNumberOfNonAlphanumericChars = 3
                        };
                    }
                    break;
                case SettingsType.SiteSettings:
                    {
                        editorTemplatePath = "/Views/Shared/EditorTemplates/SiteSettings.cshtml";
                        model = new
                        {
                            siteName = string.Empty,
                            defaultFrontendLayoutPath = string.Empty,
                            adminLayoutPath = string.Empty,
                            defaultGridPageSize = 0,
                            defaultTheme = string.Empty,
                            allowUserToSelectTheme = false,
                            defaultLanguage = string.Empty,
                            defaultMetaKeywords = string.Empty,
                            defaultMetaDescription = string.Empty,
                            homePageTitle = string.Empty
                        };
                    }
                    break;
            }

            view = await razorViewRenderService.RenderToStringAsync(editorTemplatePath, null, routeData: RouteData, useActionContext: false);

            return Json(new { View = view, Model = model });

            //return Json(new
            //{
            //    View = "<div>Foo: ${foo}</div>",
            //    Model = new
            //    {
            //        Foo = "Bar!"
            //    }
            //});
        }
    }
}