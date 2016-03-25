/**
 * Created by Evgeniy on 3/17/2016.
 */
angular.module("ValidationGenericApp",[])

.controller("ValidationGenericAppCtrl",function($scope){
        $scope.getCssClasses = function(ngModelController){
            return {
                error:ngModelController.$invalid && ngModelController.$dirty,
                success:ngModelController.$valid && ngModelController.$dirty
            }
        };
        $scope.showError = function(ngModelController, error){
            return ngModelController.$error[error];
        };
        $scope.toJSON = function(data){
            return JSON.stringify(data,null,2);
        }
        $scope.canSave = function(){
            return $scope.UserInfoForm.$dirty && $scope.UserInfoForm.$valid;
        }
    })
.controller("RepeatCtrl", function($scope){
      $scope.users={
          userWebSites:[                    // не можно использовать массив строк. Так как строки передаються по значению из-за чего при попытке
              {url:"www.yandex.ru"},        // адресс в поле ввода связь между строкой в блоке ng-repeat будет утеряна.
              {url:"www.vk.com"}
          ]
      };
        $scope.removeWebSite = function(index){
            $scope.users.userWebSites.splice(index,1);
        };
        $scope.addWebSite = function(){
            $scope.users.userWebSites.push({url:''});
        };
    })
.controller("ValidationGenericItemsCtrl",function($scope){
        $scope.users={
            userWebSites:[                    // не можно использовать массив строк. Так как строки передаються по значению из-за чего при попытке
                {url:"http://www.yandex.ru"},        // адресс в поле ввода связь между строкой в блоке ng-repeat будет утеряна.
                {url:"http://www.vk.com"}
            ]
        };
        $scope.showError=function(ngModelController, error){
            return ngModelController.$error[error];
        };
        $scope.addWebSite = function(){
            $scope.users.userWebSites.push({url:''});
        };
    })
/*
ngFormController
Каждая директива form или ngForm создает экземпляр контроллера ngFormController
обьект ngFormController управляет признаками допустимости и наличия изменений в форме. Он использует контроллер ngModelController
для проверки каждого поля с директивой ngModel в форме.
В момент создания контроллер ngModelController регистрирует себя в первом контроллере ngFormController с которым сталкиваеться в списке
своих родительских элементов. Благодаря этому ngFormController знает все свои директивы ввода, за которыми ему нужно следить.
Он может проверить допустимость этих полей, признак изменений в них и установить соответствующие признаки для всей формы.

Использовыание аттрибута name для включения форм в контекст.

Есть возможность сделать контроллер ngFormController доступным в локальном контексте, указав имяформы.
Любые элементы ввода внутри формы также имеющие имена, получат доступ в своем обьекте ngFormController
Вложенные формы


 */