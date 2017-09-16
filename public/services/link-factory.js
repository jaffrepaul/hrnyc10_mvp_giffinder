angular.module('App')
.factory('Gifs', function($http) {
  return {
    getGifs: function() {
      return $http({
        method: "GET",
        url: "/api/gifs"
      })
      .then(function(resp) {
        return resp.data
      })
    },

    addGif: function(userInput) {
      return $http({
        method: "POST",
        url: "/api/gif",
        data: {
          query: userInput,
          // image: url
        }
      })
    }
  }
})
