'use strict';

/**
 * @ngdoc function
 * @name nodeMongoResearchApp.controller:AddRecordCtrl
 * @description
 * # AddRecordCtrl
 * Controller of the nodeMongoResearchApp
 */
angular.module('nodeMongoResearchApp')
  .controller('AddRecordCtrl',['$scope', function ($scope) {
    console.log("insdie AddRecordCtrl");
    $scope.addRecordDetails = function (){
    	console.log("insdie add");
    }
  }]);