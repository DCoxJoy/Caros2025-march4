(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_9__);




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showmore_product();
    this.showmore_htmltext();
    this.categoryImage_fancybox();
    this.position_category_filter();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // $('html, body').animate({
      //     scrollTop: 0,
      // }, 100);
    });
  };
  _proto.showmore_product = function showmore_product() {
    var check_link = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next();
    if (check_link.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').css('display', 'none');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '#button-showmore-category', function (e) {
        e.preventDefault();
        var nextPage = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').addClass('loadding');
        jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          success: function success(data) {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('#productLayout').length > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('#productLayout').append(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('#productLayout').children());
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination-list').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find(".pagination-list").html());
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').removeClass('loadding');
              if (Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .end').text()) <= Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .total').text())) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .end').text());
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .total').text());
              }
              nextPage = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next();
              if (nextPage.length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').css('display', 'none');
              }
            }
          }
        });
      });
    }
  };
  _proto.showmore_htmltext = function showmore_htmltext() {
    var showChar = 600,
      ellipsestext = "...",
      moretext = "Read more",
      lesstext = "Read less";
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.custom-html-category .custom-html').each(function () {
      var content = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html(html);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-html').on('click', function (e) {
      e.preventDefault();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).hasClass("less")) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).removeClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.text').html(moretext);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().prev().removeClass('showmore');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.text').html(lesstext);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().prev().addClass('showmore');
      }
    });
  };
  _proto.categoryImage_fancybox = function categoryImage_fancybox() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.fancybox').fancybox({
      // openEffect  : 'elastic'
    });
  };
  _proto.position_category_filter = function position_category_filter() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.page-type-category').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.banners[data-banner-location="top"]').length) {
          var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
          console.log(position);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_MultiCategory').css('top', position);
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.page-type-category').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.banners[data-banner-location="top"]').length) {
            var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
            console.log(position);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_MultiCategory').css('top', position);
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_MultiCategory').css('top', 'auto');
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsInNob3dtb3JlX3Byb2R1Y3QiLCJzaG93bW9yZV9odG1sdGV4dCIsImNhdGVnb3J5SW1hZ2VfZmFuY3lib3giLCJwb3NpdGlvbl9jYXRlZ29yeV9maWx0ZXIiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJjaGVja19saW5rIiwibmV4dCIsImNzcyIsImRvY3VtZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJsaW5rIiwiZmluZCIsImF0dHIiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJyZW1vdmVDbGFzcyIsIk51bWJlciIsInRleHQiLCJzaG93Q2hhciIsImVsbGlwc2VzdGV4dCIsIm1vcmV0ZXh0IiwibGVzc3RleHQiLCJlYWNoIiwiYyIsInN1YnN0ciIsImgiLCJoYXNDbGFzcyIsInBhcmVudCIsInByZXYiLCJmYW5jeWJveCIsIndpbmRvdyIsIndpZHRoIiwicG9zaXRpb24iLCJvdXRlckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJyZXNpemUiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUM0QjtBQUNmO0FBQ29CO0FBQ0o7QUFDbEM7QUFBQSxJQUVHQSxRQUFRLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLFFBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3pCRSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ05DLHdFQUFlLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQztJQUVsQyxJQUFJQyw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEQyxnRUFBSyxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDSCxjQUFjLENBQUM7SUFDckQ7SUFFQSxJQUFJLENBQUNJLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNDLHdCQUF3QixDQUFDLENBQUM7RUFDbkMsQ0FBQztFQUFBaEIsTUFBQSxDQUVEUSxpQkFBaUIsR0FBakIsU0FBQUEsa0JBQUEsRUFBb0I7SUFD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Q0FBc0MsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7WUFDbEQsSUFBSWdFLFFBQVEsR0FBR2pFLDZDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ2tFLFdBQVcsQ0FBQyxDQUFDLEdBQUMsQ0FBQztZQUN4RUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztZQUNyQmpFLDZDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQytCLEdBQUcsQ0FBQyxLQUFLLEVBQUVrQyxRQUFRLENBQUM7VUFDdEQ7UUFDSjtNQUNKLENBQUMsTUFBTTtRQUNIakUsNkNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDK0IsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7TUFDcEQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQTFDLFFBQUE7QUFBQSxFQTdJaUNpRixnREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgJ2ZhbmN5Ym94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd21vcmVfcHJvZHVjdCgpO1xuICAgICAgICB0aGlzLnNob3dtb3JlX2h0bWx0ZXh0KCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJbWFnZV9mYW5jeWJveCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2NhdGVnb3J5X2ZpbHRlcigpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAvLyAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgLy8gfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd21vcmVfcHJvZHVjdCgpIHtcbiAgICAgICAgdmFyIGNoZWNrX2xpbmsgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgIGlmIChjaGVja19saW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2xvYWRkaW5nJyk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdExheW91dCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdExheW91dCcpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0TGF5b3V0JykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5yZW1vdmVDbGFzcygnbG9hZGRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8PSBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dtb3JlX2h0bWx0ZXh0KCkge1xuICAgICAgICB2YXIgc2hvd0NoYXIgPSA2MDAsXG4gICAgICAgICAgICBlbGxpcHNlc3RleHQgPSBcIi4uLlwiLFxuICAgICAgICAgICAgbW9yZXRleHQgPSBcIlJlYWQgbW9yZVwiLFxuICAgICAgICAgICAgbGVzc3RleHQgPSBcIlJlYWQgbGVzc1wiO1xuICAgICAgICAkKCcuY3VzdG9tLWh0bWwtY2F0ZWdvcnkgLmN1c3RvbS1odG1sJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICAgICAgICBpZihjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XG4gXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjb250ZW50LnN1YnN0cigwLCBzaG93Q2hhcik7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XG4gICAgIFxuICAgICAgICAgICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQrICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj48L3NwYW4+JztcbiAgICAgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1odG1sJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZXh0JykuaHRtbChtb3JldGV4dCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ3Nob3dtb3JlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnRleHQnKS5odG1sKGxlc3N0ZXh0KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5hZGRDbGFzcygnc2hvd21vcmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlJbWFnZV9mYW5jeWJveCgpIHtcbiAgICAgICAgJCgnLmZhbmN5Ym94JykuZmFuY3lib3goe1xuICAgICAgICAgICAgLy8gb3BlbkVmZmVjdCAgOiAnZWxhc3RpYydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb25fY2F0ZWdvcnlfZmlsdGVyKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XG4gICAgICAgICAgICBpZiAoJCgnLnBhZ2UtdHlwZS1jYXRlZ29yeScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcuYmFubmVyc1tkYXRhLWJhbm5lci1sb2NhdGlvbj1cInRvcFwiXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcuYmFubmVyc1tkYXRhLWJhbm5lci1sb2NhdGlvbj1cInRvcFwiXScpLm91dGVySGVpZ2h0KCkvMjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnBhZ2UtdHlwZS1jYXRlZ29yeScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJhbm5lcnNbZGF0YS1iYW5uZXItbG9jYXRpb249XCJ0b3BcIl0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQoJy5iYW5uZXJzW2RhdGEtYmFubmVyLWxvY2F0aW9uPVwidG9wXCJdJykub3V0ZXJIZWlnaHQoKS8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykuY3NzKCd0b3AnLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmNzcygndG9wJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
