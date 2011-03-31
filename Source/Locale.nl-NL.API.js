/*
---
name: Locale.nl-NL.API
description: API Translations in Dutch
requires: [Locale.API]
provides: Locale.nl-NL.API
...
*/

(function(){

var stijlen = {
	background: 'achtergrond',
	color: 'kleur',
	margin: 'marge',
	padding: 'vulling',
	border: 'rand',
	width: 'breedte',
	height: 'hoogte'
};

var events = {
	click: 'klik',
	mouseover: 'muisover',
	mouseout: 'muisuit',
	mouseenter: 'muisbinnen',
	mouseleave: 'muisvertrek',
	domready: 'domklaar'
};

var newElement = function(tag, props){
	return new Element(tag, props);
};

var newClass = function(object){
	return new Class(object);
};

var translation = {

	initialize: function(){
		window.venster = window;
		window.nieuwElement = newElement
		window.nieuweKlasse = newClass;
	},

	Element: { // Element
		getElement: 'pakElement',
		getElements: 'pakElementen',
		getElementById: 'pakElementMetId',
		set: {
			method: 'zet',
			arguments: [{text: 'tekst'}]
		},
		get: {
			method: 'pak',
			arguments: [{text: 'tekst'}]
		},
		erase: 'wis',
		match: 'evenaar',
		contains: 'bevat',
		inject: 'injecteer',
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
		empty: 'leeg',
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
			method: 'zetStijl',
			arguments: [stijlen]
		},
		getStyle: {
			method: 'pakStijl',
			arguments: [stijlen]
		},
		setStyles: 'zetStijlen',
		getStyles: 'pakStijlen',

		// Element.Dimensions
		scrollTo: 'scrollNaar',
		getSize: 'pakGrootte',
		getScrollSize: 'pakScrollGrootte',
		getScroll: 'pakScroll',
		getPosition: 'pakPositie',
		setPosition: 'zetPositie',
		getCoordinates: 'pakCoördinaten',
		setCoordinates: 'zetCoördinaten',
		getOffsetParent: 'pakOffsetOuder'

	},

	Window: {},
	Document: {},

	Array: {

		'static': {
			each: 'elke',
			clone: 'kloon',
			from: 'van'
		},

		each: 'elke',
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
		empty: 'leeg',
		flatten: 'vlak',
		pick: 'pik',
		hexToRgb: 'hexNaarRgb',
		rgbToHex: 'rgbNaarHex'
	},

	String: {

		'static': {
			from: 'van',
			uniqueID: 'uniekeID'
		},

		//test: 'test',
		contains: 'bevat',
		//trim: 'trim',
		clean: 'opruimen',
		camelCase: 'kamelenLetters',
		hyphenate: 'koppelen',
		capitalize: 'hoofdLetters',
		escapeRegExp: 'ontsnapRegExp',
		hexToRgb: 'hexNaarRgb',
		rgbToHex: 'rgbNaarHex',
		substiture: 'substitueer',
		stripScripts: 'ontkleedScripts'
	},

	Function: {

		'static': {
			from: 'van',
			attempt: 'probeer'
		},

		extend: 'uitbreiden',
		implement: 'implementeer',
		attempt: 'probeer',
		pass: 'doorgeven',
		//bind: 'bind',
		delay: 'uitstellen',
		periodical: 'periodiek'
	},

	Number: {

		'static': {
			from: 'van',
			random: 'willekeurig'
		},

		limit: 'beperk',
		round: 'rondAf',
		times: 'keer',
		toFloat: 'naarDrijvendeKomma',
		toInt: 'naarInteger'
	},

	window: {
		'static': {
			Number: 'Nummer',
			Array: 'Reeks',
			Function: 'Functie',
			String: 'Snaar',
			Window: 'Venster'
		}
	}

};

['Element', 'Window', 'Document'].each(function(type){

	Object.append(translation[type], {
		addEvent: {
			method: 'gebeurtenisToevoegen',
			arguments: [events]
		},
		addEvents: 'gebeurtenissenToevoegen',
		fireEvent: {
			method: 'vuurGebeurtenis',
			arguments: [events]
		},
		removeEvent: {
			method: 'verwijderGebeurtenis',
			arguments: [events]
		},
		removeEvents: 'verwijderGebeurtenissen',
		cloneEvents: 'kloonGebeurtenissen'
	});

});


Locale.define('nl-NL', 'API', translation);

})();
