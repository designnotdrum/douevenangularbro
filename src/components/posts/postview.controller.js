'use strict';

app.controller('PostViewCtrl', function ($scope, $stateParams, Post, Auth) {
	$scope.post = Post.get($stateParams.postId);
	$scope.comments = Post.comments($stateParams.postId);

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;

	$scope.addComment = function () {
		if(!$scope.commentText || $scope.commentText === '') {
			return;
		}

		var comment = {
			text: $scope.commentText,
			creator: $scope.user.profile.username,
			creatorUID: $scope.user.uid,
			gravatar: $scope.user.profile.md5_hash
		};

		$scope.comments.$add(comment);

		$scope.commentText = '';
	};

	$scope.deleteComment = function(comment) {
		$scope.comments.$remove(comment);
	};
});