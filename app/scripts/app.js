(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })

    $stateProvider
      .state('archive', {
        url: '/',
        controller: 'ArchiveCtrl as archive',
        templateUrl: '/templates/archive.html'
      })
      
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase'])
    .config(config);
})();