/// <reference path="../../../typings/myApp.d.ts" />

import DirectiveBase = require('../directiveBase');

/**
 * @class MyDirective
 * @extends DirectiveBase
 */
class MyDirective extends DirectiveBase {
    
    /**
     * Factory method that'll instantiate the directive
     * Services:
     *   MyService1
     *   MyService2
     * 
     * @static
     * @public
     */
    public static factory = [
    	'myService1', 
    	'myService2', 
    	function (service1: IMyService1, service2: IMyService2) {
    		return new MyDirective(service1, service2);
		}
	];

	/**
	 * @type IMyService1
	 * @private
	 */
	_serv1: IMyService1;

	/**
	 * @type IMyService2
	 * @private
	 */
	_serv2: IMyService2;

	/**
	 * @param {IMyService1} service1
	 * @param {IMyService2} service2
	 * @constructor
	 */
	constructor(service1: IMyService1, service2: IMyService2) {
        super({
            _serv1: service1,
            _serv2: service2
        });
    }

	//====== Directive definition ======//

	/**
	 * Isolated scope
	 * @type Object
	 * @public
	 */
	public scope: any = { name: '@' };

	/**
	 * @type String
	 * @default 'E'
	 * @public
	 */
	public restrict: string ='E';

	/**
	 * @type Boolean
	 * @default true
	 * @public
	 */
	public replace: boolean = true;

	/**
	 * @type String
	 * @public
	 */
	public template: string = [
        
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
	public link = (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        scope.desc1 = this._serv1.desc;
        scope.desc2 = this._serv2.desc
    };
    
    //====== End directive definition ======//
    
}

export = MyDirective;