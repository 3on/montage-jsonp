/* globals module */
var LibraryItem = require("filament-extension/core/library-item").LibraryItem;

var moduleLocation = module.location.replace(/[^\/]+.js$/m, "");

exports.JSONP = LibraryItem.specialize({

    constructor: {
        value: function JSONPLibraryItem () {
            this.super();
        }
    },

    name: {
        value: "JSONP"
    },

    description: {
        value: "Montage package to handle JSONP requests."
    },

    iconUrl: {
        value: moduleLocation + "jsonp.png"
    }

});
