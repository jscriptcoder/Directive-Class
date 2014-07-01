/// <reference path="../../../typings/myApp.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../directiveBase'], function(require, exports, DirectiveBase) {
    /**
    * @class MyDirective
    * @extends DirectiveBase
    */
    var MyDirective = (function (_super) {
        __extends(MyDirective, _super);
        /**
        * @param {IMyService1} service1
        * @param {IMyService2} service2
        * @constructor
        */
        function MyDirective(service1, service2) {
            var _this = this;
            _super.call(this, {
                _serv1: service1,
                _serv2: service2
            });
            //====== Directive definition ======//
            /**
            * Isolated scope
            * @type Object
            * @public
            */
            this.scope = { name: '@' };
            /**
            * @type String
            * @default 'E'
            * @public
            */
            this.restrict = 'E';
            /**
            * @type Boolean
            * @default true
            * @public
            */
            this.replace = true;
            /**
            * @type String
            * @public
            */
            this.template = [
                '<div>',
                '<h3>{{name}}</h3>',
                '<ol>',
                '<li>Service: {{desc1}}</li>',
                '<li>Service: {{desc2}}</li>',
                '</ol>',
                '</div>'
            ].join('');
            /**
            * @param {IMyDirectiveScope} scope
            * @param {ng.IAugmentedJQuery} element
            * @param {ng.IAttributes} attrs
            * @public
            */
            this.link = function (scope, element, attrs) {
                scope.desc1 = _this._serv1.desc;
                scope.desc2 = _this._serv2.desc;
            };
        }
        MyDirective.factory = [
            'myService1',
            'myService2',
            function (service1, service2) {
                return new MyDirective(service1, service2);
            }
        ];
        return MyDirective;
    })(DirectiveBase);

    
    return MyDirective;
});
