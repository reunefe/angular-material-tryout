'use strict';

module.exports = function ($scope, $mdDialog, ownerApiService, eventService) {
	$scope.title = "Registreer eigenaar";
	$scope.foto = null;
	$scope.progress = 0;
	$scope.owner = {
		voornaam: '',
		familienaam: '',
		adres: {
			straat: '',
			nummer: '',
			gemeente: '',
			postcode: ''
		},
		email: '',
		telefoonnummer: '',
		noodnummer: ''
	};

	$scope.saveOwner = function () {
		ownerApiService.registerOwner($scope.owner, $scope.foto)
			.then(function (response) {
				$scope.progress = 100;
				eventService.dispatchEvent("owners.refresh");
				$mdDialog.hide();
			}, function (response) {
				$scope.progress = 0;
				// Do something
			}, function (evt) {
				$scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
	};
};