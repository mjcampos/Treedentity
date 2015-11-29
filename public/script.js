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
	.when('/page8', {templateUrl: 'partials/page8.html'})
	.when('/page9', {templateUrl: 'partials/page9.html'})
	.when('/page10', {templateUrl: 'partials/page10.html'})
	.when('/page11', {templateUrl: 'partials/page11.html'})
	.when('/page12', {templateUrl: 'partials/page12.html'})
	.when('/page13', {templateUrl: 'partials/page13.html'})
	.when('/page14', {templateUrl: 'partials/page14.html'})
	.when('/page15', {templateUrl: 'partials/page15.html'})
	.when('/page16', {templateUrl: 'partials/page16.html'})
	.when('/page17', {templateUrl: 'partials/page17.html'})
	.when('/page18', {templateUrl: 'partials/page18.html'})
	.when('/page19', {templateUrl: 'partials/page19.html'})
	.when('/page20', {templateUrl: 'partials/page20.html'})
	.when('/page21', {templateUrl: 'partials/page21.html'})
	.when('/page22', {templateUrl: 'partials/page22.html'})
	.when('/page23', {templateUrl: 'partials/page23.html'})
	.when('/page24', {templateUrl: 'partials/page24.html'})
	.otherwise({redirectTo: '/'});
});