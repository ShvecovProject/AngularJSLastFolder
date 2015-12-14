/**
 * Created by Shvecov_Evgeniy on 14.12.2015.
 */

var TextAreaWithLimitCtrl = function($scope) {
    $scope.remaining = function () {
        return MAX_LEN - $scope.message.length;
    };
    $scope.shouldWarn = function(){
      return $scope.remaining() < WARN_THRESHOLD;
    };
};




/*
Views Templates.
Кагда браузер заканчивает превращение текста разметки в дерево DOM, AngularJS активизируется и выполняет обход
структуры DOM. Каждый раз когда стречает дерективу он выполняет свою логику, превращая дерективу в динамическую часть экрана.

AngularJS дает возможность расширять словарь HTML.
 */