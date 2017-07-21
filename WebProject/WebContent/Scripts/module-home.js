var homeModule = angular.module("homeModule",['ui.bootstrap']);


homeModule.controller('homeController',function($scope){
	
	$scope.message ="Hello";
	
         $scope.myInterval = 3000;
		  $scope.slides = [
		    {
		      image: 'images/chic.jpg'
		    },
		    {
		      image: 'images/freedom.jpg'
		    },
		 
		    {
		      image: 'images/la.jpg'
		    }
		  ];
	
	
	
	
	
	
	
	
})