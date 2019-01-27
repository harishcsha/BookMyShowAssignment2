import domeEventHandler from '../common/domEventHandler.js';
import welcomeTemplate from '../../templates/welcomeTemplate.html';
import welcomeSvc from '../service/welComeSvc.js';
import WelcomeDomEventHandler from '../dom-events/welcomeDomEventHandler.js';
import bookMyShowModal from '../model/bookMyShowModal.js';

export default {
  render: function() {
    this.registerDomEvents();
  },
  registerDomEvents: function() {
    welcomeSvc.bookMyShowDetails().then(res => {
      let documentType = {};
      documentType.label = res;

      bookMyShowModal.setfields(documentType);

      domeEventHandler.renderMyTemplate('container', welcomeTemplate, { documentType });
      domeEventHandler.bindClassEvent('video_link', 'click', WelcomeDomEventHandler.youtubeLink);
    });
  }
};
