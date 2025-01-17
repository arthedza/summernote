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

/***/ 620:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'hu-HU': {
      font: {
        bold: 'Félkövér',
        italic: 'Dőlt',
        underline: 'Aláhúzott',
        clear: 'Formázás törlése',
        height: 'Sorköz',
        name: 'Betűtípus',
        strikethrough: 'Áthúzott',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Betűméret'
      },
      image: {
        image: 'Kép',
        insert: 'Kép beszúrása',
        resizeFull: 'Átméretezés teljes méretre',
        resizeHalf: 'Átméretezés felére',
        resizeQuarter: 'Átméretezés negyedére',
        floatLeft: 'Igazítás balra',
        floatRight: 'Igazítás jobbra',
        floatNone: 'Igazítás törlése',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Ide húzhat képet vagy szöveget',
        dropImage: 'Engedje el a képet vagy szöveget',
        selectFromFiles: 'Fájlok kiválasztása',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Kép URL címe',
        remove: 'Kép törlése',
        original: 'Original'
      },
      video: {
        video: 'Videó',
        videoLink: 'Videó hivatkozás',
        insert: 'Videó beszúrása',
        url: 'Videó URL címe',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vagy Youku)'
      },
      link: {
        link: 'Hivatkozás',
        insert: 'Hivatkozás beszúrása',
        unlink: 'Hivatkozás megszüntetése',
        edit: 'Szerkesztés',
        textToDisplay: 'Megjelenítendő szöveg',
        url: 'Milyen URL címre hivatkozzon?',
        openInNewWindow: 'Megnyitás új ablakban'
      },
      table: {
        table: 'Táblázat',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Elválasztó vonal beszúrása'
      },
      style: {
        style: 'Stílus',
        p: 'Normál',
        blockquote: 'Idézet',
        pre: 'Kód',
        h1: 'Fejléc 1',
        h2: 'Fejléc 2',
        h3: 'Fejléc 3',
        h4: 'Fejléc 4',
        h5: 'Fejléc 5',
        h6: 'Fejléc 6'
      },
      lists: {
        unordered: 'Listajeles lista',
        ordered: 'Számozott lista'
      },
      options: {
        help: 'Súgó',
        fullscreen: 'Teljes képernyő',
        codeview: 'Kód nézet'
      },
      paragraph: {
        paragraph: 'Bekezdés',
        outdent: 'Behúzás csökkentése',
        indent: 'Behúzás növelése',
        left: 'Igazítás balra',
        center: 'Igazítás középre',
        right: 'Igazítás jobbra',
        justify: 'Sorkizárt'
      },
      color: {
        recent: 'Jelenlegi szín',
        more: 'További színek',
        background: 'Háttérszín',
        foreground: 'Betűszín',
        transparent: 'Átlátszó',
        setTransparent: 'Átlászóság beállítása',
        reset: 'Visszaállítás',
        resetToDefault: 'Alaphelyzetbe állítás'
      },
      shortcut: {
        shortcuts: 'Gyorsbillentyű',
        close: 'Bezárás',
        textFormatting: 'Szöveg formázása',
        action: 'Művelet',
        paragraphFormatting: 'Bekezdés formázása',
        documentStyle: 'Dokumentumstílus',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Új bekezdés',
        'undo': 'Visszavonás',
        'redo': 'Újra',
        'tab': 'Behúzás növelése',
        'untab': 'Behúzás csökkentése',
        'bold': 'Félkövérre állítás',
        'italic': 'Dőltre állítás',
        'underline': 'Aláhúzás',
        'strikethrough': 'Áthúzás',
        'removeFormat': 'Formázás törlése',
        'justifyLeft': 'Balra igazítás',
        'justifyCenter': 'Középre igazítás',
        'justifyRight': 'Jobbra igazítás',
        'justifyFull': 'Sorkizárt',
        'insertUnorderedList': 'Számozatlan lista be/ki',
        'insertOrderedList': 'Számozott lista be/ki',
        'outdent': 'Jelenlegi bekezdés behúzásának megszüntetése',
        'indent': 'Jelenlegi bekezdés behúzása',
        'formatPara': 'Blokk formázása bekezdésként (P tag)',
        'formatH1': 'Blokk formázása, mint Fejléc 1',
        'formatH2': 'Blokk formázása, mint Fejléc 2',
        'formatH3': 'Blokk formázása, mint Fejléc 3',
        'formatH4': 'Blokk formázása, mint Fejléc 4',
        'formatH5': 'Blokk formázása, mint Fejléc 5',
        'formatH6': 'Blokk formázása, mint Fejléc 6',
        'insertHorizontalRule': 'Vízszintes vonal beszúrása',
        'linkDialog.show': 'Link párbeszédablak megjelenítése'
      },
      history: {
        undo: 'Visszavonás',
        redo: 'Újra'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
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
/******/ 	return __webpack_require__(620);
/******/ })()
;
});