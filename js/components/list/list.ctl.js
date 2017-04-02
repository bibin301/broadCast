(function(){

'use strict';
angular.module(appObj.id).controller('listCtl',listCtl);

listCtl.$inject = ['$scope','listSrv','$filter','$rootScope'];

function listCtl($scope,listSrv,$filter,$rootScope){

$scope.user='';
$scope.information ="my information";
// $scope.MyListData = [];
// console.log("push data" , $scope.MyListData)

 $rootScope.$on(

  'myevent', function(events, args){
  $scope.user="bibin";
  console.log("list controller is working")
    console.log("second controller" , args)
        console.log(args);
        $scope.user = args;
        console.log("second controller information" , $scope.user)
      });



$scope.getValue = function(){
  alert("hello");
   $rootScope.$on('userData',function(event,data){

    ///$scope.MyListData.push("hello");
   
    console.log("getting data from parent controller",data[0].title); // My broad cast message
    $scope.userDataInfo = data;
    console.log("event second" , $scope.userDataInfo)


    
   });
 };


// $scope.testUser =function(){
//   alert("second");
//  $rootScope.$on('userData', function(events, args){
//     console.log("second controller" , args)
//         $scope.userInfo ="success";
//         $scope.userdata = args;
//         console.log("second controller information" , args)
//       });
// }
   



}
})();



