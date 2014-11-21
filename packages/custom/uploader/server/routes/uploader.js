'use strict';

var uploader = require('../controllers/uploader');
// The Package is past automatically as first parameter
module.exports = function(Uploader, app, auth, database) {
  app.post('/uploadFile', uploader.uploadFile);
};