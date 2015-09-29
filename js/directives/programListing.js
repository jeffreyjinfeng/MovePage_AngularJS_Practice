app.directive('programListing', fucntion(){
	return {
  	restrict: 'E',
    scope: {
    	listing: '='
    },
    templateUrl: 'js/directives/programListing.html'
  };
});
