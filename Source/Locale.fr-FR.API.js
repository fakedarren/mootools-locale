/*
---
name: Locale.fr-FR.API
description: API Translations in French
requires: [Locale.API]
provides: Locale.fr-FR.API
...
*/

(function(){

var style = {
	background: 'fond',
	color: 'couleur',
	border: 'bordure'
};

var évènements = {
	click: 'clique',
	mouseover: 'sourisdessus',
	mouseout: 'sourisdehors',
	mouseenter: 'sourisentre',
	mouseleave: 'sourissort',
	domready: 'domprêt'
};

var newElement = function(tag, props){
	return new Element(tag, props);
};

var newClass = function(object){
	return new Class(object);
};

var Traduction = {
	Element: { // Element
		getElement: 'trouveElement',
		getElements: 'trouveElements',
		getElementById: 'trouveElementParIdentifiant',
		set: 'fixe',
		get: 'trouve',
		erase: 'efface',
		match: 'égale',
		contains: 'contient',
		inject: 'injecte',
		grab: 'récupère',
		adopt: 'adopte',
		wraps: 'enveloppe',
		appendText: 'ajoutTexte',
		dispose: 'dispose',
		clone: 'clone',
		replaces: 'remplace',
		hasClass: 'aClasse',
		addClass: 'ajoutClasse',
		removeClass: 'enlèveClasse',
		toggleClass: 'basculeClasse',
		getPrevious: 'trouvePrécédent',
		getAllPrevious: 'trouveTousLesPrécédents',
		getNext: 'trouveSuivant',
		getAllNext: 'touveTousLesSuivants',
		getFirst: 'trouvePremier',
		getLast: 'trouveDernier',
		getParent: 'trouveParent',
		getParents: 'trouveParents',
		getSibling: 'trouveFrères',
		getChildren: 'trouveEnfants',
		empty: 'vider',
		destroy: 'détruire',
		toQueryString: 'enChaineDeRequête',
		getSelected: 'trouveLesSelectionnés',
		getProperty: 'trouveAttribut',
		getProperties: 'trouveAttributs',
		setProperty: 'fixeAttribut',
		setProperties: 'fixeAttributs',
		removeProperty: 'enlèveAttribut',
		removeProperties: 'enlèveAttributs',
		store: 'stock',
		retrieve: 'récupérer',
		eliminate: 'éliminer',

		// Element.Style
		setStyle: {
			method: 'fixeStyle',
			arguments: [style]
		},
		getStyle: {
			method: 'trouveStyle',
			arguments: [style]
		},
		setStyles: 'fixeStyles',
		getStyles: 'trouveStyles'

	},

	Window: {},
	Document: {},

	Array: {
		each: 'chaque',
		invoke: 'invoque',
		every: 'tous',
		filter: 'filtrer',
		clean: 'nettoyer',
		indexOf: 'indexDe',
		map: 'map',
		some: 'certains',
		associate: 'associés',
		link: 'lié',
		contains: 'contient',
		append: 'ajout',
		getLast: 'trouveDernier',
		getRandom: 'trouveAuHasard',
		include: 'inclut',
		combine: 'combine',
		erase: 'efface',
		empty: 'vide',
		flatten: 'aplatir',
		pick: 'prend',
		hexToRgb: 'hexEnRvb',
		rgbToHex: 'rvbEnHex'
	},

	initialize: function(){
		window.fenêtre = window;
		window.nouvelElement = newElement;
		window.nouvelleClasse = newClass;
	}
	
};

['Element', 'Window', 'Document'].each(function(typ){

	Object.append(Traduction[typ], {
		addEvent: {
			method: 'ajoutEvènement',
			arguments: [évènements]
		},
		addEvents: 'ajoutEvènements',
		fireEvent: {
			method: 'déclancheEvènement',
			arguments: [évènements]
		},
		removeEvent: {
			method: 'effaceEvènement',
			arguments: [évènements]
		},
		removeEvents: 'effaceEvènements',
		cloneEvents: 'cloneEvènements'
	});

});

Locale.define('fr-FR', 'API', Traduction);


})();
