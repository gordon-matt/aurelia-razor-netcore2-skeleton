export class ChildRouter{
    heading = 'Child Router';

    configureRouter(config, router){
        config.map([
            { route: [''], name: 'index', moduleId: './index', nav: true, title: 'Home' },
            { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title:'Flickr' },
            { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
        ]);

        this.router = router;
    }
}