/// <reference path="../../../typings/myApp.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './myDirective'], function(require, exports, MyDirective) {
    /**
    * @class MySubDirective
    * @extends MyDirective
    */
    var MySubDirective = (function (_super) {
        __extends(MySubDirective, _super);
        /**
        * @param {IMyService1} service1
        * @param {IMyService2} service2
        * @param {IMyService3} service3
        * @constructor
        */
        function MySubDirective(service1, service2, service3) {
            var _this = this;
            _super.call(this, service1, service2);
            //====== Directive definition ======//
            /**
            * @type String
            * @public
            */
            this.template = [
                '<div>',
                '<h3>{{name}}</h3>',
                '<ul>',
                '<li>{{title1}}</li>',
                '<li>{{title2}}</li>',
                '<li>{{title3}}</li>',
                '</ul>',
                '</div>'
            ].join('');
            /**
            * @param {IMySubDirectiveScope} scope
            * @param {ng.IAugmentedJQuery} element
            * @param {ng.IAttributes} attrs
            * @public
            */
            this.link = function (scope, element, attrs) {
                scope.title1 = _this._serv1.title;
                scope.title2 = _this._serv2.title;
                scope.title3 = _this._serv3.title;
            };
            this._serv3 = service3;
        }
        MySubDirective.factory = [
            'myService1',
            'myService2',
            'myService3',
            function (service1, service2, service3) {
                return new MySubDirective(service1, service2, service3);
            }
        ];
        return MySubDirective;
    })(MyDirective);

    
    return MySubDirective;
});
