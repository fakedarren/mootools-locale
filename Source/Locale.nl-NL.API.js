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
	'background-attachment': 'achtergrond-hechting',
	'background-color': 'achtergrond-kleur',
	'background-image': 'achtergrond-afbeelding',
	'background-position': 'achtergrond-positie',
	'background-repeat': 'achtergrond-herhaling',
	color: 'kleur',

	margin: 'marge',
	'margin-top': 'marge-boven',
	'margin-right': 'marge-rechts',
	'margin-bottom': 'marge-onder',
	'margin-left': 'marge-links',

	padding: 'vulling',
	'padding-top': 'vulling-boven',
	'padding-right': 'vulling-rechts',
	'padding-bottom': 'vulling-onder',
	'padding-left': 'vulling-links',

	border: 'rand',
	'border-top': 'rand-boven',
	'border-top-color': 'rand-boven-kleur',
	'border-top-style': 'rand-boven-stijl',
	'border-top-width': 'rand-boven-dikte',
	'border-right': 'rand-rechts',
	'border-right-color': 'rand-rechts-kleur',
	'border-right-style': 'rand-rechts-stijl',
	'border-right-width': 'rand-rechts-dikte',
	'border-bottom': 'rand-onder',
	'border-bottom-color': 'rand-onder-kleur',
	'border-bottom-style': 'rand-onder-stijl',
	'border-bottom-width': 'rand-onder-dikte',
	'border-left': 'rand-links',
	'border-left-color': 'rand-links-kleur',
	'border-left-style': 'rand-links-stijl',
	'border-left-width': 'rand-links-dikte',
	'border-collapse': 'rand-samenvoegen',
	'border-spacing': 'rand-afstand',

	outline: 'omlijning',
	'outline-color': 'omlijning-kleur',
	'outline-style': 'omlijning-stijl',
	'outline-width': 'omlijning-dikte',

	width: 'breedte',
	'max-width': 'max-breedte',
	'min-width': 'min-breedte',

	height: 'hoogte',
	'max-height': 'max-hoogte',
	'min-height': 'min-hoogte',

	font: 'letter',
	'font-family': 'lettertype',
	'font-size': 'letter-grootte',
	'font-style': 'letter-stijl',
	'font-variant': 'letter-variant',
	'font-weight': 'letter-gewicht',

	'text-align': 'tekst-uitlijning',
	'text-decoration': 'tekst-decoratie',
	'text-indent': 'tekst-inspringen',
	'text-shadow': 'tekst-schaduw',
	'text-transform': 'tekst-transformatie',

	'line-height': 'regel-hoogte',
	'vertical-align': 'verticale-uitlijning',
	'white-space': 'wit-ruimte',
	'word-spacing': 'woord-afstand',
	'letter-spacing': 'letter-afstand',
	'direction': 'richting',

	content: 'inhoud',
	'counter-increment': 'teller-toenemen',
	'counter-reset': 'teller-herstellen',
	'quotes': 'aanhaalingstekens',

	'list-style': 'lijst-stijl',
	'list-style-image': 'lijst-stijl-afbeelding',
	'list-style-position': 'lijst-stijl-positie',
	'list-style-type': 'lijst-stijl-type',

	position: 'positie',
	top: 'boven',
	right: 'rechts',
	bottom: 'onder',
	left: 'links',

	'float': 'zweven',
	clear: 'vrijmaken',
	display: 'weergave',
	visibility: 'zichtbaarheid',
	overflow: 'overloop'
};

var events = {
	click: 'klik',
	dblclick: 'dubbelklik',
	mousedown: 'muisknopin',
	mouseup: 'muisknopuit',
	mousemove: 'muisbewegen',
	mouseover: 'muisover',
	mouseout: 'muisuit',
	mouseenter: 'muisbinnen',
	mouseleave: 'muisvertrek',

	keydown: 'knopin',
	keyup: 'knopuit',
	keypress: 'knopdrukken',

	domready: 'domklaar',
	load: 'laden',
	unload: 'afladen',
	abort: 'afbreken',
	error: 'fout',
	resize: 'herschalen',

	submit: 'indienen',
	select: 'selecteren',
	change: 'veranderen',
	reset: 'herstellen',
	blur: 'vervagen'
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
