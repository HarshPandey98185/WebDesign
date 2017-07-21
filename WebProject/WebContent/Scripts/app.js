var app = angular.module("Trav", ['ngRoute','homeModule']);

app.config(function($routeProvider){
$routeProvider.when("/",{
	 templateUrl: "Views/home.html",
	 controller  : 'homeController',
     controllerAs: 'homeCtrl'
          
})

.when("/About",{
	templateUrl: "Views/about.html"
})
	.when("/Deals",{
	templateUrl: "Views/deals.html"
})
})