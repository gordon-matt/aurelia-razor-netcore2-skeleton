import $ from 'jquery';
import { validation } from 'jquery-validation';
import { HttpClient } from 'aurelia-http-client';
import { SectionSwitcher } from '/aurelia-app/shared/section-switching';

export class ViewModel {
    odataBaseUrl = "/odata/PersonApi";

    constructor(sectionSwitcher) {
        this.datasource = {
            type: 'odata-v4',
            transport: {
                read: this.odataBaseUrl
            },
            schema: {
                model: {
                    fields: {
                        FamilyName: { type: "string" },
                        GivenNames: { type: "string" },
                        DateOfBirth: { type: "date" }
                    }
                }
            },
            pageSize: 10,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            sort: [
                { field: "FamilyName", dir: "asc" },
                { field: "GivenNames", dir: "asc" }
            ]
        };
        
        this.http = new HttpClient();
    }

    // Aurelia Component Lifecycle Methods

    attached() {
        this.sectionSwitcher = new SectionSwitcher('grid-section');

        this.validator = $("#form-section-form").validate({
            rules: {
                FamilyName: { required: true, maxlength: 128 },
                GivenNames: { required: true, maxlength: 128 },
                DateOfBirth: { required: true, date: true }
            }
        });
    }

    // END: Aurelia Component Lifecycle Methods

    create() {
        this.id = 0;
        this.familyName = null;
        this.givenNames = null;
        this.dateOfBirth = null;

        this.validator.resetForm();
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

        this.validator.resetForm();
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
        if (!$("#form-section-form").valid()) {
            return false;
        }

        let isNew = (this.id == 0);
        
        let record = {
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