(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'苏志敏',
        ab:'',
        name1:'苏志敏',
        phone:'15659795319',
        phone1:'15659795319',
        createTime:'2017-9-28 14:30:00',
        email:'1535529505@qq.com',
        hylx:'111'
      });
    });
  }])
})();
