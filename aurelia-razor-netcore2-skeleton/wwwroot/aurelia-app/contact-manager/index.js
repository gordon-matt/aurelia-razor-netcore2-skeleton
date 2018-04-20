import { inject, PLATFORM } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class ContactManager {
    constructor(api) {
        this.api = api;
    }

    configureRouter(config, router) {
        config.title = 'Contact Manager';
        config.map([
            { route: '', redirect: 'contact-manager/no-selection' },
            { route: 'contact-manager/no-selection', name: 'contact-manager/no-selection', moduleId: PLATFORM.moduleName('./no-selection'), title: 'Select' },
            { route: 'contact-manager/list', name: 'contact-manager/list', moduleId: PLATFORM.moduleName('./list'), title: 'Contacts List' },
            { route: 'contact-manager/details/:id', name: 'contact-manager/details', moduleId: PLATFORM.moduleName('./details'), title: 'Contact Details' }
        ]);

        this.router = router;
    }
}