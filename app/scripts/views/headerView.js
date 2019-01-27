import domeEventHandler from '../common/domEventHandler.js';
import headerTemplate from '../../templates/headerTemplate.html';

export default {
  render: function() {
    this.registerDomEvents();
  },
  registerDomEvents: function() {
    domeEventHandler.renderMyTemplate('headerCntr', headerTemplate);
  }
};
