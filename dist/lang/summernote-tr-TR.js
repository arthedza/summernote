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

/***/ 452:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'tr-TR': {
      font: {
        bold: 'Kalın',
        italic: 'İtalik',
        underline: 'Altı çizili',
        clear: 'Temizle',
        height: 'Satır yüksekliği',
        name: 'Yazı Tipi',
        strikethrough: 'Üstü çizili',
        subscript: 'Alt Simge',
        superscript: 'Üst Simge',
        size: 'Yazı tipi boyutu'
      },
      image: {
        image: 'Resim',
        insert: 'Resim ekle',
        resizeFull: 'Orjinal boyut',
        resizeHalf: '1/2 boyut',
        resizeQuarter: '1/4 boyut',
        floatLeft: 'Sola hizala',
        floatRight: 'Sağa hizala',
        floatNone: 'Hizalamayı kaldır',
        shapeRounded: 'Şekil: Yuvarlatılmış Köşe',
        shapeCircle: 'Şekil: Daire',
        shapeThumbnail: 'Şekil: K.Resim',
        shapeNone: 'Şekil: Yok',
        dragImageHere: 'Buraya sürükleyin',
        dropImage: 'Resim veya metni bırakın',
        selectFromFiles: 'Dosya seçin',
        maximumFileSize: 'Maksimum dosya boyutu',
        maximumFileSizeError: 'Maksimum dosya boyutu aşıldı.',
        url: 'Resim bağlantısı',
        remove: 'Resimi Kaldır',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video bağlantısı',
        insert: 'Video ekle',
        url: 'Video bağlantısı?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion veya Youku)'
      },
      link: {
        link: 'Bağlantı',
        insert: 'Bağlantı ekle',
        unlink: 'Bağlantıyı kaldır',
        edit: 'Bağlantıyı düzenle',
        textToDisplay: 'Görüntülemek için',
        url: 'Bağlantı adresi?',
        openInNewWindow: 'Yeni pencerede aç',
        useProtocol: "Varsayılan protokolü kullan"
      },
      table: {
        table: 'Tablo',
        addRowAbove: 'Yukarı satır ekle',
        addRowBelow: 'Aşağı satır ekle',
        addColLeft: 'Sola sütun ekle',
        addColRight: 'Sağa sütun ekle',
        delRow: 'Satırı sil',
        delCol: 'Sütunu sil',
        delTable: 'Tabloyu sil'
      },
      hr: {
        insert: 'Yatay çizgi ekle'
      },
      style: {
        style: 'Biçim',
        p: 'p',
        blockquote: 'Alıntı',
        pre: 'Önbiçimli',
        h1: 'Başlık 1',
        h2: 'Başlık 2',
        h3: 'Başlık 3',
        h4: 'Başlık 4',
        h5: 'Başlık 5',
        h6: 'Başlık 6'
      },
      lists: {
        unordered: 'Madde işaretli liste',
        ordered: 'Numaralı liste'
      },
      options: {
        help: 'Yardım',
        fullscreen: 'Tam ekran',
        codeview: 'HTML Kodu'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Girintiyi artır',
        indent: 'Girintiyi azalt',
        left: 'Sola hizala',
        center: 'Ortaya hizala',
        right: 'Sağa hizala',
        justify: 'Yasla'
      },
      color: {
        recent: 'Son renk',
        more: 'Daha fazla renk',
        background: 'Arka plan rengi',
        foreground: 'Yazı rengi',
        transparent: 'Seffaflık',
        setTransparent: 'Şeffaflığı ayarla',
        reset: 'Sıfırla',
        resetToDefault: 'Varsayılanlara sıfırla'
      },
      shortcut: {
        shortcuts: 'Kısayollar',
        close: 'Kapat',
        textFormatting: 'Yazı biçimlendirme',
        action: 'Eylem',
        paragraphFormatting: 'Paragraf biçimlendirme',
        documentStyle: 'Biçim',
        extraKeys: 'İlave anahtarlar'
      },
      help: {
        'insertParagraph': 'Paragraf ekler',
        'undo': 'Son komudu geri alır',
        'redo': 'Son komudu yineler',
        'tab': 'Girintiyi artırır',
        'untab': 'Girintiyi azaltır',
        'bold': 'Kalın yazma stilini ayarlar',
        'italic': 'İtalik yazma stilini ayarlar',
        'underline': 'Altı çizgili yazma stilini ayarlar',
        'strikethrough': 'Üstü çizgili yazma stilini ayarlar',
        'removeFormat': 'Biçimlendirmeyi temizler',
        'justifyLeft': 'Yazıyı sola hizalar',
        'justifyCenter': 'Yazıyı ortalar',
        'justifyRight': 'Yazıyı sağa hizalar',
        'justifyFull': 'Yazıyı her iki tarafa yazlar',
        'insertUnorderedList': 'Madde işaretli liste ekler',
        'insertOrderedList': 'Numaralı liste ekler',
        'outdent': 'Aktif paragrafın girintisini azaltır',
        'indent': 'Aktif paragrafın girintisini artırır',
        'formatPara': 'Aktif bloğun biçimini paragraf (p) olarak değiştirir',
        'formatH1': 'Aktif bloğun biçimini başlık 1 (h1) olarak değiştirir',
        'formatH2': 'Aktif bloğun biçimini başlık 2 (h2) olarak değiştirir',
        'formatH3': 'Aktif bloğun biçimini başlık 3 (h3) olarak değiştirir',
        'formatH4': 'Aktif bloğun biçimini başlık 4 (h4) olarak değiştirir',
        'formatH5': 'Aktif bloğun biçimini başlık 5 (h5) olarak değiştirir',
        'formatH6': 'Aktif bloğun biçimini başlık 6 (h6) olarak değiştirir',
        'insertHorizontalRule': 'Yatay çizgi ekler',
        'linkDialog.show': 'Bağlantı ayar kutusunu gösterir'
      },
      history: {
        undo: 'Geri al',
        redo: 'Yinele'
      },
      specialChar: {
        specialChar: 'ÖZEL KARAKTERLER',
        select: 'Özel Karakterleri seçin'
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
/******/ 	return __webpack_require__(452);
/******/ })()
;
});