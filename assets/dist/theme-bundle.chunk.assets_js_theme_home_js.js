"use strict";
(self["webpackChunkbigcommerce_caros"] = self["webpackChunkbigcommerce_caros"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }
  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)('You must select at least two products to compare');
      return false;
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pace */ "./node_modules/pace-js/pace.min.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context.urls);
    this.removeSlick();
    this.fillter();
    this.tabCarousel();
    this.product_new_tab();
    this.productsShowMore();
    this.customArrowButton();
    this.initAjaxProductsID();
    this.initAjaxProductsByCategory();
    this.initAjaxProductsByCategoryGrid();
    this.initAjaxProductsByCategoryIdTabs();
    this.initAjaxProductsByCategorySortingTabs();
    this.initPopupVideo();
  }

  // ========================================================================
  // Custom arrow button (slick)
  // ========================================================================
  ;
  _proto.customArrowButton = function customArrowButton() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-arrow-prev').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickPrev");
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-arrow-next').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickNext");
    });
  }

  // ========================================================================
  // Ajax load products in a category tabs
  // ========================================================================
  ;
  _proto.initAjaxProductsByCategory = function initAjaxProductsByCategory() {
    var _this = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-result',
      urlKey = 'themevale-products-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-themevale-products-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this.request(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request = function request($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      $placeholder.find('.productCarousel-slide').each(function () {
        var product_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.card-sale').attr('data-product-id');
        (0,_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_4__["default"])(product_id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1025) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }, {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 551,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }]
        });
      }
    });
  };
  _proto.initAjaxProductsByCategorySortingTabs = function initAjaxProductsByCategorySortingTabs() {
    var _this2 = this;
    var urlKey = 'themevale-products-by-category-sorting-tabs',
      template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.is-active[data-themevale-products-by-category-sorting-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsCategorySortTabs [data-tab]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request2 = function request2($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryIdTabs = function initAjaxProductsByCategoryIdTabs() {
    var _this3 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-tabs-result',
      urlKey = 'themevale-products-by-category-id-tabs';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.is-active [data-themevale-products-by-category-id-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-themevale-products-by-category-id-tabs]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request3 = function request3($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryGrid = function initAjaxProductsByCategoryGrid() {
    var _this4 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-grid-result',
      urlKey = 'themevale-products-grid-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsByCategoryId-grid [data-themevale-products-grid-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_2___default().ignore(function () {
        _this4.request4(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request4 = function request4($placeholder, tmpl, urlKey) {
    var _this5 = this;
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      _this5.productsShowMore();
    });
  };
  _proto.tabCarousel = function tabCarousel() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productCarousel[data-slick]').slick('setPosition');
    });
  }

  // ========================================================================
  // Ajax load products ID in a category banner
  // ========================================================================
  ;
  _proto.initAjaxProductsID = function initAjaxProductsID() {
    var $options = {
      config: {
        products: {
          "new": {
            limit: 20
          }
        }
      },
      template: 'themevale/homepage/component/ajax-product-id'
    };
    var $thisProd = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-popup');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-product-item .position-point').on('click', function () {
      $thisProd.empty();
      var $prodId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('product-id');
      var position = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().position();
      var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-banner > .container').offset();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $thisProd.html(response);
      });
      $thisProd.toggleClass("show");
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        $thisProd.css({
          'top': position.top,
          'left': position.left + container.left - $thisProd.width()
        });
      } else {
        $thisProd.css({
          'top': position.top + 15,
          'left': 30
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.close-product', function () {
      if ($thisProd.hasClass("show")) {
        $thisProd.removeClass("show");
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (event) {
      if ($thisProd.hasClass("show")) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest($thisProd).length === 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.position-point').length === 0) {
          $thisProd.removeClass("show");
        }
      }
    });
  }

  // ========================================================================
  // Products Show More
  // ========================================================================
  ;
  _proto.productsShowMore = function productsShowMore(context) {
    var productsToShow = Number(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-number-product]').attr('data-number-product'));
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"]').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 551) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').css({
            'display': 'inline-block'
          });
          for (var i = productsToShow + 1, len = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product:nth-child(' + i + ')').css({
              'display': 'none'
            });
          }
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      } else {
        productsToShow = 4;
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').css({
            'display': 'inline-block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({
            'display': 'none'
          });
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_showMoreProduct a').on('click', function (e) {
        e.preventDefault();
        var listProducts = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('[data-event="show more"]');
        listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
        if (listProducts.find('.productGrid .product:hidden').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().css({
            'display': 'none'
          });
        }
      });
    }
  }

  // ========================================================================
  // Category fillter
  // ========================================================================
  ;
  _proto.fillter = function fillter() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').length) {
      var position = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .heroCarousel-content').position();
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
      }
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_MultiCategory.layout-2').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1024) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
        }
      } else {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .category_filter').appendTo('.themevale_section-flash-sale .container > .items:first-child');
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').length) {
        var position = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .heroCarousel-content').position();
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_MultiCategory.layout-2').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1024) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
          }
        } else {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale .category_filter').length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_heroCarousel .category_filter').prependTo('.themevale_section-flash-sale .container > .items:nth-child(2)');
          }
        }
      }
    });
  }

  // ========================================================================
  // Remove slick slider (mobile)
  // ========================================================================
  ;
  _proto.removeSlick = function removeSlick() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1025) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom').length) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').slick({
            dots: true,
            arrows: false,
            infinite: false,
            mobileFirst: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }, {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 551,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
          });
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1025) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').slick({
              dots: true,
              arrows: false,
              infinite: false,
              mobileFirst: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              responsive: [{
                breakpoint: 1100,
                settings: "unslick"
              }, {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }, {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }, {
                breakpoint: 551,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }]
            });
          }
        }
      } else {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandSlider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_featuredCategory-wrapper').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.recent_postCarousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.brandsImage-slider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_category-carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_video_carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_section-flash-sale.custom .productGrid').slick('unslick');
          }
        }
      }
    });
  };
  _proto.product_new_tab = function product_new_tab() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#themevale_new_product').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsCategorySortNew .tabs-contents .tab-content').each(function (index) {
        if (index == 0) {
          var thisItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('#themevale_new_product'),
            cat_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id').replace('tab-', ''),
            url = thisItem.find('[cat-id="' + cat_id + '"]').attr('cat-url'),
            sort_new = '?sort=newest';
          url += sort_new;
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', thisItem).slick();
          });
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsCategorySortNew .tab-title').on('click', function (event) {
        event.preventDefault();
        var thisItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('#themevale_new_product'),
          cat_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().attr('cat-id'),
          url = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().attr('cat-url'),
          sort_new = '?sort=newest';
        url += sort_new;
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#themevale_new_product #tab-' + cat_id).find('.themevale_productLoading').length) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', '#themevale_new_product #tab-' + cat_id).slick();
          });
        }
      });
    }
  };
  _proto.initPopupVideo = function initPopupVideo() {
    var _this6 = this;
    if (this.context.themeSettings['themevale_category-banner-video-url'] != "") {
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['themevale_category-banner-video-url'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_1'] != "") {
      var _modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video-1')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video-1"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['homepage_video_url_1'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_2'] != "") {
      var _modal2 = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video-2')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video-2"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['homepage_video_url_2'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal2.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_3'] != "") {
      var _modal3 = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video-3')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video-3"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['homepage_video_url_3'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal3.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_4'] != "") {
      var _modal4 = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video-4')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video-4"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['homepage_video_url_4'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal4.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_5'] != "") {
      var _modal5 = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#popup-video-5')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-reveal-id="popup-video-5"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings['homepage_video_url_5'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal5.updateContent($content);
      });
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUV6QyxTQUFTQyxnQkFBZ0JBLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWkYsT0FBTyxDQUFDSSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDNUI7QUFDSjtBQUVBLFNBQVNHLGdCQUFnQkEsQ0FBQ0wsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDckNELE9BQU8sQ0FBQ00sSUFBSSxDQUFDTCxJQUFJLENBQUM7QUFDdEI7QUFFQSxTQUFTTSxnQkFBZ0JBLENBQUNQLE9BQU8sRUFBRVEsS0FBSyxFQUFFQyxVQUFVLEVBQUU7RUFDbEQsSUFBSVQsT0FBTyxDQUFDVSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEJILEtBQUssQ0FBQ0ksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMxQjtJQUNBSixLQUFLLENBQUNLLElBQUksQ0FBQyxNQUFNLEVBQUtKLFVBQVUsQ0FBQ0ssT0FBTyxTQUFJZCxPQUFPLENBQUNlLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUNoRVAsS0FBSyxDQUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDakIsT0FBTyxDQUFDVSxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0hGLEtBQUssQ0FBQ1UsV0FBVyxDQUFDLE1BQU0sQ0FBQztFQUM3QjtBQUNKO0FBRUEsNkJBQWUsb0NBQVVULFVBQVUsRUFBRTtFQUNqQyxJQUFJVSxRQUFRO0VBRVosSUFBTUMsUUFBUSxHQUFHQyxDQUFD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YWwvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jYXJvcy8uL2Fzc2V0cy9qcy90aGVtZS9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgcHJvZHVjdHM7XG5cbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IFBhY2UgZnJvbSAncGFjZSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93bic7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVtb3ZlU2xpY2soKTtcclxuICAgICAgICB0aGlzLmZpbGx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRhYkNhcm91c2VsKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0X25ld190YWIoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzU2hvd01vcmUoKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUFycm93QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzSUQoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUdyaWQoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UG9wdXBWaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ3VzdG9tIGFycm93IGJ1dHRvbiAoc2xpY2spXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGN1c3RvbUFycm93QnV0dG9uKCkge1xyXG4gICAgICAgICQoJy5idG4tYXJyb3ctcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQodGhpcykucGFyZW50cygnLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5idG4tYXJyb3ctbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQodGhpcykucGFyZW50cygnLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKFwic2xpY2tOZXh0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBamF4IGxvYWQgcHJvZHVjdHMgaW4gYSBjYXRlZ29yeSB0YWJzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSgpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXJlc3VsdCcsIFxyXG4gICAgICAgICAgICB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkJztcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdCgkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdCgkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQodGhpcykuZmluZCgnLmNhcmQtc2FsZScpLmF0dHIoJ2RhdGEtcHJvZHVjdC1pZCcpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRkb3duKHByb2R1Y3RfaWQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHBsYWNlaG9sZGVyKS5zbGljaygpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzKCkge1xyXG4gICAgICAgIHZhciB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFicycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnMtcmVzdWx0JztcclxuXHJcbiAgICAgICAgLy8gQWpheCByZXF1ZXN0IGxvYWRpbmcgcHJvZHVjdHMgaW4gdGhlIGFjdGl2ZSB0YWJcclxuICAgICAgICAkKCcuaXMtYWN0aXZlW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFic10nKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QyKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXRlZ29yeVNvcnRUYWJzIFtkYXRhLXRhYl0nKS5vbigndG9nZ2xlZCcsIChldmVudCwgdGFiKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDIoJCgkKCdhJywgdGFiKS5hdHRyKCdocmVmJykpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0MigkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzLXJlc3VsdCcsIFxyXG4gICAgICAgICAgICB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnMnO1xyXG5cclxuICAgICAgICAvLyBBamF4IHJlcXVlc3QgbG9hZGluZyBwcm9kdWN0cyBpbiB0aGUgYWN0aXZlIHRhYlxyXG4gICAgICAgICQoJy5pcy1hY3RpdmUgW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdJykuZWFjaCgoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QzKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScpLm9uKCd0b2dnbGVkJywgKGV2ZW50LCB0YWIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0MygkKCdbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic10nLCAkKCdhJywgdGFiKS5hdHRyKCdocmVmJykpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0MygkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlHcmlkKCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtZ3JpZC1yZXN1bHQnLCBcclxuICAgICAgICAgICAgdXJsS2V5ID0gJ3RoZW1ldmFsZS1wcm9kdWN0cy1ncmlkLWJ5LWNhdGVnb3J5LWlkJztcclxuXHJcbiAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0J5Q2F0ZWdvcnlJZC1ncmlkIFtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ncmlkLWJ5LWNhdGVnb3J5LWlkXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDQoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcXVlc3Q0KCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKSkgeyB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpOyB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCAnJyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNTaG93TW9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYkNhcm91c2VsKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScpLm9uKCd0b2dnbGVkJywgZnVuY3Rpb24gKGV2ZW50LCB0YWIpIHtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbFtkYXRhLXNsaWNrXScpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQWpheCBsb2FkIHByb2R1Y3RzIElEIGluIGEgY2F0ZWdvcnkgYmFubmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGluaXRBamF4UHJvZHVjdHNJRCgpIHtcclxuICAgICAgICBjb25zdCAkb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3QtaWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCAkdGhpc1Byb2QgPSAkKCcjcHJvZHVjdC1wb3B1cCcpO1xyXG4gICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktcHJvZHVjdC1pdGVtIC5wb3NpdGlvbi1wb2ludCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkdGhpc1Byb2QuZW1wdHkoKTtcclxuICAgICAgICAgICAgdmFyICRwcm9kSWQgPSAkKHRoaXMpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh0aGlzKS5wYXJlbnQoKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1iYW5uZXIgPiAuY29udGFpbmVyJykub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHRoaXNQcm9kLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0ICsgY29udGFpbmVyLmxlZnQgLSAkdGhpc1Byb2Qud2lkdGgoKX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCArIDE1LCAnbGVmdCc6IDMwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCR0aGlzUHJvZC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzUHJvZC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkdGhpc1Byb2QuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCR0aGlzUHJvZCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wb3NpdGlvbi1wb2ludCcpLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc1Byb2QucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBQcm9kdWN0cyBTaG93IE1vcmVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHJvZHVjdHNTaG93TW9yZShjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RzVG9TaG93ID0gTnVtYmVyKCQoJ1tkYXRhLW51bWJlci1wcm9kdWN0XScpLmF0dHIoJ2RhdGEtbnVtYmVyLXByb2R1Y3QnKSk7XHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+IHByb2R1Y3RzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHsgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSBwcm9kdWN0c1RvU2hvdyArIDEsIGxlbiA9ICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aDsgaSA8PSBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKCcraSsnKScpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdFwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYmlnXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5TaG93IE1vcmU8L2E+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNUb1Nob3cgPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+IHByb2R1Y3RzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHsgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKG4gKyA3KScpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0XCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1iaWdcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlNob3cgTW9yZTwvYT48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdFByb2R1Y3RzID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpO1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3RzLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdDpoaWRkZW46bHQoJyArIHByb2R1Y3RzVG9TaG93ICsgJyknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdFByb2R1Y3RzLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDYXRlZ29yeSBmaWxsdGVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZpbGx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQnKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIHBvc2l0aW9uLnRvcCArICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC5oZXJvQ2Fyb3VzZWwtY29udGVudCcpLm91dGVySGVpZ2h0KCkgLSA1MCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5LmxheW91dC0yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlIC5jYXRlZ29yeV9maWx0ZXInKS5hcHBlbmRUbygnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC5jYXRlZ29yeV9maWx0ZXInKS5hcHBlbmRUbygnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNvbnRhaW5lciA+IC5pdGVtczpmaXJzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQnKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmNzcygndG9wJywgcG9zaXRpb24udG9wICsgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLmhlcm9DYXJvdXNlbC1jb250ZW50Jykub3V0ZXJIZWlnaHQoKSAtIDUwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykuY3NzKCd0b3AnLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeS5sYXlvdXQtMicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZSAuY2F0ZWdvcnlfZmlsdGVyJykuYXBwZW5kVG8oJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlIC5jYXRlZ29yeV9maWx0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLmNhdGVnb3J5X2ZpbHRlcicpLnByZXBlbmRUbygnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNvbnRhaW5lciA+IC5pdGVtczpudGgtY2hpbGQoMiknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUmVtb3ZlIHNsaWNrIHNsaWRlciAobW9iaWxlKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW1vdmVTbGljaygpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRTbGlkZXInKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kU2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmJyYW5kU2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZFNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdF9uZXdfdGFiKCkge1xyXG4gICAgICAgIGlmKCQoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiggaW5kZXggPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ3RhYi0nLCcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpc0l0ZW0uZmluZCgnW2NhdC1pZD1cIicrY2F0X2lkKydcIl0nKS5hdHRyKCdjYXQtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IHNvcnRfbmV3O1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLW5ldy1yZXN1bHQnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZCgnI3RhYi0nK2NhdF9pZCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsIHRoaXNJdGVtKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFiLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2NhdC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICQodGhpcykucGFyZW50KCkuYXR0cignY2F0LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gc29ydF9uZXc7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0ICN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGU6ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKCcjdGFiLScrY2F0X2lkKS5maW5kKCcudGhlbWV2YWxlX3Byb2R1Y3RMb2FkaW5nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAnI3RoZW1ldmFsZV9uZXdfcHJvZHVjdCAjdGFiLScrY2F0X2lkKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBvcHVwVmlkZW8oKSB7XHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlbycpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW9cIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMSddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby0xJylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0xXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzEnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzInXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tMicpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tMlwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8yJ10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8zJ10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3BvcHVwLXZpZGVvLTMnKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTNcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMyddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfNCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby00JylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby00XCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzQnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzUnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tNScpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tNVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF81J10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG4iXSwibmFtZXMiOlsic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJsZW5ndGgiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkIiwiJGNvbXBhcmVMaW5rIiwiX21hcCIsImVsZW1lbnQiLCJ2YWx1ZSIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwicHJldmVudERlZmF1bHQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsIlBhZ2VNYW5hZ2VyIiwiUGFjZSIsInV0aWxzIiwiQ291bnRkb3duIiwiY29tcGFyZVByb2R1Y3RzIiwibW9kYWxGYWN0b3J5IiwiSG9tZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiY29udGV4dCIsInVybHMiLCJyZW1vdmVTbGljayIsImZpbGx0ZXIiLCJ0YWJDYXJvdXNlbCIsInByb2R1Y3RfbmV3X3RhYiIsInByb2R1Y3RzU2hvd01vcmUiLCJjdXN0b21BcnJvd0J1dHRvbiIsImluaXRBamF4UHJvZHVjdHNJRCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5IiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlHcmlkIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzIiwiaW5pdFBvcHVwVmlkZW8iLCJlIiwid3JhcHBlciIsInBhcmVudHMiLCJzbGljayIsIl90aGlzIiwidGVtcGxhdGUiLCJ1cmxLZXkiLCJlYWNoIiwiaSIsInBsYWNlaG9sZGVyIiwiaWdub3JlIiwicmVxdWVzdCIsIiRwbGFjZWhvbGRlciIsInRtcGwiLCJkYXRhIiwidXJsIiwicmVwbGFjZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJyZXNwIiwicHJvZHVjdF9pZCIsIndpbmRvdyIsIndpZHRoIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwibW9iaWxlRmlyc3QiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJfdGhpczIiLCJyZXF1ZXN0MiIsInRhYiIsIl90aGlzMyIsInJlcXVlc3QzIiwiX3RoaXM0IiwicmVxdWVzdDQiLCJfdGhpczUiLCIkb3B0aW9ucyIsImNvbmZpZyIsImxpbWl0IiwiJHRoaXNQcm9kIiwiZW1wdHkiLCIkcHJvZElkIiwicG9zaXRpb24iLCJwYXJlbnQiLCJjb250YWluZXIiLCJvZmZzZXQiLCJnZXRCeUlkIiwicmVzcG9uc2UiLCJ0b2dnbGVDbGFzcyIsImNzcyIsInRvcCIsImxlZnQiLCJkb2N1bWVudCIsImhhc0NsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsInByb2R1Y3RzVG9TaG93IiwiTnVtYmVyIiwibGVuIiwiYXBwZW5kIiwibGlzdFByb2R1Y3RzIiwic2hvdyIsIm91dGVySGVpZ2h0IiwiYXBwZW5kVG8iLCJyZXNpemUiLCJwcmVwZW5kVG8iLCJ0aGlzSXRlbSIsImNhdF9pZCIsInNvcnRfbmV3IiwicmVtb3ZlIiwiX3RoaXM2IiwidGhlbWVTZXR0aW5ncyIsIm1vZGFsIiwiJGNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=