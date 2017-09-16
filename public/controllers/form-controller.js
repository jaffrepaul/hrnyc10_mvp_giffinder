angular.module('App')
.controller('FormController', function($scope, $state, Gifs) {
  $scope.addGif = function() {
    Gifs.addGif($scope.gif)
      .then(function(){
        // $state.go('home') //$state.go('somewhere') is how you force a user to another view
      })
  }
})
