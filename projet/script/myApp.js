var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
$routeProvider
  .when('/home', {
    templateUrl: 'home.html'
  })
  .when('/detail', {
     templateUrl: 'detail.html'
  })
  $routeProvider.otherwise( { redirectTo: 'home' });
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}]);
myApp.controller('DataController',['$scope','$http','$location',function($scope,$http,$location){
  
  $scope.selectedFilm = "";
  $http.get('script/films.json').success(function(data){
  $scope.films = data;
});
  $scope.details = function(film){
    $scope.selectedFilm = film;
      $location.path('/detail');
    };
}]);

