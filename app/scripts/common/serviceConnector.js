import WebStorage from './webStorage.js';
export
default {
    ajaxConfig: {
        contentType: 'application/json',
        crossDomain: true,
    },

    get: function(url) {
        this.ajaxConfig.data = null;
        return this.serviceRequest('GET', url);
    },

    serviceRequest: function(httpMethod, httpURL) {
        this.ajaxConfig.url = httpURL;
        this.ajaxConfig.type = httpMethod;
        this.ajaxConfig.headers = '';
        return $.ajax(this.ajaxConfig);
    },

    serviceRequestX(httpMethod, httpURL, header) {
        if (window.navigator.onLine) {
            this.ajaxConfig.url = httpURL;
            this.ajaxConfig.type = httpMethod;
            if (header === true) {
                this.ajaxConfig.contentType = 'application/json';
                this.ajaxConfig.headers = {
                    'Content-Type': 'application/json',
                };
            } else {
                delete this.ajaxConfig.headers;
                delete this.ajaxConfig.contentType;
            }
            return $.ajax(this.ajaxConfig);
        }
    }
}
