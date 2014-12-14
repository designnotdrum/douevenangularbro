'use strict';

app.controller('ProfileCtrl', function ($scope, $stateParams, Profile){
	var uid = $stateParams.userId;

	$scope.profile = Profile.get(uid);
	Profile.getPosts(uid).then(function(posts) {
		$scope.posts = posts;
	});
});