/*!
 * 
 * Super simple WYSIWYG editor v0.8.18
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and other contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-04-07T15:09Z
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

/***/ 568:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'fi-FI': {
      font: {
        bold: 'Lihavointi',
        italic: 'Kursivointi',
        underline: 'Alleviivaus',
        clear: 'Tyhjennä muotoilu',
        height: 'Riviväli',
        name: 'Kirjasintyyppi',
        strikethrough: 'Yliviivaus',
        subscript: 'Alaindeksi',
        superscript: 'Yläindeksi',
        size: 'Kirjasinkoko'
      },
      image: {
        image: 'Kuva',
        insert: 'Lisää kuva',
        resizeFull: 'Koko leveys',
        resizeHalf: 'Puolikas leveys',
        resizeQuarter: 'Neljäsosa leveys',
        floatLeft: 'Sijoita vasemmalle',
        floatRight: 'Sijoita oikealle',
        floatNone: 'Ei sijoitusta',
        shapeRounded: 'Muoto: Pyöristetty',
        shapeCircle: 'Muoto: Ympyrä',
        shapeThumbnail: 'Muoto: Esikatselukuva',
        shapeNone: 'Muoto: Ei muotoilua',
        dragImageHere: 'Vedä kuva tähän',
        selectFromFiles: 'Valitse tiedostoista',
        maximumFileSize: 'Maksimi tiedosto koko',
        maximumFileSizeError: 'Maksimi tiedosto koko ylitetty.',
        url: 'URL-osoitteen mukaan',
        remove: 'Poista kuva',
        original: 'Alkuperäinen'
      },
      video: {
        video: 'Video',
        videoLink: 'Linkki videoon',
        insert: 'Lisää video',
        url: 'Videon URL-osoite',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion tai Youku)'
      },
      link: {
        link: 'Linkki',
        insert: 'Lisää linkki',
        unlink: 'Poista linkki',
        edit: 'Muokkaa',
        textToDisplay: 'Näytettävä teksti',
        url: 'Linkin URL-osoite',
        openInNewWindow: 'Avaa uudessa ikkunassa'
      },
      table: {
        table: 'Taulukko',
        addRowAbove: 'Lisää rivi yläpuolelle',
        addRowBelow: 'Lisää rivi alapuolelle',
        addColLeft: 'Lisää sarake vasemmalle puolelle',
        addColRight: 'Lisää sarake oikealle puolelle',
        delRow: 'Poista rivi',
        delCol: 'Poista sarake',
        delTable: 'Poista taulukko'
      },
      hr: {
        insert: 'Lisää vaakaviiva'
      },
      style: {
        style: 'Tyyli',
        p: 'Normaali',
        blockquote: 'Lainaus',
        pre: 'Koodi',
        h1: 'Otsikko 1',
        h2: 'Otsikko 2',
        h3: 'Otsikko 3',
        h4: 'Otsikko 4',
        h5: 'Otsikko 5',
        h6: 'Otsikko 6'
      },
      lists: {
        unordered: 'Luettelomerkitty luettelo',
        ordered: 'Numeroitu luettelo'
      },
      options: {
        help: 'Ohje',
        fullscreen: 'Koko näyttö',
        codeview: 'HTML-näkymä'
      },
      paragraph: {
        paragraph: 'Kappale',
        outdent: 'Pienennä sisennystä',
        indent: 'Suurenna sisennystä',
        left: 'Tasaa vasemmalle',
        center: 'Keskitä',
        right: 'Tasaa oikealle',
        justify: 'Tasaa'
      },
      color: {
        recent: 'Viimeisin väri',
        more: 'Lisää värejä',
        background: 'Korostusväri',
        foreground: 'Tekstin väri',
        transparent: 'Läpinäkyvä',
        setTransparent: 'Aseta läpinäkyväksi',
        reset: 'Palauta',
        resetToDefault: 'Palauta oletusarvoksi'
      },
      shortcut: {
        shortcuts: 'Pikanäppäimet',
        close: 'Sulje',
        textFormatting: 'Tekstin muotoilu',
        action: 'Toiminto',
        paragraphFormatting: 'Kappaleen muotoilu',
        documentStyle: 'Asiakirjan tyyli'
      },
      help: {
        'insertParagraph': 'Lisää kappale',
        'undo': 'Kumoa viimeisin komento',
        'redo': 'Tee uudelleen kumottu komento',
        'tab': 'Sarkain',
        'untab': 'Sarkainmerkin poisto',
        'bold': 'Lihavointi',
        'italic': 'Kursiivi',
        'underline': 'Alleviivaus',
        'strikethrough': 'Yliviivaus',
        'removeFormat': 'Poista asetetut tyylit',
        'justifyLeft': 'Tasaa vasemmalle',
        'justifyCenter': 'Keskitä',
        'justifyRight': 'Tasaa oikealle',
        'justifyFull': 'Tasaa',
        'insertUnorderedList': 'Luettelomerkillä varustettu lista',
        'insertOrderedList': 'Numeroitu lista',
        'outdent': 'Pienennä sisennystä',
        'indent': 'Suurenna sisennystä',
        'formatPara': 'Muuta kappaleen formaatti p',
        'formatH1': 'Muuta kappaleen formaatti H1',
        'formatH2': 'Muuta kappaleen formaatti H2',
        'formatH3': 'Muuta kappaleen formaatti H3',
        'formatH4': 'Muuta kappaleen formaatti H4',
        'formatH5': 'Muuta kappaleen formaatti H5',
        'formatH6': 'Muuta kappaleen formaatti H6',
        'insertHorizontalRule': 'Lisää vaakaviiva',
        'linkDialog.show': 'Lisää linkki'
      },
      history: {
        undo: 'Kumoa',
        redo: 'Toista'
      },
      specialChar: {
        specialChar: 'ERIKOISMERKIT',
        select: 'Valitse erikoismerkit'
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
/******/ 	return __webpack_require__(568);
/******/ })()
;
});