'use strict';

let angular = require('angular');

// Define app
let directiveModule = angular.module('libraryApp.directiveModule', []);

directiveModule.directive('myLoad', ['$parse', require('./load')]);
directiveModule.directive('myTab', [require('./tab')]);
directiveModule.directive('myMenuButton', [require('./menuButton')]);

directiveModule.directive('textWithLabel', [require('./input/textWithLabel')]);
directiveModule.directive('textAreaWithLabel', [require('./input/textAreaWithLabel')]);
directiveModule.directive('dateSelector', [require('./input/dateSelector')]);
directiveModule.directive('imgUploadPreview', [require('./input/imgUploadPreview')]);
directiveModule.directive('clearingAutoComplete', [require('./input/clearingAutoComplete')]);

directiveModule.directive('myDialogHeader', [require('./dialog/dialogHeader')]);
directiveModule.directive('myDialogFooter', [require('./dialog/dialogFooter')]);

directiveModule.directive('catTile', [require('./cats/catTile')]);
directiveModule.directive('catInfo', [require('./cats/catInfo')]);

directiveModule.directive('ownerTile', [require('./owners/ownerTile')]);
directiveModule.directive('ownerInfo', [require('./owners/ownerInfo')]);
