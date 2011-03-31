/*
---
name: Locale.de-DE.API
description: API Translations in German
requires: [Locale.API]
provides: Locale.de-DE.API
...
*/

(function(){

var stile = {
	background: 'hintergrund',
	color: 'farbe',
	border: 'rand'
};

var ereignisse = {
	click: 'klick',
	mouseover: 'mausüber',
	mouseout: 'mausweg',
	mouseenter: 'mausinnerhalb',
	mouseleave: 'mausaußerhalb',
	domready: 'domverfügbar'
};

var newElement = function(tag, props){
	return new Element(tag, props);
};

var newClass = function(object){
	return new Class(object);
};

var uebersetzung = {
	Element: { // Element
		getElement: 'findeElement',
		getElements: 'findeElemente',
		getElementById: 'findeElementNachIdentifikator',
		set: 'setze',
		get: 'hole',
		erase: 'loesche',
		match: 'vergleiche',
		contains: 'beinhält',
		inject: 'einfügenIn',
		grab: 'fasse',
		adopt: 'adoptiere',
		wraps: 'einwickeln',
		appendText: 'fügeTextHinzu',
		dispose: 'entferne',
		clone: 'klone',
		replaces: 'ersetzt',
		hasClass: 'hatKlasse',
		addClass: 'fuegeKlasseHinzu',
		removeClass: 'entferneKlasse',
		toggleClass: 'schalteKlasseUm',
		getPrevious: 'findeVorige',
		getAllPrevious: 'findeAlleVorigen',
		getNext: 'findeNächste',
		getAllNext: 'findeAlleNächsten',
		getFirst: 'findeErstes',
		getLast: 'findeLetztes',
		getParent: 'findeVorgänger',
		getParents: 'findeEltern',
		getSibling: 'findeGeschwister',
		getChildren: 'findeKinder',
		empty: 'leeren',
		destroy: 'zerstören',
		toQueryString: 'zuAnfrageZeichenkette',
		getSelected: 'holeAusgewählte',
		getProperty: 'holeAttribut',
		getProperties: 'holeAttribute',
		setProperty: 'setzeAttribut',
		setProperties: 'setzeAttribute',
		removeProperty: 'entferneAttribut',
		removeProperties: 'entferneAttribute',
		store: 'lagere',
		retrieve: 'zurückholen',
		eliminate: 'eliminieren',

		// Element.Style
		setStyle: {
			method: 'setzeStil',
			arguments: [stile]
		},
		getStyle: {
			method: 'holeStil',
			arguments: [stile]
		},
		setStyles: 'setzeStile',
		getStyles: 'holeStile'

	},

	Window: {},
	Document: {},

	Array: {
		each: 'alle',
		invoke: 'ausführen',
		every: 'jedes',
		filter: 'filtere',
		clean: 'aufräumen',
		indexOf: 'indexVon',
		map: 'abbilden',
		some: 'manche',
		associate: 'verbinden',
		link: 'verlinke',
		contains: 'beinhält',
		append: 'hinzufügen',
		getLast: 'findeLetztes',
		getRandom: 'zufällig',
		include: 'inkludiere',
		combine: 'kombiniere',
		erase: 'zurücksetzen',
		empty: 'leeren',
		flatten: 'flachmachen',
		pick: 'wähle',
		hexToRgb: 'hexNachRgb',
		rgbToHex: 'rgbNachHex'
	},

	initialize: function(){
		window.fenster = window;
		window.neuesElement = newElement;
		window.neueKlasse = newClass;
	}
	
};

['Element', 'Window', 'Document'].each(function(typ){

	Object.append(uebersetzung[typ], {
		addEvent: {
			method: 'fügeEreignisHinzu',
			arguments: [ereignisse]
		},
		addEvents: 'fügeEreigniseHinzu',
		fireEvent: {
			method: 'feuereEreignis',
			arguments: [ereignisse]
		},
		removeEvent: {
			method: 'entferneEreignis',
			arguments: [ereignisse]
		},
		removeEvents: 'entferneEreignisse',
		cloneEvents: 'kloneEreignisse'
	});

});

Locale.define('de-DE', 'API', uebersetzung);

Locale.define('de-DE-GROß', 'API', (function(){
	var GROSS = Object.clone(uebersetzung);

	Object.each(GROSS, function(objekt, name){
		if (name == 'initialize') return;
		Object.each(objekt, function(methode, schluessel){
			if (typeOf(methode) == 'string') objekt[schluessel] = methode.toUpperCase();
			else if (methode && methode.method) methode.method = methode.method.toUpperCase();
		});
	});
	
	GROSS.initialize = function(){
		window.FENSTER = window;
		window.NEUESELEMENT = newElement;
		window.NEUEKLASSE = newClass;
	};

	return GROSS;
})());

})();
