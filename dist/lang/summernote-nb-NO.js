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

/***/ 525:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'nb-NO': {
      font: {
        bold: 'Fet',
        italic: 'Kursiv',
        underline: 'Understrek',
        clear: 'Fjern formatering',
        height: 'Linjehøyde',
        name: 'Skrifttype',
        strikethrough: 'Gjennomstrek',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Skriftstørrelse'
      },
      image: {
        image: 'Bilde',
        insert: 'Sett inn bilde',
        resizeFull: 'Sett full størrelse',
        resizeHalf: 'Sett halv størrelse',
        resizeQuarter: 'Sett kvart størrelse',
        floatLeft: 'Flyt til venstre',
        floatRight: 'Flyt til høyre',
        floatNone: 'Fjern flyt',
        shapeRounded: 'Form: Rundet',
        shapeCircle: 'Form: Sirkel',
        shapeThumbnail: 'Form: Miniatyr',
        shapeNone: 'Form: Ingen',
        dragImageHere: 'Dra et bilde hit',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Velg fra filer',
        maximumFileSize: 'Max filstørrelse',
        maximumFileSizeError: 'Maks filstørrelse overskredet.',
        url: 'Bilde-URL',
        remove: 'Fjern bilde',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Videolenke',
        insert: 'Sett inn video',
        url: 'Video-URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)'
      },
      link: {
        link: 'Lenke',
        insert: 'Sett inn lenke',
        unlink: 'Fjern lenke',
        edit: 'Rediger',
        textToDisplay: 'Visningstekst',
        url: 'Til hvilken URL skal denne lenken peke?',
        openInNewWindow: 'Åpne i nytt vindu'
      },
      table: {
        table: 'Tabell',
        addRowAbove: 'Legg til rad over',
        addRowBelow: 'Legg til rad under',
        addColLeft: 'Legg til kolonne på venstre side',
        addColRight: 'Legg til kolonne på høyre side',
        delRow: 'Slett rad',
        delCol: 'Slett kolonne',
        delTable: 'Slett tabell'
      },
      hr: {
        insert: 'Sett inn horisontal linje'
      },
      style: {
        style: 'Stil',
        p: 'Paragraf',
        blockquote: 'Sitat',
        pre: 'Kode',
        h1: 'Overskrift 1',
        h2: 'Overskrift 2',
        h3: 'Overskrift 3',
        h4: 'Overskrift 4',
        h5: 'Overskrift 5',
        h6: 'Overskrift 6'
      },
      lists: {
        unordered: 'Punktliste',
        ordered: 'Nummerert liste'
      },
      options: {
        help: 'Hjelp',
        fullscreen: 'Fullskjerm',
        codeview: 'HTML-visning'
      },
      paragraph: {
        paragraph: 'Avsnitt',
        outdent: 'Tilbakerykk',
        indent: 'Innrykk',
        left: 'Venstrejustert',
        center: 'Midtstilt',
        right: 'Høyrejustert',
        justify: 'Blokkjustert'
      },
      color: {
        recent: 'Nylig valgt farge',
        more: 'Flere farger',
        background: 'Bakgrunnsfarge',
        foreground: 'Skriftfarge',
        transparent: 'Gjennomsiktig',
        setTransparent: 'Sett gjennomsiktig',
        reset: 'Nullstill',
        resetToDefault: 'Nullstill til standard'
      },
      shortcut: {
        shortcuts: 'Hurtigtaster',
        close: 'Lukk',
        textFormatting: 'Tekstformatering',
        action: 'Handling',
        paragraphFormatting: 'Avsnittsformatering',
        documentStyle: 'Dokumentstil'
      },
      help: {
        'insertParagraph': 'Sett inn avsnitt',
        'undo': 'Angre siste handling',
        'redo': 'Gjør om siste handling',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Angi en fet stil',
        'italic': 'Angi en kursiv stil',
        'underline': 'Sett en understreket stil',
        'strikethrough': 'Sett en gjennomgående sti',
        'removeFormat': 'Tøm formattering',
        'justifyLeft': 'Angi venstrejustering',
        'justifyCenter': 'Angi sentrert justering',
        'justifyRight': 'Angi høyre justering',
        'justifyFull': 'Angi full justering',
        'insertUnorderedList': 'Bytt uordnet liste',
        'insertOrderedList': 'Bytt sortert liste',
        'outdent': 'Utrykk på valgt avsnitt',
        'indent': 'Innrykk på valgt avsnitt',
        'formatPara': 'Endre gjeldende blokkformat til et avsnitt (P-kode)',
        'formatH1': 'Endre gjeldende blokkformat til H1',
        'formatH2': 'Endre gjeldende blokkformat til H2',
        'formatH3': 'Endre gjeldende blokkformat til H3',
        'formatH4': 'Endre gjeldende blokkformat til H4',
        'formatH5': 'Endre gjeldende blokkformat til H5',
        'formatH6': 'Endre gjeldende blokkformat til H6',
        'insertHorizontalRule': 'Sett inn horisontal deler',
        'linkDialog.show': 'Vis koblingsdialog'
      },
      history: {
        undo: 'Angre',
        redo: 'Gjør om'
      },
      specialChar: {
        specialChar: 'SPESIELLE TEGN',
        select: 'Velg spesielle tegn'
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
/******/ 	return __webpack_require__(525);
/******/ })()
;
});