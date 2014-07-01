/// <amd-dependency path="angular" />

import MyService1 = require('./myService1');
import MyService2 = require('./myService2');
import MyService3 = require('./myService3');

var Services = angular.module('services', []);

Services.value('myService1', MyService1);
Services.value('myService2', MyService2);
Services.value('myService3', MyService3);