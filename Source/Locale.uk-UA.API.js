/*
---
name: Locale.uk-UA.API
description: API Translations in Ukrainian
requires: [Locale.API]
provides: Locale.uk-UA.API
...
*/

(function(){

var styles = {
	background: 'фон',
	color: 'колір',
	border: 'бордюр'
};

var events = {
	click: 'клік',
	mouseover: 'мишанад',
	mouseout: 'мишапоза',
	domready: 'готовий'
};

var translation = {
	Element: { // Element
		getElement: 'отриматиЕлемент',
		getElements: 'отриматиЕлементи',
		getElementById: 'отриматиЕлементиЗІд',
		set: {
			method: 'встановити',
			arguments: [{text: 'текст'}]
		},
		get: {
			method: 'отримати',
			arguments: [{text: 'текст'}]
		},
		erase: 'видалити',
		match: 'відповідає',
		contains: 'включає',
		inject: 'включитиВ',
		grab: 'включити',
		adopt: 'додати',
		wraps: 'огорнути',
		appendText: 'додатиТекст',
		dispose: 'виключити',
		clone: 'клонувати',
		replaces: 'замінити',
		hasClass: 'маєКлас',
		addClass: 'додатиКлас',
		removeClass: 'видалитиКлас',
		toggleClass: 'перемкнутиКлас',
		getPrevious: 'попередній',
		getAllPrevious: 'всіПопередні',
		getNext: 'наступний',
		getAllNext: 'всіНаступні',
		getFirst: 'перший',
		getLast: 'останній',
		getParent: 'батьківський',
		getParents: 'всіБатьківські',
		getSibling: 'сусіди',
		getChildren: 'дочірні',
		empty: 'очистити',
		destroy: 'знищити',
		toQueryString: 'вСтрічкуЗапиту',
		getSelected: 'вибрані',
		getProperty: 'повернутиВластивість',
		getProperties: 'повернутиВластивості',
		setProperty: 'встановитиВластивість',
		setProperties: 'встановитиВластивості',
		removeProperty: 'видалитиВластивість',
		removeProperties: 'видалитиВластивості',
		store: 'зберегти',
		retrieve: 'вийняти',
		eliminate: 'видалитиЗбережене',

		// Element.Style
		setStyle: {
			method: 'встановитиСтиль',
			arguments: [styles]
		},
		getStyle: {
			method: 'повернутиСтиль',
			arguments: [styles]
		},
		setStyles: 'встановитиСтилі',
		getStyles: 'повернутиСтилі'

	},

	Window: {},
	Document: {},

	Array: {
		each: 'кожен',
		invoke: 'викликати',
		every: 'всі',
		//filter: 'filter',
		clean: 'почистити',
		indexOf: 'індекс',
		map: 'мапа',
		some: 'деякі',
		associate: 'асоціювати',
		//link: 'link',
		contains: 'включає',
		append: 'додати',
		getLast: 'останній',
		getRandom: 'випадковий',
		include: 'включити',
		combine: 'дописати',
		erase: 'видалити',
		empty: 'очистити',
		flatten: 'вирівняти',
		pick: 'вийняти',
		hexToRgb: 'hexДоRgb',
		rgbToHex: 'rgbДоHex'
	}

};

['Element', 'Window', 'Document'].each(function(type){

	Object.append(translation[type], {
		addEvent: {
			method: 'додатиПодію',
			arguments: [events]
		},
		addEvents: 'додатиПодії',
		fireEvent: {
			method: 'згенеруватиПодію',
			arguments: [events]
		},
		removeEvent: {
			method: 'видалитиПодію',
			arguments: [events]
		},
		removeEvents: 'видалитиПодії',
		cloneEvents: 'клонуватиПодії'
	});

});


Locale.define('uk-UA', 'API', translation);

})();
вікно = window;
документ = document;
document.addEvent('domready', function(){
	Document.implement('тіло', document.body);
});
Елемент = Element;
консоль = console;
консоль.вивести = console.log;
