//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: [''], name: 'index', moduleId: './index', nav: true, title: 'Home' },
            { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title:'Flickr' },
            { route: 'test-page', name: 'test-page', moduleId: './test-page', nav: true, title:'Test Page' },
            { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
        ]);
        this.router = router;
    }
}