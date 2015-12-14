/**
 * Created by Shvecov_Evgeniy on 14.12.2015.
 */
angular.module('hello', [ ]).controller('HelloWorldCtrl', function($scope){
    $scope.first_name = 'World';
    $scope.last_name = "Worlds";
    $scope.getFirstName = function(){
        return $scope.first_name;
    };
    $scope.getLastName = function(){
        return $scope.last_name;
    };
});

var NotificationService = function() {
    this.MAX_LENGTH = 10;
    this.notificationArchive = new ArtificationArchive();
    this.notifications = [];
};
NotificationService.prototype.push = function(notification) {
    var newLen,
        notificationToArchive;

    newLen = this.notifications.unshift(notification);
    if (newLen > this.MAX_LENGTH) {
        notificationToArchive = this.notifications.pop();
        this.notificationArchive.archive(notificationToArchive;
    }

};
var ArtificationArchive = function(){

};

/*
Сам ангуляр определяет глобальное просторанство имен angular. В нем находятся различные вспомогательные функции и утилиты,
в число которых входит также функция module.
Функция module действует как контейнер для других обьектов(контроллеров, служб и тд), управляемых AngularJS

Что бы определить новый модуль необходимо передать функции module его имя в первом аргументе.
С помошью второго аргумента можно определить зависимости от других модулей.
В ответ функция module возвращает экземпляр вновь созданного модуля. Получив доступ к этому экземпляру
мы можем приступать к определению новых контроллеров, для чего достаточно вызвать функцию controller
со следующими аргументами:
* имя конроллера
* функция конструктор контроллера

После обявления модуля необходимо сообщить AngularJS о его существовании
для этого: нужно указать имя модуля в аттрибуте ng-app
                ng-app="hello"

взаимодействие обьектов
 Внедрение зависимостей
 Angular JS - имеет встроенный механизм внедрения зависимостей(DI)
 Он может выполнять следующие действия:
 * распозновать потребности во вспомогательных обьектах, выражаемых декларативным способом
 * находить необходимые вспомогательные обьекты
 * связывать обьекты между собой
Возможность декларативно выражать зависимоти предосталяет широчайшие возможности, она особождает
от необходимости беспокоиться о жизненом цикле вспомогательных обьектов.
Что еще лучше, взаимозаменяемость вспомогательных обьектов позволяет создать различные
приложения простой заменой одних служб другими.

 */