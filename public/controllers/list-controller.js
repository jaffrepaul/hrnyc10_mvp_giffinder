angular.module('App')
.controller('ListController', function($scope, Gifs) {
  Gifs.getGifs()
    .then(function(gifs){
      console.log(gifs); //view response data in console 
      $scope.gifs = gifs
    })
})
