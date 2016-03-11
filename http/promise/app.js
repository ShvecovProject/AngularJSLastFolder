/**
 * Created by Shvecov_Evgeniy on 10.03.2016.
 */
/*var Person = function(name, $log){
    this.eat=function(food){
        $log.info(name+"is eating delicious" + food);
    }
    this.beHungry = function(reason){
        $log.warn(name + "is hungry because:" + reason);
    }
};

it('should illustrate basic usage of $q',function(){
    var pizzaOrderFulfillment = $q.defer(),
        pizzaDelvered = pizzaOrderFulfillment.promise;
    pizzaDelvered.then(pawel.eat, pawel.beHungry)
});*/

angular.module('myApp',['ngResource'])
.factory('Users',function($resource,$http,$log){
       return $resource(
           'https://api.mlab.com/api/1/databases/scrumusers/collections/users/:id',
           {
               apiKey:'H7NnGFZwutQwxFP6T8Kc_XhkQe4Z4ygX',
               id:'@_id.$oid'
           }
       )
    })
.controller('ResourceCtrl',function($scope, Users){
        $scope.users = Users.query();
});