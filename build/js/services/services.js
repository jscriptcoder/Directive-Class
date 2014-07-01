/// <amd-dependency path="angular" />
define(["require", "exports", './myService1', './myService2', './myService3', "angular"], function(require, exports, MyService1, MyService2, MyService3) {
    var Services = angular.module('services', []);

    Services.value('myService1', MyService1);
    Services.value('myService2', MyService2);
    Services.value('myService3', MyService3);
});
