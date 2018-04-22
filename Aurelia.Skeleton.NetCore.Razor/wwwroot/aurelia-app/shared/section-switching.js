import $ from 'jquery';

export class SectionSwitcher {
    currentSection = null;

    constructor(id) {
        //console.log('initial section: ' + id);
        this.currentSection = $("#" + id);

        // TODO: Find out why initial section doesn't get hidden the first time swap() is called...
    }

    swap(id) {
        this.currentSection.hide("fast");
        this.currentSection = $("#" + id);
        this.currentSection.show("fast");
    }
}