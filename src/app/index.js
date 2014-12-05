'use strict';

/* global app:true */
/* exported app */

var app = angular
.module('angNews', [
	'ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router',
	'firebase'
])
.constant('FIREBASE_URL', 'https://sizzling-torch-4036.firebaseio.com/')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainCtrl'
      // })
      .state('home', {
      	url: '/',
      	templateUrl: 'components/posts/posts.html',
      	controller: 'PostsCtrl',
      	data: {
      		pageTitle: 'Home'
      	}
      })
      .state('posts', {
      	url: '/posts/:postId',
      	templateUrl: 'components/posts/showpost.html',
      	controller: 'PostViewCtrl',
      	data: {
      		pageTitle: ''
      	}
      });

    $urlRouterProvider.otherwise('/');
  })
;
