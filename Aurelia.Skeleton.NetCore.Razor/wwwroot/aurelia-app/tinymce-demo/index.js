import 'jquery';
import 'tinymce/themes/silver/theme';

import 'tinymce/plugins/advlist/plugin';
import 'tinymce/plugins/anchor/plugin';
import 'tinymce/plugins/autolink/plugin';
import 'tinymce/plugins/charmap/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/contextmenu/plugin';
import 'tinymce/plugins/directionality/plugin';
import 'tinymce/plugins/emoticons/plugin';
import 'tinymce/plugins/fullscreen/plugin';
import 'tinymce/plugins/hr/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/insertdatetime/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/plugins/media/plugin';
import 'tinymce/plugins/nonbreaking/plugin';
import 'tinymce/plugins/pagebreak/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/preview/plugin';
import 'tinymce/plugins/print/plugin';
import 'tinymce/plugins/save/plugin';
import 'tinymce/plugins/searchreplace/plugin';
import 'tinymce/plugins/table/plugin';
import 'tinymce/plugins/template/plugin';
import 'tinymce/plugins/textcolor/plugin';
import 'tinymce/plugins/visualblocks/plugin';
import 'tinymce/plugins/visualchars/plugin';
import 'tinymce/plugins/wordcount/plugin';

export class ViewModel {
    constructor() {
        this.content = 'Hello World!';

        this.options = {
            theme: "silver",
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor"
            ],
            toolbar1: "insertfile undo redo | styleselect | ltr rtl | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            toolbar2: "print preview media | forecolor backcolor emoticons",
            image_advtab: true,
            image_dimensions: false,
            height: 400,
            allow_script_urls: true,
            allow_events: true,
            valid_elements: '+*[*]',
            extended_valid_elements: '+*[*]',
            valid_children: "+body[style]"
        };
    }
}