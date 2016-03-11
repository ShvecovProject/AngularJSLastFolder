angular.module('customResourceDemo',['mongolabResource'])
.constant('MONGOLAB_CONFIG',{
       DB_NAME:'scrumusers',
        API_KEY:'H7NnGFZwutQwxFP6T8Kc_XhkQe4Z4ygX'
    })
.factory('Users', function(mongolabResource){
      return mongolabResource('users');
    })
.controller('CustomResourceCtrl', function($scope, Users){
    Users.query().then(function(users){
       $scope.users =  users;
    });
        $scope.addUserToStore = function(){
          var model = new Users({
            userName:$scope.userName,
            userEmail:$scope.userEmail
          });
            model.$save().then(function(data){
                $scope.users.push(model);
            });
            /*Users.save(model).then(function(){
                $scope.users.push(model);
            });*/
        };
    });