/* global app:true */
/* exported app */

'use strict';

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
      .state('create', {
      	url: '/create',
      	templateUrl: 'components/form/form.html',
      	controller: 'NavbarCtrl',
      	data: {
      		pageTitle: 'Create post'
      	}
      })
      .state('posts', {
      	url: '/posts/:postId',
      	templateUrl: 'components/posts/showpost.html',
      	controller: 'PostViewCtrl',
      	data: {
      		pageTitle: ''
      	}
      })
      .state('register', {
      	url: '/register',
      	templateUrl: 'components/login/register.html',
      	controller: 'AuthCtrl',
      	resolve: {
      		user: function (Auth) {
      			return Auth.resolveUser();
      		}
      	},
            data: {
                  pageTitle: 'Register'
            }
      })
      .state('signin', {
      	url: '/signin',
      	templateUrl: 'components/login/signin.html',
      	controller: 'AuthCtrl',
      	resolve: {
      		user: function (Auth) {
      			return Auth.resolveUser();
      		}
      	},
            data: {
                  pageTitle: 'Sign in'
            }
      })
      .state('users', {
            url: '/users/:userId', 
            templateUrl: 'components/users/profile.html',
            controller: 'ProfileCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
