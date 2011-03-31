/*
---
name: Locale.uk-UA.API
description: API Translations in Ukrainian
requires: [Locale.API]
provides: Locale.uk-UA.API
...
*/

(function(){

var stijlen = {
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
		erase: 'wis',
		match: 'evenaar',
		contains: 'bevat',
		inject: 'включитиВ',
		grab: 'grijp',
		adopt: 'adopteer',
		wraps: 'wikkel',
		appendText: 'tekstToevoegen',
		dispose: 'verwijder',
		clone: 'kloon',
		replaces: 'vervang',
		hasClass: 'heeftKlasse',
		addClass: 'klasseToevoegen',
		removeClass: 'klasseVerwijderen',
		toggleClass: 'klasseSchakelen',
		getPrevious: 'pakVorige',
		getAllPrevious: 'pakAlleVorige',
		getNext: 'pakVolgende',
		getAllNext: 'pakAlleVolgende',
		getFirst: 'pakEerste',
		getLast: 'pakLaatste',
		getParent: 'pakOuder',
		getParents: 'pakOuders',
		getSibling: 'pakBroer',
		getChildren: 'pakKinderen',
		empty: 'очистити',
		destroy: 'vernietig',
		toQueryString: 'naarAanvraagSnaar',
		getSelected: 'pakGeselecteerde',
		getProperty: 'pakEigenschap',
		getProperties: 'pakEigenschappen',
		setProperty: 'zetEigenschap',
		setProperties: 'zetEigenschappen',
		removeProperty: 'verwijderEigenschap',
		removeProperties: 'verwijderEigenschappen',
		store: 'bewaar',
		retrieve: 'ontvang',
		eliminate: 'elimineer',

		// Element.Style
		setStyle: {
			method: 'встановитиСтиль',
			arguments: [stijlen]
		},
		getStyle: {
			method: 'повернутиСтиль',
			arguments: [stijlen]
		},
		setStyles: 'встановитиСтилі',
		getStyles: 'повернутиСтилі'

	},

	Window: {},
	Document: {},

	Array: {
		each: 'кожен',
		invoke: 'roepAan',
		every: 'iedere',
		//filter: 'filter',
		clean: 'opruimen',
		indexOf: 'indexVan',
		map: 'arrangeren',
		some: 'sommige',
		associate: 'verbinden',
		//link: 'link',
		contains: 'bevat',
		append: 'bijvoegen',
		getLast: 'pakLaatste',
		getRandom: 'pakWillekeurige',
		include: 'invoegen',
		combine: 'combineer',
		erase: 'wis',
		empty: 'очистити',
		flatten: 'vlak',
		pick: 'pik',
		hexToRgb: 'hexNaarRgb',
		rgbToHex: 'rgbNaarHex'
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
/*
Locale.use('uk-UA');

вікно.додатиПодію('готовий', function(){
    var елемент = new Element('div');
    елемент.включитиВ(документ.тіло);

    елемент
        .встановитиСтиль('колір', '#00f')
        .встановити('текст', 'Привіт з України');

    [1, 2, 3].кожен(function(цифра, індекс){
        new Element('p').встановити('текст', цифра + ' ' + індекс).включитиВ(документ.тіло);
    });

    var bla = $('bla').очистити();

});
*/
