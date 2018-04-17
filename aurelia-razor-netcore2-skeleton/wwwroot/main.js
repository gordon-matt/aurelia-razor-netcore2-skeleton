import {LogManager} from "aurelia-framework";
import {ConsoleAppender} from "aurelia-logging-console";
import {ViewLocator} from "aurelia-framework";
 
LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);
 
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    ViewLocator.prototype.convertOriginToViewUrl = function(origin) {
        var split = origin.moduleId.split("/");
        var name = split[split.length-1].replace(".js", "");
        return name;
    }
 
    //aurelia.start().then(a => a.setRoot());
    aurelia.start().then(a => a.setRoot("./app", document.body));
}
