import * as nprogress from 'nprogress';
import { bindable, noView } from 'aurelia-framework';
import '/jspm_packages/github/rstacruz/nprogress@0.2.0/nprogress.css';

@noView
export class LoadingIndicator {
    @bindable loading = false;

    loadingChanged(newValue) {
        if (newValue) {
            nprogress.start();
        }
        else {
            nprogress.done();
        }
    }
}