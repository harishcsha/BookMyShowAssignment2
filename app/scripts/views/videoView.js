import domEventhandler from './../common/domEventHandler.js';
import videoTemplate from './../../templates/videoTemplate.html';
import bookMyShowModal from '../model/bookMyShowModal.js';

export default {
  render: function(documentInfo) {
    this.registerDomEventHandler(documentInfo);
  },
  registerDomEventHandler: function(documentInfo) {
    let modalResponse = bookMyShowModal.getfields().label[1];
    if (modalResponse.hasOwnProperty(documentInfo)) {
      let getObjectForTrailer = Object.values(modalResponse).find(res => res.EventCode === documentInfo).TrailerURL;

      function YouTubeGetID(getObjectForTrailer) {
        var ID = '';
        let url = getObjectForTrailer.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
          ID = url[2].split(/[^0-9a-z_\-]/i);
          ID = ID[0];
        } else {
          ID = url;
        }
        return ID;
      }
      let decodedUrl = YouTubeGetID(getObjectForTrailer);

      let getCompleteObject = Object.values(modalResponse).find(res => res.EventCode === documentInfo);

      domEventhandler.renderMyTemplate('container', videoTemplate, { decodedUrl, getCompleteObject });
    }
  }
};
