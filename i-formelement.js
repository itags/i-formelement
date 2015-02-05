module.exports = function (window) {
    "use strict";

    require('polyfill/polyfill-base.js');
    require('itags.core')(window);

    var itagName = 'i-formelement', // <-- define your own itag-name here
        DOCUMENT = window.document,
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.createItag(itagName, {
            init: function() {
                this.setAttr('itag-formelement', 'true', true);
            }
        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
