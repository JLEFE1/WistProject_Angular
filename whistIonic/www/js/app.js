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

  .state('home', {
    abstract: true,
    url: "/home",
    templateUrl: "templates/home.html"
  })

  .state('home.homepage', {
    url: "/homepage",
    views: {
      'tab-homepage': {
        templateUrl: "templates/homepage.html"
      }
    }
  })

  .state('home.players', {
    url: "/players",
    views: {
      'tab-players': {
        templateUrl: "templates/players.html"
      }
    }
  })

  .state('home.games', {
    url: "/games",
    views: {
      'tab-games': {
        templateUrl: "templates/games.html"
      }
    }
  })


      .state('players', {
        url: "/players",
        abstract: true,
        templateUrl: "templates/menu-players.html"
      })


      .state('games', {
        url: "/games",
        abstract: true,
        templateUrl: "templates/menu-games.html"
      })


  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  .state('games.games', {
    url: "/games",
    views: {
      'menuContent': {
        templateUrl: "templates/games.html",
        controller: 'GamesController'
      }
    }
  })
  .state('games.game', {
    url: "/games/game/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/game.html",
        controller: 'GameController'
      }
    }
  })
  .state('players.players', {
    url: "/players",
    views: {
      'menuContent': {
        templateUrl: "templates/players.html",
        controller: 'PlayersController'
      }
    }
  })
  .state('players.player', {
    url: "/players/player/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/player.html",
        controller: 'PlayerController'
      }
    }
  })
  .state('games.rules', {
    url: "/rules",
    views: {
      'menuContent': {
        templateUrl: "templates/rules.html",
        controller: 'RulesController'
      }
    }
  })
  .state('games.whist', {
    url: "/whist",
    views: {
      'menuContent': {
        templateUrl: "templates/whist.html",
        controller: 'WhistController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/homepage');
});
