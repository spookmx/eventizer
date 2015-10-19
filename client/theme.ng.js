'use strict'

angular.module('eventizerApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-orange')
  .accentPalette('light-blue');
});