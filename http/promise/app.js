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
     var Users =  $resource(
           'https://api.mlab.com/api/1/databases/scrumusers/collections/users/:id',//шаблон URL, может содержать именнованные параметры, начинающиеся с двоеточия
           {// параметры по умолчанию передаваемые при каждом запросе.Как определенные в шаблоне так и те поторы передаются в строке запрова
               apiKey:'H7NnGFZwutQwxFP6T8Kc_XhkQe4Z4ygX',
               id:'@_id.$oid'// инамический параметр
           }
       ,{// новй метод
           update:{method:'PUT'}// template: action:{method:?, params:?, isArray:?, headers:?}
       });
        Users.prototype.getDataForAccount = function(){
          return this.userName +  ":" + this.userEmail;
        };
        return Users;
    })
.controller('ResourceCtrl',function($scope,$log, Users){
        $scope.users = Users.query(function(users){
            $log.info(users.length);
        });
        $scope.addUserToStore = function(){
            var user = new Users({
                userName:$scope.userName,
                userEmail:$scope.userEmail
            });

            user.$save();
        }
});