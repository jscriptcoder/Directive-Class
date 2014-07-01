/// <reference path="../../../typings/myApp.d.ts" />

import MyDirective = require('./myDirective');

/**
 * @class MySubDirective
 * @extends MyDirective
 */
class MySubDirective extends MyDirective {
    
    /**
     * Factory method that'll instantiate the directive
     * Services:
     *   MyService1
     *   MyService2
     *   MyService3
     * 
     * @static
     * @public
     */
    public static factory = [
    	'myService1', 
    	'myService2', 
    	'myService3', 
    	function (service1: IMyService1, service2: IMyService2, service3: IMyService3) {
    		return new MySubDirective(service1, service2, service3);
		}
	];

	/**
	 * @type IMyService3
	 * @private
	 */
	_serv3: IMyService3;

	/**
	 * @param {IMyService1} service1
	 * @param {IMyService2} service2
	 * @param {IMyService3} service3
	 * @constructor
	 */
	constructor(service1: IMyService1, service2: IMyService2, service3: IMyService3) {
        super(service1, service2);
    	this._serv3 = service3;
    }

	//====== Directive definition ======//

	/**
	 * @type String
	 * @public
	 */
	public template: string = [
    	
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
	public link = (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        scope.title1 = this._serv1.title;
        scope.title2 = this._serv2.title;
        scope.title3 = this._serv3.title;
    }
    
    //====== End directive definition ======//
    
}

export = MySubDirective;