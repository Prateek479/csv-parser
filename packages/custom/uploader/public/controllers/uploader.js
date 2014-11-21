'use strict';

angular.module('mean.uploader').controller('UploaderController', ['$scope', '$http', 'Global', 'Uploader', 'fileuploader',
  function($scope, $http, Global, Uploader, fileuploader) {
    $scope.global = Global;
    $scope.package = {
      name: 'uploader'
    };
    $scope.valueToSend = {};
    $scope.uploadfile = function($files) {
      $scope.filePath = [];
      $files.map(function(file) {
        fileuploader.upload(file, function(data) {
          $scope.table = data;
          $scope.valueToSend.table = data;
          $scope.attributes = [];
          $scope.showTable = true;
          for (var j in data[0]) {
            var sub_key = j;
            if (sub_key !== undefined || sub_key !== null)
              $scope.attributes.push(sub_key);
          }
        });
      });
    };

    $scope.genrateCrossTabulation = function(firstOption, secondOption) {
      if (firstOption !== undefined && secondOption !== undefined) {
        $scope.showTabulation = true;
        $scope.firstFilter = firstOption;
        $scope.secondFilter = secondOption;
        $scope.arr1 = _.chain($scope.table).map(function(item) {
          return item[firstOption];
        }).uniq().value();
        $scope.arr2 = _.chain($scope.table).map(function(item) {
          return item[secondOption];
        }).uniq().value();
      } else {
        alert("please select field for cross tabulation");
      }
    };
  }
]);