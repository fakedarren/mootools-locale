/*
---
name: Locale.API
description: Provide a localized MooTools API so you can code in your native language
requires: [More/Locale]
provides: Locale.API
...
*/

(function(){

var translateArguments = function(type, method, translate){

	var origin = type.prototype[method], methods = {};
	if (origin.$origin) origin = origin.$origin;

	methods[method] = function(){
		var args = Array.map(arguments, function(value, i){
			return (translate.arguments[i] && Object.keyOf(translate.arguments[i], value)) || value;
		});
		return origin.apply(this, args);
	}.extend({$origin: origin});

	if (translate.method) methods[translate.method] = methods[method];
	type.implement(methods);

};

var translateStatic = function(type, translate){
	for (var old in translate) type[translate[old]] = type[old];
};

var alias = function(name, existing){
	this.prototype[name] = this.prototype[existing];
}.overloadSetter();

Locale.API = function(){

	var set = Locale.get('API');

	Object.each(set, function(methods, _type){

		if (_type == 'initialize' && typeOf(methods) == 'function'){
			methods();
			return;
		}

		var aliasses = {}, type = this[_type];

		Object.each(methods, function(translate, method){

			if (method == 'static') translateStatic(type, translate);
			else if (typeOf(translate) == 'object') translateArguments(type, method, translate);
			else aliasses[translate] = method;

		});

		(type.alias || alias).call(type, aliasses);

	});

};

Locale.addEvent('change', Locale.API.bind(Locale));

})();
