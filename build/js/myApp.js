/// <reference path="./typings/myApp.d.ts" />
define(["require", "exports", "angular", "./services/services", "./components/directives/directives"], function(require, exports) {
    /// <amd-dependency path="angular" />
    /// <amd-dependency path="./services/services" />
    /// <amd-dependency path="./components/directives/directives" />
    var appName = 'DirectiveClass';

    exports.module = angular.module(appName, [
        'services',
        'directives'
    ]);

    function init(el) {
        angular.element(el).ready(function () {
            angular.bootstrap(el, [appName]);
        });
    }
    exports.init = init;
});
