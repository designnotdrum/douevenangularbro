'use strict';

angular.module('angNews')
  .controller('NavbarCtrl', function ($scope, $location, Post) {
    $scope.post = {url: 'http://', title: '', tags: ''};

    $scope.submitPost = function () {
    	Post.create($scope.post).then(function (ref) {
    		$location.path('/posts/' + ref.name());
    		$scope.post = {url: 'http://', title: '', tags: ''}
    	});
    };
  });
