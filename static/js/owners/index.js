'use strict';

// Load modules
let angular = require('angular');

// Define module
let ownerModule = angular.module('libraryApp.ownerModule', []);

// Load module parts
require('./controller');

// Submodule routing
ownerModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/owners', {
			templateUrl: '../../partials/owners/overviewOwner.html',
			action: 'overviewOwnerCtrl'
		}).when('/owners/register', {
			templateUrl: '../../partials/owners/registerOwner.html',
			action: 'registerOwnerCtrl'
		});
	}]
);
