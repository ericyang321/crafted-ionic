// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var rootUrl = 'http://how-to-train-your-palate-api.herokuapp.com'
// var rootUrl = 'http://localhost:3000'

const craftEd = angular.module('craftEd', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.blah = "hello"
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app',{
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
      templateUrl: 'templates/register.html',
      }
    },
    controller: 'UserController'
  })


  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        }
      },
    controller: 'UserController'
  })

  .state('app.flavors', {
    url: '/flavors',
    views: {
      'menuContent': {
        templateUrl: 'templates/flavors.html',
      }
    },
    controller: 'FlavorController'
  })

  .state('app.new_recs', {
    url: '/new_recs',
    views: {
      'menuContent': {
        templateUrl: 'templates/new_recs.html',
      }
    },
    controller: 'NewRecController'
  })

  .state('app.old_likes', {
    url: '/old_likes',
    views: {
      'menuContent': {
        templateUrl: 'templates/old_likes.html',
      }
    },
    controller: 'OldLikeController'
  })

  .state('app.rating', {
    url: '/rating/:beerId',
    views: {
      'menuContent': {
        templateUrl: 'templates/rating.html',
      }
    },
    controller: 'RatingController'
  })

  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html'
      }
    },
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    },
  });
  // if none of the above states are matched, use this as the fall back
  $urlRouterProvider.otherwise('/app/home');

});

