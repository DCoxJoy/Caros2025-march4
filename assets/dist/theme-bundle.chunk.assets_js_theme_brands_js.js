"use strict";
(self["webpackChunkbigcommerce_caros"] = self["webpackChunkbigcommerce_caros"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themevale/themevale_AZbrands */ "./assets/js/theme/themevale/themevale_AZbrands.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    (0,_themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AZbrands.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AZbrands.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage('/brands.php', requestOptions, function (error, response) {
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
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
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDaUI7QUFBQSxJQUVyQ0UsTUFBTSwwQkFBQUMsWUFBQTtFQUN2QixTQUFBRCxPQUFZRSxPQUFPLEVBQUU7SUFBQSxPQUNqQkQsWUFBQSxDQUFBRSxJQUFBLE9BQU1ELE9BQU8sQ0FBQztFQUNsQjtFQUFDRSxjQUFBLENBQUFKLE1BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsTUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FFSkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNUUix5RUFBWSxDQUFDLElBQUksQ0FBQ0csT0FBTyxDQUFDO0VBQ3hCLENBQUM7RUFBQSxPQUFBRixNQUFBO0FBQUEsRUFQK0JGLHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRS9DLDZCQUFlLG9DQUFVSSxPQUFPLEVBQUU7RUFDOUIsSUFBTVEsU0FBUyxHQUFHQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDdkNDLFlBQVksR0FBR0QsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0VBRTFDLElBQU1FLGNBQWMsR0FBRztJQUNuQkMsTUFBTSxFQUFFO01BQ0pDLElBQUksRUFBRTtRQUNGQyxLQUFLLEVBQUU7VUFDSEMsS0FBSyxFQUFFZixPQUFPLENBQUNnQixhQUFhLENBQUNDO1FBQ2pDO01BQ0o7SUFDSixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxJQUFJbEIsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDRyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7SUFDdERDLFdBQVcsQ0FBQyxDQUFDO0lBQ2JDLG9CQUFvQixDQUFDLENBQUM7RUFDMUI7RUFFQSxTQUFTRCxXQUFXQSxDQUFBLEVBQUU7SUFDbEJaLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUVoQ2Ysc0VBQVMsQ0FBQ2lCLE9BQU8sQ0FBQyxhQUFhLEVBQUViLGNBQWMsRUFBRSxVQUFDYyxLQUFLLEVBQUVDLFFBQVEsRUFBSztNQUNsRSxJQUFJRCxLQUFLLEVBQUU7UUFDUCxPQUFPLEVBQUU7TUFDYjtNQUVBLElBQUlFLElBQUksR0FBR2xCLENBQUMsQ0FBQ2lCLFFBQVEsQ0FBQztNQUV0QkUsY0FBYyxDQUFDRCxJQUFJLENBQUM7TUFFcEIsSUFBTUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUU3QyxJQUFJRCxPQUFPLEVBQUU7UUFDVEUsY0FBYyxDQUFDRixPQUFPLENBQUM7TUFDM0IsQ0FBQyxNQUFLO1FBQ0ZyQixTQUFTLENBQUN3QixXQUFXLENBQUMsWUFBWSxDQUFDO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTQyxRQUFRQSxDQUFDQyxHQUFHLEVBQUU7SUFDbkIsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxJQUFJRCxHQUFHLENBQUNFLEtBQUssQ0FBQyxRQUFRLENBQUM7RUFDbEQ7RUFFQSxTQUFTZixvQkFBb0JBLENBQUEsRUFBRTtJQUMzQlgsWUFBWSxDQUFDMkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3JDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQU1DLE9BQU8sR0FBRy9CLENBQUMsQ0FBQzZCLEtBQUssQ0FBQ0csYUFBYSxDQUFDO01BRXRDL0IsWUFBWSxDQUFDZ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDVixXQUFXLENBQUMsV0FBVyxDQUFDO01BRXBEUSxPQUFPLENBQUNHLE1BQU0sQ0FBQyxDQUFDLENBQUNyQixRQUFRLENBQUMsV0FBVyxDQUFDO01BRXRDLElBQU1zQixNQUFNLEdBQUdKLE9BQU8sQ0FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUVuQyxJQUFJYyxNQUFNLEtBQUtDLFNBQVMsSUFBSUQsTUFBTSxFQUFFO1FBQ2hDcEMsU0FBUyxDQUFDd0IsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUNuQ3hCLFNBQVMsQ0FBQ3NDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZCxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzFEeEIsU0FBUyxDQUFDc0MsSUFBSSxDQUFDLGVBQWUsR0FBQ0YsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDdEIsUUFBUSxDQUFDLFdBQVcsQ0FBQztNQUNwRSxDQUFDLE1BQU07UUFDSGQsU0FBUyxDQUFDYyxRQUFRLENBQUMsWUFBWSxDQUFDO01BQ3BDO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTTSxjQUFjQSxDQUFDRCxJQUFJLEVBQUM7SUFDekJuQixTQUFTLENBQUNzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO01BQ3ZELElBQUlMLE1BQU0sR0FBR25DLENBQUMsQ0FBQ3dDLE9BQU8sQ0FBQyxDQUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUV0QyxJQUFHLENBQUNHLFFBQVEsQ0FBQ1csTUFBTSxDQUFDLEVBQUM7UUFDakIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtVQUN6QnpDLENBQUMsQ0FBQyxzQkFBc0IsRUFBRXdDLE9BQU8sQ0FBQyxDQUFDRSxNQUFNLENBQUN4QixJQUFJLENBQUNtQixJQUFJLENBQUMscUJBQXFCLEdBQUNJLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRjtNQUNKLENBQUMsTUFBTTtRQUNIekMsQ0FBQyxDQUFDLHNCQUFzQixFQUFFd0MsT0FBTyxDQUFDLENBQUNFLE1BQU0sQ0FBQ3hCLElBQUksQ0FBQ21CLElBQUksQ0FBQyxxQkFBcUIsR0FBQ0YsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDO01BQzFGO01BRUEsSUFBR25DLENBQUMsQ0FBQyxzQkFBc0IsRUFBRXdDLE9BQU8sQ0FBQyxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDUCxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ3hEekIsWUFBWSxDQUFDb0MsSUFBSSxDQUFDLGVBQWUsR0FBQ0YsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDWixXQUFXLENBQUMsU0FBUyxDQUFDLENBQUNWLFFBQVEsQ0FBQyxZQUFZLENBQUM7TUFDL0Y7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNTLGNBQWNBLENBQUNxQixHQUFHLEVBQUU7SUFDekI3QyxzRUFBUyxDQUFDaUIsT0FBTyxDQUFDNEIsR0FBRyxFQUFFekMsY0FBYyxFQUFFLFVBQUNjLEtBQUssRUFBRUMsUUFBUSxFQUFLO01BQ3hELElBQUlELEtBQUssRUFBRTtRQUNQLE9BQU8sRUFBRTtNQUNiO01BRUEsSUFBSUUsSUFBSSxHQUFHbEIsQ0FBQyxDQUFDaUIsUUFBUSxDQUFDO01BRXRCRSxjQUFjLENBQUNELElBQUksQ0FBQztNQUVwQixJQUFNRSxPQUFPLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFDLGtCQUFrQixDQUFDO01BRTdDLElBQUlELE9BQU8sRUFBRTtRQUNURSxjQUFjLENBQUNGLE9BQU8sQ0FBQztNQUMzQixDQUFDLE1BQUs7UUFDRnJCLFNBQVMsQ0FBQ3dCLFdBQVcsQ0FBQyxZQUFZLENBQUM7TUFDdkM7SUFDSixDQUFDLENBQUM7RUFDTjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY2Fyb3MvLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfQVpicmFuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBoYWxvQVpCcmFuZHMgZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0FaYnJhbmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuICAgIFxuXHRvblJlYWR5KCkge1xuXHRcdGhhbG9BWkJyYW5kcyh0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgYXpXcmFwcGVyID0gJCgnI2hhbG9BWkJyYW5kc1dyYXBwZXInKSxcbiAgICAgICAgYXpOYXZpZ2F0aW9uID0gJCgnI2hhbG9BWkJyYW5kc1RhYmxlJyk7XG5cbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9oYWxvLWFsbC1icmFuZHMnLFxuICAgIH07XG5cbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fYnJhbmRsYXlvdXQgPT09ICdhenRhYmxlJykge1xuICAgICAgICBnZXRBbGxCcmFuZCgpO1xuICAgICAgICBicmFuZE5hdmlnYXRpb25FdmVudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbEJyYW5kKCl7XG4gICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCcvYnJhbmRzLnBocCcsIHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gbGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XG4gICAgICAgICAgICAgICAgbG9hZE1vcmVCcmFuZHMobmV4dFVybCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTGV0dGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1thLXpdL2kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyYW5kTmF2aWdhdGlvbkV2ZW50KCl7XG4gICAgICAgIGF6TmF2aWdhdGlvbi5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGF6TmF2aWdhdGlvbi5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSAkdGFyZ2V0LmRhdGEoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKGxldHRlciAhPT0gdW5kZWZpbmVkIHx8IGxldHRlcikge1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlLWFsbCcpO1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTGlzdEJyYW5kKGxpc3Qpe1xuICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKGVsZW1lbnQpLmRhdGEoJ2xldHRlcicpO1xuXG4gICAgICAgICAgICBpZighaXNMZXR0ZXIobGV0dGVyKSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScraSsnXScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScrbGV0dGVyKyddJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZigkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmNoaWxkcmVuKCkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJykuYWRkQ2xhc3MoJ2hhcy1sZXR0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZE1vcmVCcmFuZHModXJsKSB7XG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgcGFyc2VMaXN0QnJhbmQobGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcblxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiaGFsb0FaQnJhbmRzIiwiQnJhbmRzIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJkZWZhdWx0IiwidXRpbHMiLCJheldyYXBwZXIiLCIkIiwiYXpOYXZpZ2F0aW9uIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJibG9nIiwicG9zdHMiLCJsaW1pdCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlIiwidGVtcGxhdGUiLCJoYWxvX2JyYW5kbGF5b3V0IiwiZ2V0QWxsQnJhbmQiLCJicmFuZE5hdmlnYXRpb25FdmVudCIsImFkZENsYXNzIiwiYXBpIiwiZ2V0UGFnZSIsImVycm9yIiwicmVzcG9uc2UiLCJsaXN0IiwicGFyc2VMaXN0QnJhbmQiLCJuZXh0VXJsIiwiZGF0YSIsImxvYWRNb3JlQnJhbmRzIiwicmVtb3ZlQ2xhc3MiLCJpc0xldHRlciIsInN0ciIsImxlbmd0aCIsIm1hdGNoIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjaGlsZHJlbiIsInBhcmVudCIsImxldHRlciIsInVuZGVmaW5lZCIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiaSIsImFwcGVuZCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=