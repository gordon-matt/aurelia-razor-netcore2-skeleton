import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';
import { ContactUpdated, ContactViewed } from './messages';

@inject(WebAPI, EventAggregator)
export class ContactList {
    constructor(api, eventAggregator) {
        this.api = api;
        this.contacts = [];

        eventAggregator.subscribe(ContactViewed, msg => this.select(msg.contact));
        eventAggregator.subscribe(ContactUpdated, msg => {
            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id == id);
            Object.assign(found, msg.contact);
        });
    }

    created() {
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }
}