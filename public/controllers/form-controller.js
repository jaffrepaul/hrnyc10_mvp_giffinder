angular.module('App')
.controller('FormController', function($scope, $state, Gifs) {
  $scope.addGif = function() {
    Gifs.addGif($scope.userInput)
      .then(function(gif){
        $scope.currentGif = gif;
      })
  }
  $scope.currentGif = null;
})
