/// <reference path="../../typings/myApp.d.ts" />

/// <amd-dependency path="angular" />

/**
 * @class DirectiveBase
 * @implements ng.IDirective
 * @abstract
 */
class DirectiveBase implements ng.IDirective {
   
    /**
     * @type any[]
     * @static
     * @public
     */
    public static factory: any[]
    
    /**
     * @param {object} deps
     * @constructor
     */
    constructor(deps = {}) {
        angular.extend(this, deps);
    }
    
	/**
	 * @param {ng.IAugmentedJQuery} tElement
	 * @param {ng.IAttributes} tAttributes
	 * @param {ng.ITranscludeFunction} transclude
	 * @public
	 */
	public compile(tElement: ng.IAugmentedJQuery, tAttributes: ng.IAttributes, transclude: ng.ITranscludeFunction) {
        return this.link;
    }
    
	/**
	 * @param {ng.IScope} scope
	 * @param {ng.IAugmentedJQuery} element
	 * @param {ng.IAttributes} attrs
	 * @public
	 */
	public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {};
    
}

export = DirectiveBase;