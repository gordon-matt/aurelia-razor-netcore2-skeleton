import { LogManager, PLATFORM, ViewLocator } from "aurelia-framework";
import { ConsoleAppender } from "aurelia-logging-console";

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .globalResources([
            PLATFORM.moduleName('/aurelia-app/shared/loading-indicator')
        ]);

    ViewLocator.prototype.convertOriginToViewUrl = function (origin) {
        //console.log("origin: " + JSON.stringify(origin));
        var viewUrl = null;
        var idx = origin.moduleId.indexOf('aurelia-app');

        if (idx != -1) {
            viewUrl = origin.moduleId.substring(idx + 11).replace(".js", '');
        }
        else {
            var split = origin.moduleId.split("/");
            viewUrl = split[split.length - 1].replace(".js", '');
        }
        //console.log('View URL: ' + viewUrl);
        return viewUrl;
    }

    //aurelia.start().then(a => a.setRoot());
    aurelia.start().then(a => a.setRoot("./app", document.body));
}