//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

import { PLATFORM } from 'aurelia-pal';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';

        self = this;
        self.router = router;

        $.ajax({
            url: "/get-spa-routes",
            type: "GET",
            dataType: "json",
            async: false
        }).done(function (json) {
            $(json).each(function (index, item) {
                self.router.addRoute({ route: item.route, name: item.name, moduleId: PLATFORM.moduleName(item.moduleId), title: item.title, nav: item.nav ? true : false });
            });
            self.router.refreshNavigation();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        });
    }
}