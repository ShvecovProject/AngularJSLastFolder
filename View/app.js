/**
 * Created by Shvecov_Evgeniy on 11.03.2016.
 */
angular.module("ViewDataInAngular",[])
/*
*  К любой дерективе можно обратиться с шаблона  множестваом разных эквивалентных имен.
*  ngModel === data-ng-model===x-ng-Model и тд.
*  Префикс data поможет пройти валидация html5 документа
*  деректива интерполяции <span>{{ }}</span>
*  Ограничители выражения можно настроить:
*  myModule.config(function($interpolateProvider){
*       $interpolateProvider.startSymbol('[[');
*       $interpolateProvider.endSymbol(']]');
*  })*
*  Деректива интерполяции имеет эквивалентную форму ng-bind. Которую можно использовать как HTMl - атрибут.
*  <span ng-bind="expression"></span>
*  Она используеться для того что бы скрыть выражения до момента когда AngularJs получит возможность обработать
*  их на этапе начальной занрузки страницы. Это помогает избавиться от эффекта мерцания элементов пользовательского интерфейся
 *  страницы.
 *
 *  По умолчанию AngularJs экранирует все HTML теги. Для того что бы предотвратить иньекции HTML
 *  Если необходимо данное поведение отключит необходимо использовать дерективу ng-bind-html-unsafe разрешает любые теги
 *
 *  <p ng-bind-html-unsafe="expression">
 *   Существует деректива ng-bind-html - некоторые теги.(angular-santize.js)
 *   angular.module('expressionEscaping',['ngSantize'])
 *   .controller("ExpCtrl",function($scope){
 *          $scope.msg = 'Hello', <b>World</b>';
 *   });
 *   Отображение по условию:
 *   ng-show/ng-hide, ng-switch-*, ng-if, ng-include
 *
 *   ng-show/ng-hide - можно использовать для сокрытия применяя css правило display, элементов DOM. опираясь на результат выражения
 *   <div ng-show="showSecret">Secret</div>
 *  <div ng-hide="!showSecret"></div>
 *   Они просто скрывают элементы, но элементы при этом не удаляються.
 *
 *   Если необходимо физически скрыть элементы, или добавить их : ng-switch, ng-switch-when, ng-switch-default
 *   <div ng-switch on="showSecret">
 *    <div ng-switch-when="true">Secret<div>
 *    <div ng-switch-default> Wont show you my secrets!<div>
 *   </div>
 *   Деректива ng-switch своими действиями близко напоминает switch. и может включать несколько экземпляров ng-switch-when
 *   ng-switch - создает отдельный $scope
 *
 *   ng-if - добавляет и удаляет элементы.
 *   <div ng-if="expression">Secrets</div>
 *    * */