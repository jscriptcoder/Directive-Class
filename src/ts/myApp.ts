/// <reference path="./typings/myApp.d.ts" />

/// <amd-dependency path="angular" />
/// <amd-dependency path="./services/services" />
/// <amd-dependency path="./components/directives/directives" />

var appName = 'DirectiveClass';

export var module = angular.module(appName, [
    'services',
    'directives'
]);

export function init(el) {
    angular.element(el).ready(() => {
        angular.bootstrap(el, [appName]);
    });
}