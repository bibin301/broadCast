(function(){
	'use strict';
  angular.module(appObj.id).controller('addressCtrl',addressCtrl);
  addressCtrl.$inject = ['$scope','addressSrv','$rootScope'];
  function addressCtrl($scope,addressSrv,$rootScope){


 $scope.register = function(){
  alert("hi bibin");

        $rootScope.$broadcast('myevent', $scope.name)
      }


      $scope.go = function() {
  alert("hello bibin");
$rootScope.$broadcast('parent', 'Sathyalog')
console.log("this is parent");
}

addressSrv.userCreate().success(function(data){
  console.log("list info" ,data)

  $rootScope.$broadcast('userData', data)



})




  }

})();
