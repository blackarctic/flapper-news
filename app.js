var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function ($scope, posts) {
	$scope.test = 'Hello world!';

	$scope.posts = posts.posts;

	$scope.addPost = function(){
		//sanity check
		if(!$scope.title || $scope.title === '') { return; }
		//add them
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0});
		//reset them
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);