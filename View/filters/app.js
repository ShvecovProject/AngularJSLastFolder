/**
 * Created by Evgeniy on 3/15/2016.
 */
angular.module("FiltersApp",[])
    .constant("PROJECTS",[{
        id:1,
        name:"Project1",
        description:"project1 desc",
        priority:1,
        estimation:20,
        isDone:false
    },{
        id:2,
        name:"Last Project",
        description:"Last desc",
        priority:7,
        estimation:50,
        isDone:true
    },{
        id:3,
        name:"MetraNet",
        description:"MetraNet desc",
        priority:10,
        estimation:200,
        isDone:true
    },{
        id:4,
        name:"Dell Appashure",
        description:"Dell Appashure desc",
        priority:1,
        estimation:150,
        isDone:true
    }])
    .filter('pagination',function(){
        return function(inputArray, selectedPage, pageSize){
            var start = selectedPage*pageSize;
            return inputArray.slice(start, start+pageSize);
        }
    })
    .filter("trim", function($filter){
        var limitToFilter = $filter('limitTo');
        return function(input, limit){
            console.log('invoke');
            if(input.length>limit){
                return limitToFilter(input, limit-3)+"...";
            }
            return input;
        }
    })
.controller("FilterOneCtrl",function($scope,PROJECTS){
        $scope.projects = PROJECTS;
        $scope.doneAndBigEffort = function(projectItem){
            return projectItem.isDone && projectItem.estimation >= 150;
        };
    })
.controller("GetCountRecordsCtrl",function($scope, PROJECTS){
        $scope.projects = PROJECTS;
 })
.controller("OrderByCtrl",function($scope, PROJECTS){
        $scope.projects = PROJECTS,
            $scope.sortField = null,
            $scope.reverse = null;
        $scope.sort = function(fieldName){
            if($scope.sortField === fieldName){
                $scope.reverse = !$scope.reverse;
            }else{
                $scope.sortField = fieldName;
                $scope.reverse = false;
            }
        };
        $scope.isSortUp = function(columnName){
            return $scope.sortField === columnName && !$scope.reverse;
        };

        $scope.isSortDown = function(columnName){
            return $scope.sortField === columnName && $scope.reverse;
        };
    })
.controller("SplitArrayDataCtrl",function($scope, PROJECTS){
        $scope.projects = PROJECTS,
        $scope.pageNo =0,
        $scope.pageSize = 4;
    })

.controller("testNgModelCtrl",function($scope){

    })
.controller("angularFormsCtrl",function($scope,PROJECTS) {
        $scope.projects = PROJECTS;
        $scope.user={
            selectedItem:1
            };
        $scope.countriesByCode = {
            'AF' : 'AFGHANISTAN',
            'AX' : 'ÅLAND ISLANDS',
            'AL' : 'ALBANIA',
            'DZ' : 'ALGERIA',
            'AS' : 'AMERICAN SAMOA',
            'AD' : 'ANDORRA',
            'AO' : 'ANGOLA',
            'AI' : 'ANGUILLA',
            'AQ' : 'ANTARCTICA',
            'AG' : 'ANTIGUA AND BARBUDA',
            'AR' : 'ARGENTINA',
            'AM' : 'ARMENIA',
            'AW' : 'ARUBA',
            'AU' : 'AUSTRALIA',
            'AT' : 'AUSTRIA',
            'AZ' : 'AZERBAIJAN',
            'BS' : 'BAHAMAS',
            'BH' : 'BAHRAIN',
            'BD' : 'BANGLADESH',
            'BB' : 'BARBADOS',
            'BY' : 'BELARUS',
            'BE' : 'BELGIUM',
            'BZ' : 'BELIZE',
            'BJ' : 'BENIN',
            'BM' : 'BERMUDA'
        };

        $scope.countriesByName = {
            'AFGHANISTAN' : 'AF',
            'ÅLAND ISLANDS' : 'AX',
            'ALBANIA' : 'AL',
            'ALGERIA' : 'DZ',
            'AMERICAN SAMOA' : 'AS',
            'ANDORRA' : 'AD',
            'ANGOLA' : 'AO',
            'ANGUILLA' : 'AI',
            'ANTARCTICA' : 'AQ',
            'ANTIGUA AND BARBUDA' : 'AG',
            'ARGENTINA' : 'AR',
            'ARMENIA' : 'AM',
            'ARUBA' : 'AW',
            'AUSTRALIA' : 'AU',
            'AUSTRIA' : 'AT',
            'AZERBAIJAN' : 'AZ',
            'BAHAMAS' : 'BS',
            'BAHRAIN' : 'BH',
            'BANGLADESH' : 'BD',
            'BARBADOS' : 'BB',
            'BELARUS' : 'BY',
            'BELGIUM' : 'BE',
            'BELIZE' : 'BZ',
            'BENIN' : 'BJ',
            'BERMUDA' : 'BM'
        };
        $scope.arrayDataSource = ['one', 'two'];
    })


