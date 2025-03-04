(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themevale/themevale_AZbrands */ "./assets/js/theme/themevale/themevale_AZbrands.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    Object(_themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AZbrands.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AZbrands.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
    azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      blog: {
        posts: {
          limit: context.themeSettings.brandpage_brands_per_page
        }
      }
    },
    template: 'themevale/halo-all-brands'
  };
  if (context.themeSettings.halo_brandlayout === 'aztable') {
    getAllBrand();
    brandNavigationEvent();
  }
  function getAllBrand() {
    azWrapper.addClass('is-loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage('/brands.php', requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');
      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }
  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');
      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }
      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }
  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS90aGVtZXZhbGUvdGhlbWV2YWxlX0FaYnJhbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyJdLCJuYW1lcyI6WyJCcmFuZHMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImhhbG9BWkJyYW5kcyIsIlBhZ2VNYW5hZ2VyIiwiYXpXcmFwcGVyIiwiJCIsImF6TmF2aWdhdGlvbiIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInBvc3RzIiwibGltaXQiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSIsInRlbXBsYXRlIiwiaGFsb19icmFuZGxheW91dCIsImdldEFsbEJyYW5kIiwiYnJhbmROYXZpZ2F0aW9uRXZlbnQiLCJhZGRDbGFzcyIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVycm9yIiwicmVzcG9uc2UiLCJsaXN0IiwicGFyc2VMaXN0QnJhbmQiLCJuZXh0VXJsIiwiZGF0YSIsImxvYWRNb3JlQnJhbmRzIiwicmVtb3ZlQ2xhc3MiLCJpc0xldHRlciIsInN0ciIsImxlbmd0aCIsIm1hdGNoIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjaGlsZHJlbiIsInBhcmVudCIsImxldHRlciIsInVuZGVmaW5lZCIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiaSIsImFwcGVuZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNpQjtBQUFBLElBRXJDQSxNQUFNLDBCQUFBQyxZQUFBO0VBQUFDLGNB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L0Y7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNVLGNBQWNBLENBQUNxQixHQUFHLEVBQUU7SUFDekI5QixrRUFBSyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQzRCLEdBQUcsRUFBRTFDLGNBQWMsRUFBRSxVQUFDZSxLQUFLLEVBQUVDLFFBQVEsRUFBSztNQUN4RCxJQUFJRCxLQUFLLEVBQUU7UUFDUCxPQUFPLEVBQUU7TUFDYjtNQUVBLElBQUlFLElBQUksR0FBR25CLENBQUMsQ0FBQ2tCLFFBQVEsQ0FBQztNQUV0QkUsY0FBYyxDQUFDRCxJQUFJLENBQUM7TUFFcEIsSUFBTUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUU3QyxJQUFJRCxPQUFPLEVBQUU7UUFDVEUsY0FBYyxDQUFDRixPQUFPLENBQUM7TUFDM0IsQ0FBQyxNQUFLO1FBQ0Z0QixTQUFTLENBQUN5QixXQUFXLENBQUMsWUFBWSxDQUFDO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDOzs7Ozs7Ozs7Ozs7O0FDM0dhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMseUJBQXlCLG1CQUFPLENBQUMsd0ZBQXlCO0FBQzFELGlCQUFpQixtQkFBTyxDQUFDLHdGQUF5Qjs7QUFFbEQ7QUFDQSxtQkFBTyxDQUFDLG9FQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9BWkJyYW5kcyBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfQVpicmFuZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG4gICAgXG5cdG9uUmVhZHkoKSB7XG5cdFx0aGFsb0FaQnJhbmRzKHRoaXMuY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBheldyYXBwZXIgPSAkKCcjaGFsb0FaQnJhbmRzV3JhcHBlcicpLFxuICAgICAgICBhek5hdmlnYXRpb24gPSAkKCcjaGFsb0FaQnJhbmRzVGFibGUnKTtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICBwb3N0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogY29udGV4dC50aGVtZVNldHRpbmdzLmJyYW5kcGFnZV9icmFuZHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiAndGhlbWV2YWxlL2hhbG8tYWxsLWJyYW5kcycsXG4gICAgfTtcblxuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19icmFuZGxheW91dCA9PT0gJ2F6dGFibGUnKSB7XG4gICAgICAgIGdldEFsbEJyYW5kKCk7XG4gICAgICAgIGJyYW5kTmF2aWdhdGlvbkV2ZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsQnJhbmQoKXtcbiAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy9icmFuZHMucGhwJywgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgcGFyc2VMaXN0QnJhbmQobGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcblxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMZXR0ZXIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvW2Etel0vaSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJhbmROYXZpZ2F0aW9uRXZlbnQoKXtcbiAgICAgICAgYXpOYXZpZ2F0aW9uLm9uKCdjbGljaycsICdhJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJHRhcmdldC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9ICR0YXJnZXQuZGF0YSgnaHJlZicpO1xuXG4gICAgICAgICAgICBpZiAobGV0dGVyICE9PSB1bmRlZmluZWQgfHwgbGV0dGVyKSB7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmZpbmQoJy5hekJyYW5kcy1ncm91cCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuZmluZCgnW2RhdGEtbGV0dGVyPScrbGV0dGVyKyddJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuYWRkQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VMaXN0QnJhbmQobGlzdCl7XG4gICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQoZWxlbWVudCkuZGF0YSgnbGV0dGVyJyk7XG5cbiAgICAgICAgICAgIGlmKCFpc0xldHRlcihsZXR0ZXIpKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5hcHBlbmQobGlzdC5maW5kKCdbZGF0YS1icmFuZC1sZXR0ZXI9JytpKyddJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5hcHBlbmQobGlzdC5maW5kKCdbZGF0YS1icmFuZC1sZXR0ZXI9JytsZXR0ZXIrJ10nKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuY2hpbGRyZW4oKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBhek5hdmlnYXRpb24uZmluZCgnW2RhdGEtbGV0dGVyPScrbGV0dGVyKyddJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKS5hZGRDbGFzcygnaGFzLWxldHRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkTW9yZUJyYW5kcyh1cmwpIHtcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICBwYXJzZUxpc3RCcmFuZChsaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGxpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xuXG4gICAgICAgICAgICBpZiAobmV4dFVybCkge1xuICAgICAgICAgICAgICAgIGxvYWRNb3JlQnJhbmRzKG5leHRVcmwpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
