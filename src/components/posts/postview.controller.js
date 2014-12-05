'use strict';

app.controller('PostViewCtrl', function ($scope, $stateParams, Post) {
	$scope.post = Post.get($stateParams.postId);
});