/*
*Являются не более чем глобальными именованными функциями, который вызываються в представлении с помошью
* символа конвеера. (|) и с параметрами отделенных от имени функции двоеточием.
* {{user.signedUp|date:'yyyy-MM-dd'}} где yyyy-MM-dd параметр
* Обьединение в цепочки
* {{myLongString |limitTo:80 | lowercase}}
* Базовые фильтры: 1) фильтры форматирования
* 2) фильтры преобразования
* Фильтры форматировыания:
* 1) currency - форматирует числа с двумя десятичными знаками после запятой и символом валюты.
* 2) date - форматирует дату в соответствии с указаным форматомм, модель может содержать дату в виде обьекта Date
* или строки(строка будет сначала преобразована в Date)
* 3) number  - форматирует исходное число оставляя число десятичных знаков, указаное в аргументе
* 4) lowercase и uppercase - для преобразования символов в верхний/ нижний регистр
* 5) json - вывод значений в формате json
*
* Фильтры преобразования массивов
* limitTo: - возвращает массив уменьшенный до указаного значения(размера).
* filter - многоцелевая и очень гибкая утилита, поддерживает множество параметров настройки отбора элементов коллекции
* orderBy - фильтр сортировки, может использоваться для упорядочения элементов в массиве, опираясь на заданный критерий
*
*
* Можно определять свои функции для фильтрации.
Доступ к фильтрам из кода JS

Система внедрения зависимостей может внедряь фильтры в любые обьекты. Выразить зависимость от фильтров можно:
1) с помошью службы $filter
2) снабдив имя фильтра окончанием Filter
Служба filter это функция поиска позволяющая получить экземпляр фильтра по его имени.


 */

/*
ng-bind - днонаправленная связь с моделью. Если измениться значение свойства модели измениться значение и в элементе.
 Но если измениться значение в элементе это не повлияет на модель

ng-model - вухнаправленная связь. Как только измениться значение в элементе, немедлено будет изменена модель. И на оборот.
 */

/*
Генераторы данных
Если источником данных являеться массив тогда выражениеМассив должно возвращать массив. Деректива выполнит обход массива и в
каждой итерации присвоит текущий элемент массива переменной элемент

Если источником данных являеться обьект тогда выражениеОбьект должно возвращать обьект. Деректива выполнит обход
всех свойств обьекта и а каждой итерации присвоит значение текущего свойства значение а имя свойства - переенной ключ.

Выражение связывания.
Определяет как получить отображаемую метку и значение для каждого пункта списка и как групировать их.
Это выражение может использовать все что доступно выражениям включая фильтры. В общем случае связывание имее вид:

значение as метка group by признак сортировки.

Каждая деректива ngModel создает экземпляр ngModelController.
Этот контроллер доступен всем дерективам в элементе input.

Контроллер ngModelController реализует управление связью между значениями храящимися в модели и значением отображаемым в
элементе ввода.
определяет допустимость видимого значения и определяет факт изменения содержимого элемента ввода.
Контроллер имеет конвеер который запускается каждый раз когда происходит обновление связанных данных.
Оно состоит из 2 массивов $formatters используемого для преобразования данных при передаче из модеои в представление
и $parsers - преобразование от представления в модель. Каждая деректива в элементе input может добовлять собственные форматтеры
и парсеры что бы участвовать в работе конвеера.

При передаче между моделью и представлением ngModelController помечает значение как неизменнённое. В элементах ввода оно
отмечаеться наличием стиля ng-pristine. Когда представленное значение изменяеться  значение помечаеться ng-dirty.


Дерективы в элементе ввода могут также сообщать контроллеру о допустимости или недопустимости значения.
Обычно это реализуеться добавлением инструмента проверки значения в конвеер. Контроллер проверяет допустимость
значения и применяет либо ng-valid или ng-invalid css классы.

 */