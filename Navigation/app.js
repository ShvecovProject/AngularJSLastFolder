/**
 * Created by Evgeniy on 3/20/2016.
 */
angular.module("locationApp",['ngRoute'])
.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
        $routeProvider
            .when('/list', {templateUrl:'list.html', controller:'UserListCtrl'})
                .when('/admin/users/new',{templateUrl:'tpls/new.html'})
                . when('/admin/users/:id',{templateUrl:'tpls/edit.html'})
                . otherwise({redirectTo:'admin/users/list'})

    }])
.controller("NavigationCtrl",function($scope){
        /*var routes={
            'admin/users/list':{templateUrl:'tpls/users/list.html'},
            'admin/users/new':{templateUrl:'tpls/users/new.html'},
            'admin/users/edit':{templateUrl:'tpls/users/edit.html'}
        };
        var defaultRoute = routes['admin/users/list'];

        $scope.$watch(function(){
           return $location.path();
        },function(newPath){
            $scope.selectedRoute=routes[newPath]||defaultRoute;
        });*/

    })
.controller("UserListCtrl",function($scope){

    })