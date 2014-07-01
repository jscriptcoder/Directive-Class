/// <reference path="../../typings/myApp.d.ts" />
define(["require", "exports", "angular"], function(require, exports) {
    /// <amd-dependency path="angular" />
    /**
    * @class DirectiveBase
    * @implements ng.IDirective
    * @abstract
    */
    var DirectiveBase = (function () {
        /**
        * @param {object} deps
        * @constructor
        */
        function DirectiveBase(deps) {
            if (typeof deps === "undefined") { deps = {}; }
            /**
            * @param {ng.IScope} scope
            * @param {ng.IAugmentedJQuery} element
            * @param {ng.IAttributes} attrs
            * @public
            */
            this.link = function (scope, element, attrs) {
            };
            angular.extend(this, deps);
        }
        /**
        * @param {ng.IAugmentedJQuery} tElement
        * @param {ng.IAttributes} tAttributes
        * @param {ng.ITranscludeFunction} transclude
        * @public
        */
        DirectiveBase.prototype.compile = function (tElement, tAttributes, transclude) {
            return this.link;
        };
        return DirectiveBase;
    })();

    
    return DirectiveBase;
});
