export default {
  bookMyShowDetails: function() {
    let promise = $.Deferred();
    var myUrl = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';

    var proxy = 'https://cors-anywhere.herokuapp.com/';

    var finalURL = proxy + myUrl;

    // With the get JSON (frequently used) method
    $.getJSON(finalURL, function(data) {
      promise.resolve(data);
    });
    return promise;
  }
};
