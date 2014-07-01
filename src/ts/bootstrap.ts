/// <reference path="./typings/myApp.d.ts" />

require.config({
    baseUrl: '/build/js',
    paths: { angular: '/bower_components/angular/angular' },
    shim: { angular: { exports: 'angular' } }
});

require([ './myApp' ], (MyApp) => { MyApp.init(document) });