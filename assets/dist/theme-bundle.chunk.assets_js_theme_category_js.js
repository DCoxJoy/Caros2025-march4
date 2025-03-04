"use strict";
(self["webpackChunkbigcommerce_caros"] = self["webpackChunkbigcommerce_caros"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_5__);
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showmore_product();
    this.showmore_htmltext();
    this.categoryImage_fancybox();
    this.position_category_filter();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#faceted-search-container');
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
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // $('html, body').animate({
      //     scrollTop: 0,
      // }, 100);
    });
  };
  _proto.showmore_product = function showmore_product() {
    var check_link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next();
    if (check_link.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').css('display', 'none');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#button-showmore-category', function (e) {
        e.preventDefault();
        var nextPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').addClass('loadding');
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          success: function success(data) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('#productLayout').length > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#productLayout').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('#productLayout').children());
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-list').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find(".pagination-list").html());
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').removeClass('loadding');
              if (Number(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('.pagination-info .end').text()) <= Number(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('.pagination-info .total').text())) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('.pagination-info .end').text());
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('.pagination-info .total').text());
              }
              nextPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next();
              if (nextPage.length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').css('display', 'none');
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.custom-html-category .custom-html').each(function () {
      var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(html);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-html').on('click', function (e) {
      e.preventDefault();
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("less")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.text').html(moretext);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().prev().removeClass('showmore');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.text').html(lesstext);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().prev().addClass('showmore');
      }
    });
  };
  _proto.categoryImage_fancybox = function categoryImage_fancybox() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fancybox').fancybox({
      // openEffect  : 'elastic'
    });
  };
  _proto.position_category_filter = function position_category_filter() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-type-category').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banners[data-banner-location="top"]').length) {
          var position = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
          console.log(position);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_MultiCategory').css('top', position);
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-type-category').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banners[data-banner-location="top"]').length) {
            var position = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
            console.log(position);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_MultiCategory').css('top', position);
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_MultiCategory').css('top', 'auto');
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUM0QjtBQUNmO0FBQ29CO0FBQ0o7QUFDbEM7QUFBQSxJQUVHSyxRQUFRLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixRQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLFFBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3pCRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05ULG9FQUFlLENBQUMsSUFBSSxDQUFDVSxPQUFPLENBQUNDLElBQUksQ0FBQztJQUVsQyxJQUFJZCw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNlLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEakIsNkRBQUssQ0FBQ2tCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNGLGNBQWMsQ0FBQztJQUNyRDtJQUVBLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0Msd0JBQXdCLENBQUMsQ0FBQztFQUNuQyxDQUFDO0VBQUFiLE1BQUEsQ0FFRE0saUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCLElBQU1RLHdCQUF3QixHQUFHeEIsNkNBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNo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O1lBQ2xELElBQUk4RCxRQUFRLEdBQUc3RSw2Q0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUM4RSxXQUFXLENBQUMsQ0FBQyxHQUFDLENBQUM7WUFDeEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7WUFDckI3RSw2Q0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMyQyxHQUFHLENBQUMsS0FBSyxFQUFFa0MsUUFBUSxDQUFDO1VBQ3REO1FBQ0o7TUFDSixDQUFDLE1BQU07UUFDSDdFLDZDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQzJDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO01BQ3BEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUF0QyxRQUFBO0FBQUEsRUE3SWlDSCxnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCAnZmFuY3lib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93bW9yZV9wcm9kdWN0KCk7XG4gICAgICAgIHRoaXMuc2hvd21vcmVfaHRtbHRleHQoKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUltYWdlX2ZhbmN5Ym94KCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25fY2F0ZWdvcnlfZmlsdGVyKCk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgIC8vICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIC8vICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAvLyB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93bW9yZV9wcm9kdWN0KCkge1xuICAgICAgICB2YXIgY2hlY2tfbGluayA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgaWYgKGNoZWNrX2xpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbG9hZGRpbmcnKTtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0TGF5b3V0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0TGF5b3V0JykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3RMYXlvdXQnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLnJlbW92ZUNsYXNzKCdsb2FkZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpIDw9IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd21vcmVfaHRtbHRleHQoKSB7XG4gICAgICAgIHZhciBzaG93Q2hhciA9IDYwMCxcbiAgICAgICAgICAgIGVsbGlwc2VzdGV4dCA9IFwiLi4uXCIsXG4gICAgICAgICAgICBtb3JldGV4dCA9IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgICBsZXNzdGV4dCA9IFwiUmVhZCBsZXNzXCI7XG4gICAgICAgICQoJy5jdXN0b20taHRtbC1jYXRlZ29yeSAuY3VzdG9tLWh0bWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcbiAgICAgICAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID4gc2hvd0NoYXIpIHtcbiBcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcbiAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBjICsgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArIGVsbGlwc2VzdGV4dCsgJyZuYnNwOzwvc3Bhbj48c3BhbiBjbGFzcz1cIm1vcmVjb250ZW50XCI+PHNwYW4+JyArIGggKyAnPC9zcGFuPjwvc3Bhbj4nO1xuICAgICBcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWh0bWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKFwibGVzc1wiKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnRleHQnKS5odG1sKG1vcmV0ZXh0KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5yZW1vdmVDbGFzcygnc2hvd21vcmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcudGV4dCcpLmh0bWwobGVzc3RleHQpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLmFkZENsYXNzKCdzaG93bW9yZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeUltYWdlX2ZhbmN5Ym94KCkge1xuICAgICAgICAkKCcuZmFuY3lib3gnKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAvLyBvcGVuRWZmZWN0ICA6ICdlbGFzdGljJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbl9jYXRlZ29yeV9maWx0ZXIoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgICAgIGlmICgkKCcucGFnZS10eXBlLWNhdGVnb3J5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5iYW5uZXJzW2RhdGEtYmFubmVyLWxvY2F0aW9uPVwidG9wXCJdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQoJy5iYW5uZXJzW2RhdGEtYmFubmVyLWxvY2F0aW9uPVwidG9wXCJdJykub3V0ZXJIZWlnaHQoKS8yO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmNzcygndG9wJywgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcucGFnZS10eXBlLWNhdGVnb3J5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYmFubmVyc1tkYXRhLWJhbm5lci1sb2NhdGlvbj1cInRvcFwiXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCgnLmJhbm5lcnNbZGF0YS1iYW5uZXItbG9jYXRpb249XCJ0b3BcIl0nKS5vdXRlckhlaWdodCgpLzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykuY3NzKCd0b3AnLCAnYXV0bycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiJCIsImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbnRleHQiLCJ1cmxzIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInNob3dtb3JlX3Byb2R1Y3QiLCJzaG93bW9yZV9odG1sdGV4dCIsImNhdGVnb3J5SW1hZ2VfZmFuY3lib3giLCJwb3NpdGlvbl9jYXRlZ29yeV9maWx0ZXIiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImNoZWNrX2xpbmsiLCJuZXh0IiwiY3NzIiwiZG9jdW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsImxpbmsiLCJmaW5kIiwiYXR0ciIsImFkZENsYXNzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiTnVtYmVyIiwidGV4dCIsInNob3dDaGFyIiwiZWxsaXBzZXN0ZXh0IiwibW9yZXRleHQiLCJsZXNzdGV4dCIsImVhY2giLCJjIiwic3Vic3RyIiwiaCIsImhhc0NsYXNzIiwicGFyZW50IiwicHJldiIsImZhbmN5Ym94Iiwid2luZG93Iiwid2lkdGgiLCJwb3NpdGlvbiIsIm91dGVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInJlc2l6ZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9