module.exports = function (window) {
    "use strict";

    require('itags.core')(window);

    var itagName = 'i-formelement', // <-- define your own itag-name here
        DOCUMENT = window.document,
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.defineItag(itagName, {
            attrs: {
                'i-prop': 'string'
            },

            init: function() {
                this.setAttr('itag-formelement', 'true', true);
            },

            valueProperty: 'value', // this is the default, but could be overridden

            getValue: function() {
                var element = this;
                return element.model[element.valueProperty];
            },

            currentToReset: function() {
                var element = this,
                    model = element.model;
                model['reset-value'] = model[element.valueProperty];
            },

            reset: function() {
                var element = this,
                    model = element.model;
                model[element.valueProperty] = model['reset-value'];
            }

        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
