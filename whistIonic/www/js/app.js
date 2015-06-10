// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('gamesApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  .state('app.games', {
    url: "/games",
    views: {
      'menuContent': {
        templateUrl: "templates/games.html",
        controller: 'GamesController'
      }
    }
  })
  .state('app.game', {
    url: "/games/game/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/game.html",
        controller: 'GameController'
      }
    }
  })
  .state('app.players', {
    url: "/players",
    views: {
      'menuContent': {
        templateUrl: "templates/players.html",
        controller: 'PlayersController'
      }
    }
  })
  .state('app.player', {
    url: "/players/player/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/player.html",
        controller: 'PlayerController'
      }
    }
  })
  .state('app.rules', {
    url: "/rules",
    views: {
      'menuContent': {
        templateUrl: "templates/rules.html",
        controller: 'RulesController'
      }
    }
  })
  .state('app.whist', {
    url: "/whist",
    views: {
      'menuContent': {
        templateUrl: "templates/whist.html",
        controller: 'WhistController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/players');
});
