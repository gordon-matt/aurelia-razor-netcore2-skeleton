import { LogManager, PLATFORM, ViewLocator } from "aurelia-framework";
import { ConsoleAppender } from "aurelia-logging-console";

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-bridge', (kendo) => kendo.detect().notifyBindingBehavior())
        .globalResources([
            PLATFORM.moduleName('/aurelia-app/shared/loading-indicator')
        ]);

    ViewLocator.prototype.convertOriginToViewUrl = function (origin) {

        //console.log("origin: " + JSON.stringify(origin));
        var viewUrl = null;
        var idx = origin.moduleId.indexOf('aurelia-app');

        // The majority of views should be under /wwwroot/aurelia-app
        if (idx != -1) {
            viewUrl = origin.moduleId.substring(idx + 11).replace(".js", '');
        }
        // JSPM packages may need to load HTML files (example: aurelia-kendoui-bridge)
        // TODO: This is not perfect.. (what if the view we want to show is normal HTML, but not in jspm_packages folder?)
        else if (origin.moduleId.indexOf('jspm_packages') !== -1) {
            viewUrl = origin.moduleId.replace(".js", '.html');
        }
        else {
            // This is for any js files in top-level of /wwwroot directory (should point to HomeController).
            var split = origin.moduleId.split("/");
            viewUrl = split[split.length - 1].replace(".js", '');
        }

        console.log('View URL: ' + viewUrl);
        return viewUrl;
    }

    //aurelia.start().then(a => a.setRoot());
    aurelia.start().then(a => a.setRoot("./app", document.body));
}