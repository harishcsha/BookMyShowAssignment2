export
default {
    storage: window.sessionStorage,
    sstorage: window.localStorage,
    get: function(itemName) {
        return this.storage.getItem(itemName);
    },
    getSession: function(itemName) {
        return this.sstorage.getItem(itemName);
    },
    setSession: function(itemName, data) {
        this.sstorage.setItem(itemName, data);
    },
    getCollection: function(itemName) {
        return JSON.parse(this.storage.getItem(itemName));
    },

    set: function(itemName, data) {
        this.storage.setItem(itemName, data);
    },

    setCollection: function(itemName, data) {
        this.storage.setItem(itemName, JSON.stringify(data));
    },

    remove: function(itemName) {
        this.storage.removeItem(itemName);
    },

    clear: function() {
        this.storage.clear();
    }
}
