# TypeScript Directive Class
Personal approach to create AngularJS directives using TypeScript classes

## Approach

> Class helper:

```typescript
class DirectiveBase implements ng.IDirective {
   
    public static factory: any[]

    constructor(deps = {}) {
    	// Attaches dependencies to "this"
        angular.extend(this, deps);
    }

	public compile(tElement: ng.IAugmentedJQuery, tAttributes: ng.IAttributes, transclude: ng.ITranscludeFunction) {
        return this.link;
    }

	// Notice arrow function assignment. It'll preserve the correct context when called
	public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {};
    
}
```

> Directive class:

```typescript
class MyDirective extends DirectiveBase {
    
    public static factory = [
    	'service1', 
    	'service2', 
    	function (service1: IService1, service2: IService2) {
    		return new MyDirective(service1, service2);
		}
	];

	_serv1: IService1;
	_serv2: IService2;

	constructor(service1: IService1, service2: IService2) {
        super({
            _serv1: service1,
            _serv2: service2
        });
    }

	//====== Directive definition ======//

	public scope: any = {};
	public restrict: string ='E';
	public replace: boolean = true;
	public template: string = '<div></div>';
	public link = (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        // Dependencies are attached to "this": this._serv1, this._serv2
    };
    
    //====== End directive definition ======//
    
}
```

> Directive registration:

```typescript
angular.module('MyApp').directive('myDirective', MyDirective.factory);
```