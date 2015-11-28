var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html'})
	.when('/page1', {templateUrl: 'partials/page1.html'})
	.when('/page2', {templateUrl: 'partials/page2.html'})
	.otherwise({redirectTo: '/'});
});