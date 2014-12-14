'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth, Profile) {
	$scope.posts = Post.all;
	$scope.user = Auth.user;
	$scope.post = {url: 'http://', title: '', tags: ''};

	// $scope.submitPost = function () {
	// 	Post.create($scope.post).then(function (ref){
	// 		$scope.post = {url: 'http://', title: '', tags: ''};
	// 		$location.path('/posts/' + ref.name());
	// 	});
	// };

	$scope.deletePost = function (post) {
		Post.delete(post);
	};
});