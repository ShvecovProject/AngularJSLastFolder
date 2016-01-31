/**
 * Created by Shvecov_Evgeniy on 14.12.2015.
 */

var TextAreaWithLimitCtrl = function($scope) {
    var MAX_LEN=50,
        WARN_THRESHOLD=40;
    $scope.message="";
    $scope.remaining = function () {
        return MAX_LEN - $scope.message.length;
    };
    $scope.shouldWarn = function(){
      return $scope.remaining() < WARN_THRESHOLD;
    };
    $scope.clear = function(){
      $scope.message="";
    };
};




/*
Views Templates.
Кагда браузер заканчивает превращение текста разметки в дерево DOM, AngularJS активизируется и выполняет обход
структуры DOM. Каждый раз когда стречает дерективу он выполняет свою логику, превращая дерективу в динамическую часть экрана.

AngularJS дает возможность расширять словарь HTML.

Angular js поддерживаеться декларативного подхода к конструированию пользовательского интерфейса.
Это означает что шаблоны описывают желаемый результат а не способ его достижения.
 */