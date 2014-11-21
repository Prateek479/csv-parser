'use strict';

angular.module('mean.uploader').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('uploader example page', {
      url: '/uploader/example',
      templateUrl: 'uploader/views/index.html'
    });
  }
]).factory('fileuploader', function($upload) {
  return {
    upload: function(file, callback) {
      $upload.upload({
        url: 'uploadFile',
        method: 'POST',
        file: file
      }).success(function(data, status, headers, config) {
        callback(data);
      });
    }
  };
});