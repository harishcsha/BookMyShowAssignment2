import headerCntr from '../scripts/controller/headerCtrl.js';
import WelcomeCntr from '../scripts/controller/welcomeCtrl.js';
import videoCntr from '../scripts/controller/videoCtrl.js';

(function() {
  routie({
    '/header': function() {
      headerCntr.init();
    },
    '/welcome': function() {
      WelcomeCntr.init();
    },
    '/video-link/:documentInfo?': function(documentInfo) {
      videoCntr.init(documentInfo);
    },
    '*': function() {
      headerCntr.init();
      WelcomeCntr.init();
    }
  });
})();
