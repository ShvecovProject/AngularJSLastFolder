/**
 * Created by Shvecov_Evgeniy on 10.03.2016.
 */
angular.module("app",[])
.controller("UserCtrl",function($scope, $http,$log){

    $scope.addUserToStore = function(){
        var model = {
            userName:$scope.userName,
            userEmail :$scope.userEmail
        };
        $http.post('https://api.mlab.com/api/1/databases/scrumusers/collections/users/',
            model,
            {
                params: {
                    apiKey:"H7NnGFZwutQwxFP6T8Kc_XhkQe4Z4ygX"
                }
            })
            .success(function(data, status, headers, config){
                $scope.userName ="";
                $scope.userEmail = "";
                $scope.users.push(model);
                console.log(data);
            })
            .error(function(data, status, headers, config){

            });
    };

        $scope.getAllUsers=function(){
            $http.get('https://api.mlab.com/api/1/databases/scrumusers/collections/users/',
                {
                    params: {
                        apiKey:"H7NnGFZwutQwxFP6T8Kc_XhkQe4Z4ygX"
                    }
                })
                .then(function(response){
                    $scope.users = response.data;
                   $log.info(response);
                },function(response){
                    $log.warn(response)
                });
                /*.error(function(data, status, headers, config){

                });*/
        }
        $scope.users= $scope.getAllUsers();

    });