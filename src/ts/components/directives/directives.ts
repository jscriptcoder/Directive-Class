/// <amd-dependency path="angular" />

import MyDirective = require('./example/myDirective');
import MySubDirective = require('./example/mySubDirective');

var Directives = angular.module('directives', []);

Directives.directive('myDirective', MyDirective.factory);
Directives.directive('mySubDirective', MySubDirective.factory);