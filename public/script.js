var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html'})
	.when('/page1', {templateUrl: 'partials/page1.html'})
	.when('/page2', {templateUrl: 'partials/page2.html'})
	.when('/page3', {templateUrl: 'partials/page3.html'})
	.when('/page4', {templateUrl: 'partials/page4.html'})
	.when('/page5', {templateUrl: 'partials/page5.html'})
	.when('/page6', {templateUrl: 'partials/page6.html'})
	.when('/page7', {templateUrl: 'partials/page7.html'})
	.otherwise({redirectTo: '/'});
});