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
	'border-color': 'border-colour'
};

Locale.define('en-GB', 'API', {
	Element: {
		// Element.Style
		setStyle: {arguments: [styles]},
		getStyle: {arguments: [styles]}
	}
});

})();
