import $ from 'jquery';
import { HttpClient } from 'aurelia-http-client';
import { SectionSwitcher } from '/aurelia-app/shared/section-switching';

export class ViewModel {
    odataBaseUrl = "/odata/PersonApi";
    id = 0;
    familyName = null;
    givenNames = null;
    dateOfBirth = null;

    constructor(sectionSwitcher) {
        this.sectionSwitcher = new SectionSwitcher('grid-section');

        this.datasource = {
            type: 'odata-v4',
            transport: {
                read: this.odataBaseUrl
            },
            pageSize: 10
        };
        
        this.http = new HttpClient();
    }

    create() {
        this.id = 0;
        this.familyName = null;
        this.givenNames = null;
        this.dateOfBirth = null;

        $("#form-section-legend").html("Create");
        this.sectionSwitcher.swap('form-section');
    }

    async edit(id) {
        let response = await this.http.get(this.odataBaseUrl + "(" + id + ")");
        let entity = response.content;

        this.id = entity.Id;
        this.familyName = entity.FamilyName;
        this.givenNames = entity.GivenNames;
        this.dateOfBirth = entity.DateOfBirth;

        $("#form-section-legend").html("Edit");
        this.sectionSwitcher.swap('form-section');
    }

    async remove(id) {
        if (confirm("Are you sure that you want to delete this record?")) {
            let response = await this.http.delete(this.odataBaseUrl + "(" + id + ")");
            
            this.grid.dataSource.read();
            this.grid.refresh();
        }
    }

    async save() {
        var isNew = (this.id == 0);
        
        var record = {
            Id: this.id,
            FamilyName: this.familyName,
            GivenNames: this.givenNames,
            DateOfBirth: this.dateOfBirth
        };

        if (isNew) {
            let response = await this.http.post(this.odataBaseUrl, record);
        }
        else {
            let response = await this.http.put(this.odataBaseUrl + "(" + this.id + ")", record);
        }

        this.grid.dataSource.read();
        this.grid.refresh();

        this.sectionSwitcher.swap('grid-section');
    }

    cancel() {
        this.sectionSwitcher.swap('grid-section');
    }
}