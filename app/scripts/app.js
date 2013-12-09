/**
* Application
*/
var app = angular.module('app', []);

// configuration
app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider)
{
	// product overview
	$routeProvider
	.when('/products', {
		templateUrl: 'views/products.html',
		controller: 'ProductsController'
	})
	
	// default
	.otherwise({
		redirectTo: '/products'
	});
}]);

app.run(['$location', '$rootScope', function ($location, $rootScope)
{
	// menu
	$rootScope.location = $location;
	$rootScope.menuitems = [{
			text: 'Home',
			url: 'home'
		},{
			text: 'Products',
			url: 'products',
		},{
			text: 'News & Events',
			url: 'news-and-events'
		},{
			text: 'Contacts',
			url: 'contacts'
		}
	];
}]);
