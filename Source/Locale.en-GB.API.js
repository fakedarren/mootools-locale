/*
---
name: Locale.en-GB.API
description: API Translations in GB English
requires: [Locale.API]
provides: Locale.en-GB.API
...
*/

(function(){

var styles = {
	color: 'colour',
	'background-color': 'background-colour',
	'border-color': 'border-colour',
	'border-top-color': 'border-top-colour',
	'border-right-color': 'border-right-colour',
	'border-bottom-color': 'border-bottom-colour',
	'border-left-color': 'border-left-colour',
	'outline-color': 'outline-colour'
};

Locale.define('en-GB', 'API', {
	Element: {
		// Element.Style
		setStyle: {arguments: [styles]},
		getStyle: {arguments: [styles]}
	}
});

})();
