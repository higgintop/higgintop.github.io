console.log("inside recentProjectCtrl");
var app = angular.module("recentProjects", ['ui.bootstrap']);

app.controller('RecentProjectCtrl', function ($scope) {
	$scope.slides = [
	{
		title: "Battleship", 
	  desc: "Multi-player game written in Javascript",
	  appUrl: "http://battleshipcohort8.firebaseapp.com/",
	  githubUrl:"",
	  screenshotUrl: "/img/battleshipScreenshot.png"
	 }, 
	{
		title: "Sharks In Space", 
	  desc: "Arcade style shooter game written using Phaser",
	  appUrl: "https://sharksinspace.firebaseapp.com/",
	  githubUrl:"",
	  screenshotUrl: "/img/sharksInSpaceScreenshot.png"
	}];
});
