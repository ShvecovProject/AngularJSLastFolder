/**
 * Created by Shvecov_Evgeniy on 11.03.2016.
 */
angular.module("ViewDataInAngular",[])
    .constant("USERS",[{
        userName:"EvgeniySh",
        userEmail:"evgeshvecov@yandex.ru",
        desc:"First User"
    },{
        userName:"Yakov Shvecov",
        userEmail:"yShvecov@gmail.com",
        desc:"Last User"
    },
        {
            userName:"Yakov Shvecov2",
            userEmail:"yShvecov@gmail.com",
            desc:"Last 2User"
        }])
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
 *   Включение блоков содержимого:
 *   Деректива ng-include: способна загружать и отображать фрагменты содержимого, опираясь на результат вычесления выражения.
 *   С ее помошью можно включить различные формы в зависимости от роли, присвоенной пользователю.
 *   Следующий фрагмент загружает разные фрагменты для обычных пользователей и фдминистраторов.
 *   <div ng-include="user.admin && 'edit.admin.html'||'eit.user.html'">
 *   </div>
 *   Отображение кол-ций с помошью ngRepeat
 *  Выполняет итерации по элементам коллекции и для каждого элемента создает новый html элемент.Она постоянно следит за источником данных,
 *  и повторно отображает шаблон обнаружив какие либо изменения.
 *  Встроенная реализация ng-repeat- может перемещать узлы по ждереву DOM c места на место, удалять их, вставлять новые узлы.
 *  Действует подобно механизму наблюдения за данными, который пытаеться соевременно отобразить исходную коллекцию с данными в
 *  коллекцию html узлов. Процесс наблюдения за данными протекает непрерывно.
 *
 *
 *    * */

.controller('repeaterCtrl',function($scope,USERS){
        $scope.users=USERS;

    })
/*
 Специальные переменные:
 Данные переменные могут использоваться для определения позиции элемента в коллекции
 1) $index - индекс элемента в коллекции(нумерация с 0)
 2) $first, $middle, $last - логическое значение, соответствующие позиции элемента.
 пример:
 <li ng-repeat="breadcrumb in breadcrumbs.getAll()">
    <span class="divider"></span>
    <ng-switch on="$last">
        <span ng-switch-when="true">{{breadcrumb.name}}</span>
        <span ng-switch-default>
            <a href="{{breadcrumb.path}}">{{breadcrumb.name}}</a>
        </span>
    </ng-switch>
 </li>

 итерации по свойствам обьекта
 <li ng-repeat="(name, value) in user">
    Property {{$index}} with {{name}} has value {{value}}
 </li>


 */

.controller("DetailsUsrCtrl",function($scope,USERS){
        $scope.users=USERS;
        $scope.selectUser = function(user){
            $scope.selectedUser = user;
        };
        $scope.isSelected = function(user){
            return $scope.selectedUser === user;
        }
    })
.controller("MultiSelectCtrl",function($scope, USERS){
        $scope.toggleSelected = function(){
            $scope.selected  = !$scope.selected;
        };
        $scope.isSelected = function(){
            return $scope.selected;
        }

})
    .controller('ngRepeatCtrl',function($scope,USERS){
        $scope.users = USERS;
    })
/*
Если контроллер определяеться на уровне того же элемента DOM что и деректива ng-repeat, она будет действовать в рамках
нового контекста, создаваемого директивой повторения.
 */