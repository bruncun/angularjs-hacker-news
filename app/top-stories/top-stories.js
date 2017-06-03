"use strict";

angular
  .module("hackerNews.topStories", ["ngRoute"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "top-stories/top-stories.html",
        controller: "TopStoriesCtrl as vm"
      });
    }
  ])
  .controller("TopStoriesCtrl", [
    "TopStoriesService",
    function(TopStoriesService) {
      var vm = this;
      vm.stories = [];

      activate();

      function activate() {
        TopStoriesService.getStories().then(function(res) {
          vm.stories = res.data;
        });
      }
    }
  ]);
