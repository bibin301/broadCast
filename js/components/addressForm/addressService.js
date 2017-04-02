


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('addressSrv', addressSrv);

  addressSrv.$inject = ['$http'];

  function addressSrv($http) {
    return {
      
      userCreate: function(usrData) {
        return $http({
          url: 'http://jsonplaceholder.typicode.com/posts',
          method: "get",
          
          
        });

      }
    
     

    }
  }
})();
