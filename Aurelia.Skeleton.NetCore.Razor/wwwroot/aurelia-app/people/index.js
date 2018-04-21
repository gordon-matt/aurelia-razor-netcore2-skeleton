import jQuery from 'jquery';

export class ViewModel {
    constructor() {
        this.datasource = {
            type: 'odata-v4',
            transport: {
                read: '/odata/PersonApi'
            },
            pageSize: 10
        };
    }
}