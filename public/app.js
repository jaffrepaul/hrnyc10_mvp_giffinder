angular.module('App', ['ui.router']) //main app, with 3rd party dependencies (also referenced in HTML)

.config(function($stateProvider, $urlRouterProvider) { //configure our app, '$' is something from Angular
  $stateProvider
    .state({  //state of the URL
      name: 'form',
      url: '/',
      templateUrl: '/templates/form-view.html',
      controller: 'FormController'
    })
    .state({  //state of the URL
      name: 'collection',
      url: '/collection',
      templateUrl: '/templates/list-view.html',
      controller: 'ListController'
    })
    .state({  //state of the URL
      name: '404',
      url: '/404',
      template: '<p>page not found</p>'
    })

    $urlRouterProvider.otherwise('404') //if all routing fails, go to 404
})
