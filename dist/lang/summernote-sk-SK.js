/*!
 * 
 * Super simple WYSIWYG editor v0.8.18
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and other contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-04-09T07:14Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 113:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'sk-SK': {
      font: {
        bold: 'Tučné',
        italic: 'Kurzíva',
        underline: 'Podčiarknutie',
        clear: 'Odstrániť štýl písma',
        height: 'Výška riadku',
        name: 'Názov',
        strikethrough: 'Prečiarknuté',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Veľkosť písma'
      },
      image: {
        image: 'Obrázok',
        insert: 'Vložiť obrázok',
        resizeFull: 'Pôvodná veľkosť',
        resizeHalf: 'Polovičná veľkosť',
        resizeQuarter: 'Štvrtinová veľkosť',
        floatLeft: 'Umiestniť doľava',
        floatRight: 'Umiestniť doprava',
        floatNone: 'Bez zarovnania',
        shapeRounded: 'Tvar: Zaoblené',
        shapeCircle: 'Tvar: Kruh',
        shapeThumbnail: 'Tvar: Náhľad',
        shapeNone: 'Tvar: Žiadne',
        dragImageHere: 'Pretiahnuť sem obrázok',
        dropImage: 'Pretiahnuť sem obrázok alebo text',
        selectFromFiles: 'Vybrať súbor',
        maximumFileSize: 'Maximálna veľkosť súboru',
        maximumFileSizeError: 'Maximálna veľkosť súboru bola prekročená.',
        url: 'URL obrázku',
        remove: 'Odstrániť obrázok',
        original: 'Originál'
      },
      video: {
        video: 'Video',
        videoLink: 'Odkaz videa',
        insert: 'Vložiť video',
        url: 'URL videa?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion alebo Youku)'
      },
      link: {
        link: 'Odkaz',
        insert: 'Vytvoriť odkaz',
        unlink: 'Zrušiť odkaz',
        edit: 'Upraviť',
        textToDisplay: 'Zobrazovaný text',
        url: 'Na akú URL adresu má tento odkaz viesť?',
        openInNewWindow: 'Otvoriť v novom okne',
        useProtocol: 'Použiť predvolený protokol'
      },
      table: {
        table: 'Tabuľka',
        addRowAbove: 'Pridať riadok nad',
        addRowBelow: 'Pridať riadok pod',
        addColLeft: 'Pridať stĺpec vľavo',
        addColRight: 'Pridať stĺpec vpravo',
        delRow: 'Odstrániť riadok',
        delCol: 'Odstrániť stĺpec',
        delTable: 'Odstrániť tabuľku'
      },
      hr: {
        insert: 'Vložit vodorovnú čiaru'
      },
      style: {
        style: 'Štýl',
        p: 'Normálny',
        blockquote: 'Citácia',
        pre: 'Kód',
        h1: 'Nadpis 1',
        h2: 'Nadpis 2',
        h3: 'Nadpis 3',
        h4: 'Nadpis 4',
        h5: 'Nadpis 5',
        h6: 'Nadpis 6'
      },
      lists: {
        unordered: 'Odrážkový zoznam',
        ordered: 'Číselný zoznam'
      },
      options: {
        help: 'Pomoc',
        fullscreen: 'Celá obrazovka',
        codeview: 'HTML kód'
      },
      paragraph: {
        paragraph: 'Odsek',
        outdent: 'Zväčšiť odsadenie',
        indent: 'Zmenšiť odsadenie',
        left: 'Zarovnať doľava',
        center: 'Zarovnať na stred',
        right: 'Zarovnať doprava',
        justify: 'Zarovnať obojstranne'
      },
      color: {
        recent: 'Aktuálna farba',
        more: 'Dalšie farby',
        background: 'Farba pozadia',
        foreground: 'Farba písma',
        transparent: 'Priehľadnosť',
        setTransparent: 'Nastaviť priehľadnosť',
        reset: 'Obnoviť',
        resetToDefault: 'Obnoviť prednastavené'
      },
      shortcut: {
        shortcuts: 'Klávesové skratky',
        close: 'Zavrieť',
        textFormatting: 'Formátovanie textu',
        action: 'Akcia',
        paragraphFormatting: 'Formátovanie odseku',
        documentStyle: 'Štýl dokumentu',
        extraKeys: 'Ďalšie kombinácie'
      },
      help: {
        'insertParagraph': 'Vložiť odsek',
        'undo': 'Vrátiť posledný krok',
        'redo': 'Obnoviť posledný krok',
        'tab': 'Odsadiť',
        'untab': 'Zmenšiť odsadenie',
        'bold': 'Tučné',
        'italic': 'Kurzívu',
        'underline': 'Podčiarknutie',
        'strikethrough': 'Preškrknutý text',
        'removeFormat': 'Odstrániť formátovanie',
        'justifyLeft': 'Odsadenie zľava',
        'justifyCenter': 'Vycentrovať',
        'justifyRight': 'Odsadenie zprava',
        'justifyFull': 'Zarovnať do bloku',
        'insertUnorderedList': 'Odrážkový zoznam',
        'insertOrderedList': 'Číselný zoznam',
        'outdent': 'Zrušiť odsadenie aktuálneho odseku',
        'indent': 'Odsadiť aktuálny odsek',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Vložiť horizontálne pravidlo',
        'linkDialog.show': 'Dialóg na zadanie odkazu'
      },
      history: {
        undo: 'Krok vzad',
        redo: 'Krok dopredu'
      },
      specialChar: {
        specialChar: 'ŠPECIÁLNE ZNAKY',
        select: 'Vybrať špeciálne znaky'
      }
    }
  });
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(113);
/******/ })()
;
});