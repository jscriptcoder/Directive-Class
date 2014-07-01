/// <reference path="./requirejs/require.d.ts" />
/// <reference path="./angularjs/angular.d.ts" />
    
interface IMyService {
    title: string;
    desc: string;
}

interface IMyService1 extends IMyService {}

interface IMyService2 extends IMyService {}

interface IMyService3 extends IMyService {}

interface IMyDirectiveScope extends ng.IScope {
    desc1: string;
    desc2: string;
}

interface IMySubDirectiveScope extends ng.IScope {
    title1: string;
    title2: string;
    title3: string;
}