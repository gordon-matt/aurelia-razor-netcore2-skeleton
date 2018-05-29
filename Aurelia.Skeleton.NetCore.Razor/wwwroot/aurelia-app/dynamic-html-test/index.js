import 'jquery';
import 'jquery-validation';
import { HttpClient } from 'aurelia-http-client';

export class ViewModel {
    dynamicHtml = '';
    dynamicModel = {};

    constructor() {
        this.http = new HttpClient();
        this.settingsType = null;
    }

    async getSettingsUI() {
        if (this.settingsType) {
            let response = await this.http.get("/dynamic-html-test/get-editor-ui/" + this.settingsType);
            let content = response.content;

            this.dynamicHtml = content.view;
            this.dynamicModel = content.model;
        }
    }

    handleCompiled($event) {
        const el = $event.detail.el;
        $(el.querySelectorAll('[data-toggle="tab"]')).tab();
    }
}