/// <amd-dependency path="angular" />
define(["require", "exports", './example/myDirective', './example/mySubDirective', "angular"], function(require, exports, MyDirective, MySubDirective) {
    var Directives = angular.module('directives', []);

    Directives.directive('myDirective', MyDirective.factory);
    Directives.directive('mySubDirective', MySubDirective.factory);
});
