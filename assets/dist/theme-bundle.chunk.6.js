(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









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
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
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
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



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
/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
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
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_stickyAddToCart */ "./assets/js/theme/themevale/themevale_stickyAddToCart.js");
/* harmony import */ var _themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themevale/themevale_fbt */ "./assets/js/theme/themevale/themevale_fbt.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */










var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context.urls);

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();

    // countdown time
    var product_id = $('[data-cart-item-add] [name="product_id"]').val();
    Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__["default"])(product_id);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
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
    Object(_themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
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
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      $('.is-open[data-collapsible]', $('.tabs-vertical')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      if ($('.themevale_productDescription-3').length) {
        $('.is-open[data-collapsible]', $('.themevale_productDescription-3')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
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
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
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
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_fbt.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_fbt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");









function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var relate_tab = "#product-related";
  var previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_16__["default"])('#previewModal')[0];

  // check custom field fbt
  showFBT();
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.themvale-fbt-toggle-options', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().is(':visible') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideDown();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideUp();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('change', '.themvale-fbt-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parents('form').find('.themvale-fbt-detail-options').slideUp();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '#themvale-fbt-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('form', jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()({
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
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').length) showList(list);
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt-product').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').each(function (i) {
        list.push({
          i: i,
          data: ""
        });
        if (!isNaN(Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text()))) {
          var productId = Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text());
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(productId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        } else {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.getPage(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text(), options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').remove();
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list .themvale-fbt-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
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
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').show();
    productOptions();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-wrapper').append('<div class="themvale-fbt-total fbt__total">\
          <p class="themevale-text-price"><span>Total:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
          <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
        </div>');
    slick_slider();
    totalPrice();
  }
  function slick_slider() {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.product-layout-3').length) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
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
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
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
      var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()(form[k]);
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
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
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
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').hide();
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
      var $body = jquery__WEBPACK_IMPORTED_MODULE_13___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-cart-quantity]', modal.$content);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.navUser-action .cart-count');
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0;
    var pos = 0;
    var symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item.isChecked').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').length) var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').text();else var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withoutTax').text();
      var price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      var s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) symbol = s;
      if (currency.indexOf(symbol) != -1) pos = currency.indexOf(symbol);
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) total = symbol + total;else total = total + symbol;
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt-totalPrice').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('form', jquery__WEBPACK_IMPORTED_MODULE_13___default()(document));

    // var arrPro = new Array();
    // for (var i = 0, len = $form.length; i < len; i++) {
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
    });
    // }

    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.close-options', function () {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parent().slideUp();
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_13___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $form).val();
    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
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
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_13___default()(attribute);
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
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].tools.image.getSrc(data.image.data, context.themeSettings.product_size);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr('data-src');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': _mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_13___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-bulkPricing', $scope)
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
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  }
});

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_stickyAddToCart.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_stickyAddToCart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvdGhlbWV2YWxlL3RoZW1ldmFsZV9mYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfc3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWFwLmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2luY2x1ZGVzIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJGZvcm1GaWVsZENsYSIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5vZCIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImF0dHIiLCJjb21wYXJlIiwiaHRtbCIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJfbWFwIiwiZWxlbWVudCIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiUHJvZHVjdCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImNvbXBhcmVQcm9kdWN0cyIsInVybHMiLCJkb2N1bWVudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdF9pZCIsIkNvdW50ZG93biIsInByb2R1Y3REZXRhaWxzIiwiUHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJzdGlja3lBZGRUb0NhcnQiLCJGQlQiLCJkZXNjcmlwdGlvblNsaWRlciIsInNsaWNrIiwiZGVzY3JpcHRpb25TbGlkZXIyIiwidHJpZ2dlciIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiUGFnZU1hbmFnZXIiLCJfZGVmYXVsdCIsInN1Ym1pdCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsIiRjb2xsYXBzaWJsZTIiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiJGNvbnRlbnQyIiwiZSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiY2xpY2siLCJ3aWR0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJoZWlnaHQiLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCIkZWwiLCJpc0luaXRpYWxpemVkIiwicmVsYXRlX3RhYiIsInByZXZpZXdNb2RhbCIsIm1vZGFsRmFjdG9yeSIsInNob3dGQlQiLCJuZXh0Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsInJlcGxhY2UiLCJwYXJlbnRzIiwidG90YWxQcmljZSIsImFyclBybyIsIkFycmF5IiwiaSIsImNoZWNrIiwiY2hlY2tQcm9kdWN0Iiwic2hvdyIsImFkZFRvQ2FydCIsInN3YWwiLCJ0ZXh0IiwidGVtcGxhdGUiLCJudW0iLCJsaXN0IiwicElkIiwidW5kZWZpbmVkIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJzaG93TGlzdCIsImlzTmFOIiwiTnVtYmVyIiwicHJvZHVjdElkIiwiZ2V0UGFnZSIsInJlbW92ZSIsImFwcGVuZCIsInRyaW0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwicHJvZHVjdE9wdGlvbnMiLCJzbGlja19zbGlkZXIiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJsZW4iLCJrIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImZvY3VzIiwiYXR0IiwiYXJyUCIsIkZvcm1EYXRhIiwiY2FydCIsIml0ZW1BZGQiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm9wZW4iLCJoaWRlIiwidXBkYXRlQ2FydENvbnRlbnQiLCJjYXJ0X2l0ZW0iLCJtb2RhbCIsImNhcnRJdGVtSWQiLCJvbkNvbXBsZXRlIiwiZ2V0Q2FydENvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwiJGJvZHkiLCIkY2FydFF1YW50aXR5IiwiJGNhcnRDb3VudGVyIiwicXVhbnRpdHkiLCJwYXJhbXMiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJsaW1pdCIsImdldENvbnRlbnQiLCJ0b3RhbCIsInBvcyIsInN5bWJvbCIsImN1cnJlbmN5IiwicHJpY2UiLCJwYXJzZUZsb2F0IiwicyIsInRvRml4ZWQiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCIkY2hhbmdlZE9wdGlvbiIsInRhcmdldCIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsInByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCIsInNob3dQcm9kdWN0SW1hZ2UiLCIkc2NvcGUiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJwYXJzZUludCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRzZWxlY3QiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsImNsb3Nlc3QiLCJfaXNQbGFpbk9iamVjdCIsImltYWdlIiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJnZXRTcmMiLCJ0aGVtZVNldHRpbmdzIiwicHJvZHVjdF9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwiX2lzT2JqZWN0IiwidXBkYXRlUHJpY2VWaWV3IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkY29udGFpbmVyIiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsInNpemUiLCJkZWxldGUiLCJjb25zb2xlIiwic2Nyb2xsIiwiY3NzIiwib3V0ZXJIZWlnaHQiLCJ0b2dnbGVDbGFzcyIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QjtBQUNXO0FBRW5DLElBQU1BLGFBQWEsR0FBRyxDQUNsQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsQ0FDYjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxhQUFhQSxDQUFDQyxLQUFLLEVBQUVDLGNBQWMsRUFBRTtFQUMxQyxJQUFNQyxNQUFNLEdBQUdDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDO0VBQ3ZCLElBQU1JLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxNQUFNLE9BQUtKLGNBQWdCLENBQUM7RUFDdEQsSUFBTUssT0FBTyxHQUFHSixNQUFNLENBQUNLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFFcEQsSUFBSUMsU0FBUyxHQUFNUixjQUFjLFVBQUtLLE9BQVM7RUFDL0MsSUFBSUksaUJBQWlCOztFQUVyQjtFQUNBLElBQUlKLE9BQU8sS0FBSyxPQUFPLEVBQUU7SUFDckIsSUFBTUssU0FBUyxHQUFHVCxNQUFNLENBQUNLLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFckMsSUFBSUssc0RBQUEsQ0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUVELFNBQVMsQ0FBQyxFQUFFO01BQ3hEO01BQ0FGLFNBQVMsR0FBTVIsY0FBYyxVQUFLWSx1REFBQSxDQUFZRixTQUFTLENBQUc7SUFDOUQsQ0FBQyxNQUFNO01B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V0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay42LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93bic7XG5pbXBvcnQgc3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9zdGlja3lBZGRUb0NhcnQnO1xuaW1wb3J0IEZCVCBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfZmJ0JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBjb3VudGRvd24gdGltZVxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpO1xuICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICBzdGlja3lBZGRUb0NhcnQoKTtcbiAgICAgICAgRkJUKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25TbGlkZXIoKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoJy5kZXNjcmlwdGlvbi1zbGlkZXItMicpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNsaWRlcjIoKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXItMicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc2NyaXB0aW9uU2xpZGVyKCkge1xuICAgICAgICAkKCcuZGVzY3JpcHRpb24tc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRpb25TbGlkZXIyKCkge1xuICAgICAgICAkKCcuZGVzY3JpcHRpb24tc2xpZGVyLTInKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlMiA9ICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJyk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICBjb25zdCAkY29udGVudDIgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgICQoJy5yZXZpZXctbGluayBhJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy5pcy1vcGVuW2RhdGEtY29sbGFwc2libGVdJywgJCgnLnRhYnMtdmVydGljYWwnKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG5cbiAgICAgICAgICAgIGlmKCQoJy50aGVtZXZhbGVfcHJvZHVjdERlc2NyaXB0aW9uLTMnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuaXMtb3BlbltkYXRhLWNvbGxhcHNpYmxlXScsICQoJy50aGVtZXZhbGVfcHJvZHVjdERlc2NyaXB0aW9uLTMnKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyN0YWItcmV2aWV3Jykub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJHJldmlld3NDb250ZW50Lm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghJGNvbnRlbnQyLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZTIudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICAvLyB0aGlzLiRjb2xsYXBzaWJsZTIudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZWxhdGVfdGFiID0gXCIjcHJvZHVjdC1yZWxhdGVkXCI7XHJcbiAgICBjb25zdCBwcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcclxuXHJcbiAgICAvLyBjaGVjayBjdXN0b20gZmllbGQgZmJ0XHJcbiAgICBzaG93RkJUKCk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtdmFsZS1mYnQtdG9nZ2xlLW9wdGlvbnMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkuaXMoJzp2aXNpYmxlJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRoZW12YWxlLWZidC1kZXRhaWwtY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykucmVwbGFjZSgnZmJ0X3Byb2R1Y3QnLCAnJyk7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmluZCgnLnRoZW12YWxlLWZidC1kZXRhaWwtb3B0aW9ucycpLnNsaWRlVXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3RoZW12YWxlLWZidC1hZGRBbGwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoJyN0aGVtdmFsZS1mYnQnKSk7XHJcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICQoJy50aGVtdmFsZS1mYnQtZGV0YWlsLWNoZWNrYm94JykuZWFjaChmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICAgICAgaWYgKCQodmFsKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyUHJvLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCRmb3JtLCAwLCBhcnJQcm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGQlQoKSB7XHJcbiAgICAgICAgLy8gcmVsYXRlZCBwcm9kdWN0XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogJ3RoZW1ldmFsZS9mYnQtaXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJ3RoZW1ldmFsZS9mYnQtb3B0aW9ucycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LWluZm8tbmFtZS5mYnQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHtpOmksIGRhdGE6IFwiXCJ9ICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pID09IGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKCcucHJvZHVjdFZpZXctaW5mby1uYW1lLmZidC1wcm9kdWN0JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1pbmZvLXZhbHVlLmZidC1wcm9kdWN0JykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHtpOmksIGRhdGE6IFwiXCJ9ICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcigkKHRoaXMpLnRleHQoKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IE51bWJlcigkKHRoaXMpLnRleHQoKSlcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICQoJy5wcm9kdWN0Vmlldy1pbmZvLXZhbHVlLmZidC1wcm9kdWN0JykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCQodGhpcykudGV4dCgpLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KXtcclxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlbGVtZW50LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QnKS5hcHBlbmQocmVzcG9uc2UuaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyN0aGVtdmFsZS1mYnQgLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QgLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHBJZCArICdcIl0gZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm0uYXBwZW5kKHJlc3BvbnNlLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyN0aGVtdmFsZS1mYnQnKS5zaG93KCk7XHJcbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0IC50aGVtdmFsZS1mYnQtcHJvZHVjdC13cmFwcGVyJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGhlbXZhbGUtZmJ0LXRvdGFsIGZidF9fdG90YWxcIj5cXFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aGVtZXZhbGUtdGV4dC1wcmljZVwiPjxzcGFuPlRvdGFsOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0aGVtdmFsZS1mYnQtdG90YWwtcHJpY2VcIiBpZD1cInRoZW12YWxlLWZidC10b3RhbFByaWNlXCI+PC9zcGFuPjwvcD5cXFxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IHRoZW12YWxlLWZidC10b3RhbC1idXR0b25cIiBpZD1cInRoZW12YWxlLWZidC1hZGRBbGxcIiBocmVmPVwiI1wiPkFkZCBhbGwgdG8gQ2FydDwvYT5cXFxyXG4gICAgICAgIDwvZGl2PicpO1xyXG4gICAgICAgIHNsaWNrX3NsaWRlcigpO1xyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzbGlja19zbGlkZXIoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0LWxheW91dC0zJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stbmV4dCc+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyc+PHVzZSB4bGluazpocmVmPScjaWNvbi1zbGljay1wcmV2Jz48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93Jz48dXNlIHhsaW5rOmhyZWY9JyNpY29uLXNsaWNrLW5leHQnPjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stcHJldic+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyclByby5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXTtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJChmb3JtW2tdKTtcclxuICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0JlZm9yZUFkZCgkYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGF0dCA9IFwiXCI7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0ID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApIHtcclxuXHJcbiAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBrID0gYXJyUFtpXTtcclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1ba10pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcclxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2FydC5waHAnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdNb2RhbC5vcGVuKCk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnRDb250ZW50KHByZXZpZXdNb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2FydC5waHAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChmb3JtLCBpLCBhcnJQKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXHJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcclxuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG90YWxQcmljZSgpIHtcclxuICAgICAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHZhciBzeW1ib2wgPSBcIiRcIjtcclxuICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeSA9ICQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhUYXgnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeSA9ICQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIHZhciBwcmljZSA9IHBhcnNlRmxvYXQoY3VycmVuY3kucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKTtcclxuICAgICAgICAgICAgdmFyIHMgPSBjdXJyZW5jeS5yZXBsYWNlKHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQocy5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpKSlcclxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHM7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCkgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWwpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT0gMClcclxuICAgICAgICAgICAgdG90YWwgPSBzeW1ib2wgKyB0b3RhbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XHJcbiAgICAgICAgJCgnI3RoZW12YWxlLWZidC10b3RhbFByaWNlJykuaHRtbCh0b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdG90YWxQcmljZSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoZG9jdW1lbnQpKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwLCBsZW4gPSAkZm9ybS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJHByb2R1Y3RPcHRpb25zRWxlbWVudCwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLW9wdGlvbnMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cignaWQnKSA9PT0gJ2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxyXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XHJcblxyXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2UuZ2V0U3JjKFxyXG4gICAgICAgICAgICAgICAgZGF0YS5pbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc2l6ZSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzogbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3JjJzogJCh0aGlzKS5hdHRyKCdzcmMnKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9ICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmMnKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmMnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmMnOiAkKHRoaXMpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldygkc2NvcGUsIGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJHNjb3BlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRzY29wZSkuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcclxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXHJcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgKyAxMDApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsIDQwKTtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgNDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDE1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmNob29zZV9vcHRpb25zX2FkZCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcucG9wLXVwLW9wdGlvbiAuY2xvc2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgLSAxNjApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
