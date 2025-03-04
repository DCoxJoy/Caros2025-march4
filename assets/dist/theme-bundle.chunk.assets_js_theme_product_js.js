(self["webpackChunkbigcommerce_caros"] = self["webpackChunkbigcommerce_caros"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   classifyForm: () => (/* binding */ classifyForm),
/* harmony export */   insertStateHiddenField: () => (/* binding */ insertStateHiddenField)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};


/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_stickyAddToCart */ "./assets/js/theme/themevale/themevale_stickyAddToCart.js");
/* harmony import */ var _themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_fbt */ "./assets/js/theme/themevale/themevale_fbt.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */










var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context.urls);

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();

    // countdown time
    var product_id = $('[data-cart-item-add] [name="product_id"]').val();
    (0,_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_6__["default"])(product_id);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var $reviewForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    (0,_themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    if ($('.description-slider').length) {
      this.descriptionSlider();
      $('[data-collapsible]').on('click', function (event) {
        $('.description-slider').slick('setPosition');
      });
    }
    if ($('.description-slider-2').length) {
      this.descriptionSlider2();
      $('[data-collapsible]').on('click', function (event) {
        $('.description-slider-2').slick('setPosition');
      });
    }
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.descriptionSlider = function descriptionSlider() {
    $('.description-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      mobileFirst: true,
      responsive: [{
        breakpoint: 551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }]
    });
  };
  _proto.descriptionSlider2 = function descriptionSlider2() {
    $('.description-slider-2').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      mobileFirst: true,
      responsive: [{
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
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.$collapsible2 = $('.productView-reviewTabLink');
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    var $content2 = $('#product-reviews');
    $('.review-link a').on('click', function (e) {
      e.preventDefault();
      $('.is-open[data-collapsible]', $('.tabs-vertical')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      if ($('.themevale_productDescription-3').length) {
        $('.is-open[data-collapsible]', $('.themevale_productDescription-3')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
        if ($(window).width() > 1024) {
          $('html, body').animate({
            scrollTop: $('#tab-review').offset().top - $('.header').height()
          }, 700);
        } else {
          $('html, body').animate({
            scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
          }, 700);
        }
      } else {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
        }, 700);
      }
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
      if ($('.themevale_productDescription-3').length) {
        if (!$content2.hasClass('is-active')) {
          _this.$collapsible2.trigger('click');
        }
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    // this.$collapsible2.trigger(CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_fbt.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_fbt.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var relate_tab = "#product-related";
  var previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__["default"])('#previewModal')[0];

  // check custom field fbt
  showFBT();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.themvale-fbt-toggle-options', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().is(':visible') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().slideDown();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().slideUp();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.themvale-fbt-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('form').find('.themvale-fbt-detail-options').slideUp();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '#themvale-fbt-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
        text: 'Please make sure all options have been filled in.',
        type: 'warning'
      });
    }
    event.preventDefault();
  });
  function showFBT() {
    // related product
    var options = {
      template: {
        item: 'themevale/fbt-item',
        options: 'themevale/fbt-options'
      }
    };
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-name.fbt').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').length) showList(list);
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-name.fbt-product').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').each(function (i) {
        list.push({
          i: i,
          data: ""
        });
        if (!isNaN(Number(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text()))) {
          var productId = Number(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text());
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        } else {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text(), options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt').remove();
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt .themvale-fbt-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt .themvale-fbt-product-list .themvale-fbt-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt').show();
    productOptions();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt .themvale-fbt-product-wrapper').append('<div class="themvale-fbt-total fbt__total">\
          <p class="themevale-text-price"><span>Total:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
          <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
        </div>');
    slick_slider();
    totalPrice();
  }
  function slick_slider() {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product-layout-3').length) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }]
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        // window.location = '/cart.php';
        if (previewModal) {
          previewModal.open();
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt .loadingOverlay').hide();
          updateCartContent(previewModal, response.data.cart_item.id);
        } else {
          // if no modal, redirect to the cart page
          window.location = '/cart.php';
        }
        return;
      }
      addToCart(form, i, arrP);
      // return response.data.cart_item.product_id;
    });
  }
  function updateCartContent(modal, cartItemId, onComplete) {
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);

      // Update cart counter
      var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-cart-quantity]', modal.$content);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0;
    var pos = 0;
    var symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item.isChecked').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').length) var currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').text();else var currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withoutTax').text();
      var price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      var s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) symbol = s;
      if (currency.indexOf(symbol) != -1) pos = currency.indexOf(symbol);
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) total = symbol + total;else total = total + symbol;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt-totalPrice').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()(document));

    // var arrPro = new Array();
    // for (var i = 0, len = $form.length; i < len; i++) {
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
    });
    // }

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.close-options', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parent().slideUp();
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $form).val();
    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_2___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.image.getSrc(data.image.data, context.themeSettings.product_size);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('src')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr('data-src');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': _mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('src')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_stickyAddToCart.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_stickyAddToCart.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top + 100) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", 40);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 40);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + 30);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 15);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 0);
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
  });
  window.onload = function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top - 160) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QjtBQUNXO0FBRW5DLElBQU1FLGFBQWEsR0FBRyxDQUNsQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsQ0FDYjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxhQUFhQSxDQUFDQyxLQUFLLEVBQUVDLGNBQWMsRUFBRTtFQUMxQyxJQUFNQyxNQUFNLEdBQUdDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDO0VBQ3ZCLElBQU1JLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxNQUFNLE9BQUtKLGNBQWdCLENBQUM7RUFDdEQsSUFBTUssT0FBTyxHQUFHSixNQUFNLENBQUNLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFFcEQsSUFBSUMsU0FBUyxHQUFNUixjQUFjLFVBQUtLLE9BQVM7RUFDL0MsSUFBSUksaUJBQWlCOztFQUVyQjtFQUNBLElBQUlKLE9BQU8sS0FBSyxPQUFPLEVBQUU7SUFDckIsSUFBTUssU0FBUyxHQUFHVCxNQUFNLENBQUNLLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFckMsSUFBSUssc0RBQUEsQ0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUVELFNBQVMsQ0FBQyxFQUFFO01BQ3hEO01BQ0FGLFNBQVMsR0FBTVIsY0FBYyxVQUFLWSx1REFBQSxDQUFZRixTQUFTLENBQUc7SUFDOUQsQ0FBQyxNQUFNO01BQ0g7TUFDQUQsaUJBQWlCLFFBQU1ELFNBQVMsR0FBR0ssd0RBQUEsQ0FBYUgsU0FBUyxDQUFHO0lBQ2hFO0VBQ0o7O0VBRUE7RUFDQSxPQUFPUCxVQUFVLENBQ1pXLFFBQVEsQ0FBQ04sU0FBUyxDQUFDLENBQ25CTSxRQUFRLENBQUNMLGlCQUFpQixDQUFDO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtB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azovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mb3JtLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY2Fyb3MvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY2Fyb3MvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jYXJvcy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY2Fyb3MvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfZmJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfc3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNhcm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93bic7XG5pbXBvcnQgc3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9zdGlja3lBZGRUb0NhcnQnO1xuaW1wb3J0IEZCVCBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfZmJ0JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBjb3VudGRvd24gdGltZVxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpO1xuICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICBzdGlja3lBZGRUb0NhcnQoKTtcbiAgICAgICAgRkJUKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25TbGlkZXIoKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoJy5kZXNjcmlwdGlvbi1zbGlkZXItMicpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNsaWRlcjIoKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXItMicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc2NyaXB0aW9uU2xpZGVyKCkge1xuICAgICAgICAkKCcuZGVzY3JpcHRpb24tc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRpb25TbGlkZXIyKCkge1xuICAgICAgICAkKCcuZGVzY3JpcHRpb24tc2xpZGVyLTInKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlMiA9ICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJyk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICBjb25zdCAkY29udGVudDIgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgICQoJy5yZXZpZXctbGluayBhJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy5pcy1vcGVuW2RhdGEtY29sbGFwc2libGVdJywgJCgnLnRhYnMtdmVydGljYWwnKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG5cbiAgICAgICAgICAgIGlmKCQoJy50aGVtZXZhbGVfcHJvZHVjdERlc2NyaXB0aW9uLTMnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuaXMtb3BlbltkYXRhLWNvbGxhcHNpYmxlXScsICQoJy50aGVtZXZhbGVfcHJvZHVjdERlc2NyaXB0aW9uLTMnKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyN0YWItcmV2aWV3Jykub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJHJldmlld3NDb250ZW50Lm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghJGNvbnRlbnQyLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZTIudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICAvLyB0aGlzLiRjb2xsYXBzaWJsZTIudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZWxhdGVfdGFiID0gXCIjcHJvZHVjdC1yZWxhdGVkXCI7XHJcbiAgICBjb25zdCBwcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcclxuXHJcbiAgICAvLyBjaGVjayBjdXN0b20gZmllbGQgZmJ0XHJcbiAgICBzaG93RkJUKCk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtdmFsZS1mYnQtdG9nZ2xlLW9wdGlvbnMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkuaXMoJzp2aXNpYmxlJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRoZW12YWxlLWZidC1kZXRhaWwtY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykucmVwbGFjZSgnZmJ0X3Byb2R1Y3QnLCAnJyk7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmluZCgnLnRoZW12YWxlLWZidC1kZXRhaWwtb3B0aW9ucycpLnNsaWRlVXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3RoZW12YWxlLWZidC1hZGRBbGwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoJyN0aGVtdmFsZS1mYnQnKSk7XHJcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICQoJy50aGVtdmFsZS1mYnQtZGV0YWlsLWNoZWNrYm94JykuZWFjaChmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICAgICAgaWYgKCQodmFsKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyUHJvLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCRmb3JtLCAwLCBhcnJQcm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGQlQoKSB7XHJcbiAgICAgICAgLy8gcmVsYXRlZCBwcm9kdWN0XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogJ3RoZW1ldmFsZS9mYnQtaXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJ3RoZW1ldmFsZS9mYnQtb3B0aW9ucycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LWluZm8tbmFtZS5mYnQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHtpOmksIGRhdGE6IFwiXCJ9ICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pID09IGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKCcucHJvZHVjdFZpZXctaW5mby1uYW1lLmZidC1wcm9kdWN0JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1pbmZvLXZhbHVlLmZidC1wcm9kdWN0JykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHtpOmksIGRhdGE6IFwiXCJ9ICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcigkKHRoaXMpLnRleHQoKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IE51bWJlcigkKHRoaXMpLnRleHQoKSlcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICQoJy5wcm9kdWN0Vmlldy1pbmZvLXZhbHVlLmZidC1wcm9kdWN0JykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCQodGhpcykudGV4dCgpLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KXtcclxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlbGVtZW50LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QnKS5hcHBlbmQocmVzcG9uc2UuaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyN0aGVtdmFsZS1mYnQgLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QgLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHBJZCArICdcIl0gZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm0uYXBwZW5kKHJlc3BvbnNlLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyN0aGVtdmFsZS1mYnQnKS5zaG93KCk7XHJcbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0IC50aGVtdmFsZS1mYnQtcHJvZHVjdC13cmFwcGVyJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGhlbXZhbGUtZmJ0LXRvdGFsIGZidF9fdG90YWxcIj5cXFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aGVtZXZhbGUtdGV4dC1wcmljZVwiPjxzcGFuPlRvdGFsOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0aGVtdmFsZS1mYnQtdG90YWwtcHJpY2VcIiBpZD1cInRoZW12YWxlLWZidC10b3RhbFByaWNlXCI+PC9zcGFuPjwvcD5cXFxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IHRoZW12YWxlLWZidC10b3RhbC1idXR0b25cIiBpZD1cInRoZW12YWxlLWZidC1hZGRBbGxcIiBocmVmPVwiI1wiPkFkZCBhbGwgdG8gQ2FydDwvYT5cXFxyXG4gICAgICAgIDwvZGl2PicpO1xyXG4gICAgICAgIHNsaWNrX3NsaWRlcigpO1xyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzbGlja19zbGlkZXIoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0LWxheW91dC0zJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stbmV4dCc+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyc+PHVzZSB4bGluazpocmVmPScjaWNvbi1zbGljay1wcmV2Jz48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93Jz48dXNlIHhsaW5rOmhyZWY9JyNpY29uLXNsaWNrLW5leHQnPjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stcHJldic+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyclByby5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXTtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJChmb3JtW2tdKTtcclxuICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0JlZm9yZUFkZCgkYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGF0dCA9IFwiXCI7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0ID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApIHtcclxuXHJcbiAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBrID0gYXJyUFtpXTtcclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1ba10pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcclxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2FydC5waHAnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdNb2RhbC5vcGVuKCk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnRDb250ZW50KHByZXZpZXdNb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2FydC5waHAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChmb3JtLCBpLCBhcnJQKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXHJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcclxuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG90YWxQcmljZSgpIHtcclxuICAgICAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHZhciBzeW1ib2wgPSBcIiRcIjtcclxuICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeSA9ICQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhUYXgnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeSA9ICQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIHZhciBwcmljZSA9IHBhcnNlRmxvYXQoY3VycmVuY3kucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKTtcclxuICAgICAgICAgICAgdmFyIHMgPSBjdXJyZW5jeS5yZXBsYWNlKHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQocy5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpKSlcclxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHM7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCkgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWwpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT0gMClcclxuICAgICAgICAgICAgdG90YWwgPSBzeW1ib2wgKyB0b3RhbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XHJcbiAgICAgICAgJCgnI3RoZW12YWxlLWZidC10b3RhbFByaWNlJykuaHRtbCh0b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdG90YWxQcmljZSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoZG9jdW1lbnQpKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwLCBsZW4gPSAkZm9ybS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJHByb2R1Y3RPcHRpb25zRWxlbWVudCwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLW9wdGlvbnMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cignaWQnKSA9PT0gJ2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxyXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XHJcblxyXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2UuZ2V0U3JjKFxyXG4gICAgICAgICAgICAgICAgZGF0YS5pbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc2l6ZSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzogbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3JjJzogJCh0aGlzKS5hdHRyKCdzcmMnKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9ICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmMnKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmMnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmMnOiAkKHRoaXMpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldygkc2NvcGUsIGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJHNjb3BlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRzY29wZSkuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcclxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXHJcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgKyAxMDApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsIDQwKTtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgNDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDE1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmNob29zZV9vcHRpb25zX2FkZCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcucG9wLXVwLW9wdGlvbiAuY2xvc2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgLSAxNjApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiJdLCJuYW1lcyI6WyJub2QiLCJmb3JtcyIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2luY2x1ZGVzIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJGZvcm1GaWVsZENsYSIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5Iiwic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImF0dHIiLCJjb21wYXJlIiwiaHRtbCIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJfbWFwIiwiZWxlbWVudCIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwicHJldmVudERlZmF1bHQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJDb3VudGRvd24iLCJzdGlja3lBZGRUb0NhcnQiLCJGQlQiLCJjb21wYXJlUHJvZHVjdHMiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwidXJscyIsImRvY3VtZW50IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJwcm9kdWN0X2lkIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJkZXNjcmlwdGlvblNsaWRlciIsInNsaWNrIiwiZGVzY3JpcHRpb25TbGlkZXIyIiwidHJpZ2dlciIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZGVmYXVsdCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCIkY29sbGFwc2libGUyIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsIiRjb250ZW50MiIsImUiLCJjbGljayIsIndpZHRoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsIiR0YXJnZXQiLCJpZCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiLCJ1dGlscyIsInN3YWwiLCJtb2RhbEZhY3RvcnkiLCJyZWxhdGVfdGFiIiwicHJldmlld01vZGFsIiwic2hvd0ZCVCIsIm5leHQiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwicmVwbGFjZSIsInBhcmVudHMiLCJ0b3RhbFByaWNlIiwiYXJyUHJvIiwiQXJyYXkiLCJpIiwiY2hlY2siLCJjaGVja1Byb2R1Y3QiLCJzaG93IiwiYWRkVG9DYXJ0IiwidGV4dCIsInRlbXBsYXRlIiwibnVtIiwibGlzdCIsInBJZCIsInVuZGVmaW5lZCIsImFwaSIsImdldEJ5SWQiLCJlcnIiLCJyZXNwb25zZSIsInNob3dMaXN0IiwiaXNOYU4iLCJOdW1iZXIiLCJwcm9kdWN0SWQiLCJnZXRQYWdlIiwicmVtb3ZlIiwiYXBwZW5kIiwidHJpbSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJwcm9kdWN0T3B0aW9ucyIsInNsaWNrX3NsaWRlciIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImxlbiIsImsiLCJjaGVja0JlZm9yZUFkZCIsIiRhdHRyaWJ1dGVzIiwiZm9jdXMiLCJhdHQiLCJhcnJQIiwiRm9ybURhdGEiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhbGVydCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwib3BlbiIsImhpZGUiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsIm1vZGFsIiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJnZXRDYXJ0Q29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCIkYm9keSIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJxdWFudGl0eSIsInBhcmFtcyIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwiZ2V0Q29udGVudCIsInRvdGFsIiwicG9zIiwic3ltYm9sIiwiY3VycmVuY3kiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJzIiwidG9GaXhlZCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsIiRjaGFuZ2VkT3B0aW9uIiwidGFyZ2V0IiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIiRzY29wZSIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiY2xvc2VzdCIsIl9pc1BsYWluT2JqZWN0IiwiaW1hZ2UiLCJtYWluSW1hZ2VVcmwiLCJ0b29scyIsImdldFNyYyIsInRoZW1lU2V0dGluZ3MiLCJwcm9kdWN0X3NpemUiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJfaXNPYmplY3QiLCJ1cGRhdGVQcmljZVZpZXciLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRjb250YWluZXIiLCIkc2t1IiwiJHVwYyIsIiR0ZXh0IiwiJGJ1bGtQcmljaW5nIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ3aXRoX3RheCIsImZvcm1hdHRlZCIsIndpdGhvdXRfdGF4IiwicnJwX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4IiwiZm9ybURhdGEiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJrZXkiLCJGaWxlIiwic2l6ZSIsImNvbnNvbGUiLCJzY3JvbGwiLCJjc3MiLCJvdXRlckhlaWdodCIsInRvZ2dsZUNsYXNzIiwib25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==