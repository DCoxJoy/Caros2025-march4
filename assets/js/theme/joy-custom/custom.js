jQuery(document).ready(function ($) { 
    
    $('.joy-productview .productView-thumbnails').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true
    });   
  
    /* Mobile menu Toggle Script */
    jQuery('.hemburg-menu').on('click', function() {
        jQuery('body').addClass('mobile-menu-active');
    });
 
    jQuery('.close-icon').on('click', function() {
        jQuery('body').removeClass('mobile-menu-active');
    }); 

    var mobileBreakpoint = 991; 
    
});

 
document.addEventListener('DOMContentLoaded', function () {
    const accordionToggles = document.querySelectorAll('.accordion-navigation');
    
    // Open the first accordion by default
    if (accordionToggles.length > 0) {
        const firstToggle = accordionToggles[0];
        const firstContentId = firstToggle.getAttribute('data-collapsible');
        const firstContentElement = document.querySelector(firstContentId);

        firstToggle.classList.add('is-open');
        firstToggle.setAttribute('aria-expanded', 'true');
        if (firstContentElement) {
            firstContentElement.classList.add('is-open');
            firstContentElement.setAttribute('aria-hidden', 'false');
        }
    }

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const contentId = this.getAttribute('data-collapsible');
            const contentElement = document.querySelector(contentId);

            // Close all other accordions
            accordionToggles.forEach(otherToggle => {
                const otherContentId = otherToggle.getAttribute('data-collapsible');
                const otherContentElement = document.querySelector(otherContentId);

                if (otherToggle !== toggle) {
                    otherToggle.classList.remove('is-open');
                    otherToggle.setAttribute('aria-expanded', 'false');
                    if (otherContentElement) {
                        otherContentElement.classList.remove('is-open');
                        otherContentElement.setAttribute('aria-hidden', 'true');
                    }
                }
            });

            // Toggle the current accordion
            const isOpen = this.classList.contains('is-open');
            this.classList.toggle('is-open', !isOpen);
            this.setAttribute('aria-expanded', String(!isOpen));
            if (contentElement) {
                contentElement.classList.toggle('is-open', !isOpen);
                contentElement.setAttribute('aria-hidden', String(isOpen));
            }
        });
    });
});


jQuery(document).ready(function ($) { 
    $('.search-popup').click(function(event) {
        event.stopImmediatePropagation(); 
        $(this).toggleClass('search-product-clicked'); // Add or remove class
        
        // Add or remove a class from the <html> element
        $('html').toggleClass('html-search-active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const headerTop = document.querySelector(".joy-header-top");
    const header = document.querySelector(".joy-header");
    const root = document.documentElement;
  
    const updateHeaderHeights = () => {
      // Check if the page has been scrolled
      const headerTopHeight = window.scrollY > 0 ? 0 : headerTop.offsetHeight;
      const headerHeight = header.offsetHeight;
  
      // Dynamically set CSS variables for both heights
      root.style.setProperty("--joy-header-top-height", `${headerTopHeight}px`);
      root.style.setProperty("--joy-header-height", `${headerHeight}px`);
    };
  
    // Initial header height on page load
    updateHeaderHeights();
  
    // Update header heights when scrolling
    window.addEventListener("scroll", updateHeaderHeights);
  });
  

document.addEventListener('DOMContentLoaded', () => {
    const applyPaginationLogic = () => {
        if (window.innerWidth > 768) {
            const paginationItems = document.querySelectorAll('.pagination-item');
            const currentItem = document.querySelector('.pagination-item--current');

            if (currentItem) {
                // Hide all pagination items
                paginationItems.forEach(item => (item.style.display = 'none'));

                // Show the current item
                currentItem.style.display = 'inline-block';

                // Show the previous item (if available)
                const prevItem = currentItem.previousElementSibling;
                if (prevItem && !prevItem.classList.contains('pagination-item--previous')) {
                    prevItem.style.display = 'inline-block';
                }

                // Show the next item (if available)
                const nextItem = currentItem.nextElementSibling;
                if (nextItem && !nextItem.classList.contains('pagination-item--next')) {
                    nextItem.style.display = 'inline-block';
                }

                // Always show "Previous" and "Next" navigation links
                const prevNav = document.querySelector('.pagination-item--previous');
                const nextNav = document.querySelector('.pagination-item--next');
                if (prevNav) prevNav.style.display = 'inline-block';
                if (nextNav) nextNav.style.display = 'inline-block';
            }
        }
    };

    window.addEventListener('resize', applyPaginationLogic);
});

// Character not enter 
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-input--incrementTotal');

    inputs.forEach(input => {
        input.addEventListener('input', function (e) {
            // Remove any non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        input.addEventListener('keydown', function (e) {
            // Prevent spaces from being entered
            if (e.key === ' ') {
                e.preventDefault();
            }
        });
    });
});

jQuery(document).ready(function ($) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('html').addClass('scrolled');
        } else {
            $('html').removeClass('scrolled');
        }
    });
});

// Quick view btn
document.addEventListener('DOMContentLoaded', function () {
    function addNumericValidationToModalInputs() {
        const inputs = document.querySelectorAll('.form-input--incrementTotal');

        inputs.forEach(input => {
            input.addEventListener('keydown', function (e) {
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete') {
                    e.preventDefault();
                }
            });

            input.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        });
    }

    const modal = document.querySelector('.your-modal-class');

    if (modal && modal.classList.contains('is-open')) {
        addNumericValidationToModalInputs();
    }

    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.open-modal-button')) {
            setTimeout(() => {
                addNumericValidationToModalInputs();
            }, 500);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const baseURL = window.location.origin;

    const checkLinkInterval = setInterval(function () {
        const createAccountLink = Array.from(document.querySelectorAll("a")).find(link =>
            link.textContent.trim() === "Create an account"
        );

        if (createAccountLink) {
            createAccountLink.href = `${baseURL}/login.php?action=create_account`;
            console.log("Link updated: ", createAccountLink.href);
            clearInterval(checkLinkInterval);
        }
    }, 100);
});

// =================================================================
//  RESTRICTED PRODUCTS & MSRP CONFIGURATION (CLEAN UNIFIED ENGINE)
// =================================================================
const RESTRICTED_PRODUCTS = {
  ids: ['2160', '2163', '2166', '2055','2172','2089', '1893', '2171', '1748'], 
  skus: ['HTA3021', 'HTA3023', 'HTA6024', 'HPA3024','CPA330S', 'CWM347MP', 'CWA657MP', 'HPA3224', 'RVU101'], 
  urlOverrides: {
    '2160': '/product/hta3021',
    'HTA3023': '/product/hta3023',
    'HTA6024': '/product/hta6024',
    'HPA3024': '/product/hpa3024',
    'CPA330S': '/product/cpa330s',
    'CWM347MP': '/product/cwm347mp',
    'CWA657MP': '/product/cwa657mp',
    'HPA3224': '/product/hpa3224',
    'RVU101': '/product/rvu101'
  }
};

const MSRP_EXCEPTIONS = ['HPA3224', 'HPA3024', 'HTA6024', 'CWM347MP'];


/**
 * NEW HELPER FUNCTION: Cleans product text labels inside PDP and Quick Views
 */
function cleanProductDetailLabels(root = document) {
    root.querySelectorAll('dt, div, p, span, th, strong, td').forEach(el => {
        if (el.children.length === 0 || el.tagName === 'STRONG' || el.tagName === 'SPAN') {
            const text = el.textContent.trim().toLowerCase();
            if (text === 'product_status:' || text === 'product_status') {
                el.textContent = el.textContent.includes(':') ? 'Status:' : 'Status';
            } else if (text === 'product_type:' || text === 'product_type') {
                el.textContent = el.textContent.includes(':') ? 'Type:' : 'Type';
            }
        }
    });
}


/**
 * Unified Quick View restriction logic
 */
function applyQuickViewRestrictions(quickViewRoot) {
  const quickView =
    quickViewRoot ||
    document.querySelector('.modal-body.quickView, .snize-quick-look, .bc-quick-view, .quickView, [data-quickview]');
  if (!quickView) return;

  cleanProductDetailLabels(quickView);

  const idSet  = new Set((RESTRICTED_PRODUCTS.ids  || []).map(String));
  const skuSet = new Set((RESTRICTED_PRODUCTS.skus || []).map(s => String(s).toUpperCase()));

  const getIdentity = (root) => {
    const rootEl =
      root.querySelector('.productView.themevale_productView') ||
      root.querySelector('[data-product-id],[data-product-sku]') ||
      root;

    let pid  = (rootEl.getAttribute('data-product-id')  || '').trim();
    let psku = (rootEl.getAttribute('data-product-sku') || '').trim().toUpperCase();

    if (!psku) {
      const skuEl =
        root.querySelector('.productView-sku-value, .sku-value, [data-product-sku-value]') ||
        Array.from(root.querySelectorAll('.productView-info-name, .productView-info-label')).find(lbl =>
          /sku|part/i.test(lbl.textContent)
        )?.nextElementSibling;
      if (skuEl) psku = (skuEl.textContent || '').trim().toUpperCase();
    }

    return { pid, psku, rootEl };
  };

  const { pid, psku, rootEl } = getIdentity(quickView);
  const productCategory = rootEl?.getAttribute('data-product-category') || '';
  const isExtremeSeries = productCategory.includes('Series/Extreme');

  const isRestricted = (!!pid && idSet.has(pid)) || (!!psku && skuSet.has(psku)) || isExtremeSeries;

  if (!isRestricted) {
    return;
  }

  const prevVis = quickView.style.visibility;
  quickView.style.visibility = 'visible'; 

  const priceSelectors = [
    '.productView-price .price',
    '.productView-price .price-section--withoutTax',
    '.productView-price [data-product-price-without-tax]',
    '.price.price--withoutTax',
    '.rrp-price--withoutTax',
    '.productView-price .price-section',
    '.productView-price [class*="price"]'
  ];

  // FIXED: Explicitly force hide any elements related to "saving" rows
  quickView.querySelectorAll(priceSelectors.join(',')).forEach(el => {
    if (el.classList.contains('price-section--saving') || el.classList.contains('price--saving') || el.closest('.price-section--saving')) {
        el.style.setProperty('display', 'none', 'important');
    } else if (MSRP_EXCEPTIONS.includes(psku)) {
        el.style.setProperty('display', 'block', 'important');
    } else {
        el.style.display = 'none';
    }
  });

  const killList = [
    '#form-action-addToCart', 
    'button[name="addToCart"]', 
    '.button--addToCart',
    '#form-action-buyItNow', 
    '.button--buyNow',
    '.wallet-buttons-container',        
    '[data-smart-button-container]',    
    '.paypal-button-container',         
    '.add-to-cart-wallet-buttons'       
  ];

  const atcBtn = quickView.querySelector('#form-action-addToCart, button[name="addToCart"], .button--addToCart');
  if (atcBtn) atcBtn.remove();

  const buyNowBtn = quickView.querySelector('#form-action-buyItNow, .button--buyNow');
  if (buyNowBtn) buyNowBtn.remove();

  if (!quickView.querySelector('.learn-more-button')) {
    const titleEl = quickView.querySelector('.productView-title');
    const dataUrl = titleEl?.getAttribute('data-url') || '';
    const anchorUrl =
      dataUrl
        ? (dataUrl.startsWith('http') ? dataUrl : `${window.location.origin}${dataUrl}`)
        : (titleEl?.querySelector('a')?.href ||
           quickView.querySelector('.productView-title a')?.href ||
           window.location.origin);

    const learnMoreBtn = document.createElement('a');
    learnMoreBtn.href = anchorUrl;
    learnMoreBtn.textContent = 'Learn More';
    learnMoreBtn.className = 'button button--primary learn-more-button';
    learnMoreBtn.style.display = 'inline-block';
    learnMoreBtn.style.marginTop = '1rem';
    learnMoreBtn.style.textAlign = 'center';

    const insertionTarget =
      quickView.querySelector('.productView-options') ||
      quickView.querySelector('.productView-details') ||
      quickView; 
    insertionTarget.appendChild(learnMoreBtn);
  }

  let tries = 0;
  const reapply = () => {
    tries++;
    
    quickView
      .querySelectorAll(killList.join(','))
      .forEach(el => el.remove());

    // FIXED: Late rendering DOM engine safety filter guard applied here too
    quickView
      .querySelectorAll(priceSelectors.join(','))
      .forEach(el => {
        if (el.classList.contains('price-section--saving') || el.classList.contains('price--saving') || el.closest('.price-section--saving')) {
            el.style.setProperty('display', 'none', 'important');
        } else if (MSRP_EXCEPTIONS.includes(psku)) {
            el.style.setProperty('display', 'block', 'important');
        } else {
            el.style.display = 'none';
        }
      });
    
    if (tries < 10) setTimeout(reapply, 150); 
  };
  reapply();

  quickView.style.visibility = prevVis || 'visible';
}


/**
 * Hide price + convert ATC to Learn More for multiple products.
 */
function hideSearchCardDetails(cfg = {}) {
  const idSet   = new Set((cfg.ids  || []).map(String));
  const skuSet  = new Set((cfg.skus || []).map(String).map(s => s.toUpperCase()));
  const urlMap  = cfg.urlOverrides || {};

  const cards = document.querySelectorAll('article.card');

  cards.forEach(card => {
    const pid = (card.getAttribute('data-product-id') || '').trim();
    
    const cardText = card.textContent || "";
    const skuMatch = cardText.match(/SKU:\s*([A-Z0-9_-]+)/i);
    const psku = skuMatch ? skuMatch[1].toUpperCase() : "";

    const isTarget = (pid && idSet.has(pid)) || (psku && skuSet.has(psku)) || card.getAttribute('data-is-extreme') === "true";
    if (!isTarget) return;

    card.classList.add('restricted');

    const priceEl =
      card.querySelector('.card-price[data-test-info-type="price"]') ||
      card.querySelector('.price.price--withoutTax') ||
      card.querySelector('[data-product-price-without-tax]') ||
      card.querySelector('.price-section');

    if (priceEl) {
      if (MSRP_EXCEPTIONS.includes(psku)) {
        if (priceEl.querySelector('.msrp-clean-display')) return;

        const rawPrice = card.getAttribute('data-product-price');
        if (rawPrice) {
            priceEl.style.setProperty('display', 'block', 'important');
            priceEl.style.setProperty('visibility', 'visible', 'important');
            priceEl.classList.remove('hidden', 'u-hiddenVisually', 'hide');

            const formattedPrice = '$' + parseFloat(rawPrice).toFixed(2);
            priceEl.innerHTML = `
                <div class="price-section msrp-clean-display" style="display: block !important; margin-bottom: 5px;">
                    <span class="price" style="display: inline-block !important; text-decoration: none !important; color: #000 !important; font-weight: bold;">
                        ${formattedPrice}
                    </span>
                </div>`;
            console.log(`🏷️ Price clean-injected via SearchCard details for: ${psku}`);
        }
      } else {
        priceEl.style.display = 'none';
      }
    }

    const atcBtn = card.querySelector('a.themevale_btnATC, a.learn-more-link');
    if (atcBtn) {
      const productLink = card.querySelector('.product_img_link, a.card-figure__link, a[data-event-type="product-click"]');
      const inferredUrl = productLink?.href?.split('?')[0] || atcBtn.href?.split('?')[0] || '#';
      const overrideUrl = urlMap[pid] || urlMap[psku] || inferredUrl;
      const finalUrl = overrideUrl.replace('/cart.php', '');

      if (atcBtn.textContent.trim() !== 'Learn More' || atcBtn.classList.contains('themevale_btnATC')) {
        atcBtn.textContent = 'Learn More';
        atcBtn.href = finalUrl;
        atcBtn.removeAttribute('data-product-id');
        atcBtn.classList.remove('themevale_btnATC');
        atcBtn.classList.add('learn-more-link');
        atcBtn.addEventListener('click', e => e.stopImmediatePropagation(), { once: true });
      }
    }
  });
}


function updateExtremeButtons() {
    const extremeCards = document.querySelectorAll('article.card[data-is-extreme="true"]');
    extremeCards.forEach(card => {
        const productLinkEl = card.querySelector('.product_img_link');
        if (!productLinkEl) return;
        const productUrl = productLinkEl.href;

        const atcButtons = card.querySelectorAll('.themevale_btnATC');
        atcButtons.forEach(button => {
            button.textContent = 'Learn More';
            button.href = productUrl;
            button.removeAttribute('data-product-id');
            button.classList.remove('themevale_btnATC');
            button.addEventListener('click', e => e.stopImmediatePropagation());
        });
    });
    console.log("updateExtremeButtons() executed.");
}

function forceLearnMoreForRestrictedSkus() {
    const restrictedIDs = ['1893','2160', '2163', '2166', '2055', '2089', '2171']; 

    document.querySelectorAll('article.card').forEach(card => {
        const productId = card.dataset.productId;
        
        const cardText = card.textContent || "";
        const skuMatch = cardText.match(/SKU:\s*([A-Z0-9_-]+)/i);
        const psku = skuMatch ? skuMatch[1].toUpperCase() : "";
        
        if (!restrictedIDs.includes(productId) && !MSRP_EXCEPTIONS.includes(psku)) return;

        const productUrl = card.querySelector('.product_img_link')?.href || '#';

        const atcButton = card.querySelector('.themevale_btnATC');
        if (atcButton) {
            atcButton.textContent = 'Learn More';
            atcButton.href = productUrl;
            atcButton.removeAttribute('data-product-id');
            atcButton.classList.remove('themevale_btnATC');
            atcButton.classList.add('learn-more-link');
            atcButton.addEventListener('click', e => e.stopImmediatePropagation());
        }

        const priceEl = card.querySelector('.price.price--withoutTax, .card-price[data-test-info-type="price"], .price-section');
        
        if (priceEl) {
            if (MSRP_EXCEPTIONS.includes(psku)) {
                if (priceEl.querySelector('.msrp-clean-display')) return;

                const rawPrice = card.getAttribute('data-product-price');
                if (rawPrice) {
                    priceEl.style.setProperty('display', 'block', 'important');
                    priceEl.style.setProperty('visibility', 'visible', 'important');
                    priceEl.classList.remove('hidden', 'u-hiddenVisually', 'hide');

                    const formattedPrice = '$' + parseFloat(rawPrice).toFixed(2);
                    priceEl.innerHTML = `
                        <div class="price-section msrp-clean-display" style="display: block !important; margin-bottom: 5px;">
                            <span class="price" style="display: inline-block !important; text-decoration: none !important; color: #000 !important; font-weight: bold;">
                                ${formattedPrice}
                            </span>
                        </div>`;
                    console.log(`🏷️ Price clean-injected via forceLearnMore for: ${psku}`);
                }
            } else {
                priceEl.style.display = 'none';
            }
        }
    });
}

function hidePriceIfHigh() {
    const priceElements = document.querySelectorAll('.card-price[data-test-info-type="price"]');
    priceElements.forEach(elem => {
        let priceText = elem.textContent.trim();
        const cleaned = priceText.replace(/[^0-9.,]/g, '').replace(/,/g, '');
        let numericPrice = parseFloat(cleaned);

        if (!isNaN(numericPrice) && numericPrice >= 2599) {
            elem.style.display = 'none';
            console.log("Hiding price as price is high:", numericPrice);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {

    /*******************************************
     * 1) PDP Logic (for product detail pages)
     *******************************************/
    const pdpIndicator = document.querySelector(".productView-details");
    if (pdpIndicator) {
        console.log("PDP detected via .productView-details; running PDP logic.");

        cleanProductDetailLabels();

        const productSheetButton = document.querySelector("#product_sheet");
        if (productSheetButton) {
            productSheetButton.style.display = "block";
            console.log("Forcing #product_sheet button to display on PDP.");
        }

        const requestQuoteBtn = document.querySelector(".request-quote-button");
        const comingSoonBtn = document.querySelector(".coming-soon-button");
        const discontinuedMsg = document.querySelector(".discontinued-message");

        if (requestQuoteBtn || discontinuedMsg) {
            const addToCartBtn = document.querySelector("#form-action-addToCart");
            const buyItNowBtn = document.querySelector("#form-action-buyItNow");
            if (addToCartBtn) addToCartBtn.style.display = "none";
            if (buyItNowBtn) buyItNowBtn.style.display = "none";
        } else if (comingSoonBtn) {
            const addToCartBtn = document.querySelector("#form-action-addToCart");
            const buyItNowBtn = document.querySelector("#form-action-buyItNow");
            if (addToCartBtn) addToCartBtn.style.display = "none";
            if (buyItNowBtn) buyItNowBtn.style.display = "none";
            if (productSheetButton) productSheetButton.style.display = "block";
        }

        jQuery(document).ready(function($) {
            const $relatedCarousel = $('.product-related .carousel-content');
            if ($relatedCarousel.length) {
                updateExtremeButtons();
                hidePriceIfHigh();
             
                $relatedCarousel.on('init reInit afterChange', function() {
                    updateExtremeButtons();
                    hidePriceIfHigh();
                    forceLearnMoreForRestrictedSkus();
                });
            }
        });
        
        // --- Auto-remove restricted items from "Related Products" ---
        (function removeRestrictedFromRelated() {
          const ids  = (RESTRICTED_PRODUCTS.ids  || []).map(String);
          const skus = (RESTRICTED_PRODUCTS.skus || []).map(s => String(s).toUpperCase());

          function prune() {
            let removed = 0;
            document.querySelectorAll('article.card[data-product-id], article.card[data-product-sku]').forEach(card => {
              const pid  = (card.getAttribute('data-product-id')  || '').trim();
              const psku = (card.getAttribute('data-product-sku') || '').trim().toUpperCase();
              if (ids.includes(pid) || skus.includes(psku)) {
                const slide = card.closest('.slick-slide');
                (slide || card).remove();
                removed++;
              }
            });
            if (removed) {
              console.log(`🧹 Related: removed ${removed} restricted item(s)`);
              try { window.dispatchEvent(new Event('resize')); } catch(e){}
            }
          }

          setTimeout(prune, 300);

          const related = document.querySelector('.product-related, .relatedProducts, .product-recommendations');
          if (related) {
            const obs = new MutationObserver(() => prune());
            obs.observe(related, { childList: true, subtree: true });
          }
        })();

        return; 
    }

    /*******************************************
     * 3) Listing Page Logic (for categories, search, etc.)
     *******************************************/
    console.log("Listing page detected; running extreme product logic.");

    updateExtremeButtons();
    hidePriceIfHigh();
    forceLearnMoreForRestrictedSkus();
    hideSearchCardDetails(RESTRICTED_PRODUCTS);
    cleanProductDetailLabels();

    /*******************************************
     * MutationObservers for dynamically added products
     *******************************************/
    const facetedContainer = document.getElementById('faceted-search-container');
    if (facetedContainer) {
        const observer = new MutationObserver(mutations => {
            let newNodes = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) newNodes = true;
            });
            if (newNodes) {
                updateExtremeButtons();
                hidePriceIfHigh();
                forceLearnMoreForRestrictedSkus();
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
                cleanProductDetailLabels();
            }
        });
        observer.observe(facetedContainer, { childList: true, subtree: true });
    }

    const productGrid = document.querySelector('.productGrid');
    if (productGrid) {
        const observer2 = new MutationObserver(mutations => {
           updateExtremeButtons();
           hidePriceIfHigh();
           forceLearnMoreForRestrictedSkus();
           hideSearchCardDetails(RESTRICTED_PRODUCTS);
           cleanProductDetailLabels();
        });
        observer2.observe(productGrid, { childList: true, subtree: true });
    }

    /*******************************************
     * 4) "Show More" Button Click Handler
     *******************************************/
    const showMoreBtn = document.querySelector(".button--secondary.button--lg[href^='javascript:void(0)']");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            setTimeout(() => {
                updateExtremeButtons();
                hidePriceIfHigh();
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
                cleanProductDetailLabels();
            }, 1500);
        });
    }

    /*******************************************
     * 5) Responsive Handling
     *******************************************/
    window.addEventListener("load", function() {
        if (window.innerWidth < 768) {
            setTimeout(() => {
                updateExtremeButtons();
                hidePriceIfHigh();
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
                cleanProductDetailLabels();
            }, 2000);
        }
    });

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    window.addEventListener('resize', debounce(() => {
        updateExtremeButtons();
        hidePriceIfHigh();
        hideSearchCardDetails(RESTRICTED_PRODUCTS);
        cleanProductDetailLabels();
    }, 500));

    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            updateExtremeButtons();
            hidePriceIfHigh();
            hideSearchCardDetails(RESTRICTED_PRODUCTS);
            cleanProductDetailLabels();
        }, 1000);
    });

    document.addEventListener('snize:productsUpdated', () => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
                updateExtremeButtons();
                hidePriceIfHigh();
                forceLearnMoreForRestrictedSkus();
                cleanProductDetailLabels();
            });
        }, 1000);

        let searchFixAttempts = 0;
        const maxSearchFixAttempts = 10;

        const mobileSearchFixInterval = setInterval(() => {
            searchFixAttempts++;
            hideSearchCardDetails(RESTRICTED_PRODUCTS);
            updateExtremeButtons();
            hidePriceIfHigh();
            forceLearnMoreForRestrictedSkus();
            cleanProductDetailLabels();

            if (searchFixAttempts >= maxSearchFixAttempts) {
                clearInterval(mobileSearchFixInterval);
            }
        }, 1000);
    });
        
    // Observe modal open (handles PDP + product list Quick Views)
    const modalObserver = new MutationObserver(mutations => {
      const SEL = [
        '.modal-body.quickView',
        '.quickView',
        '.snize-quick-look',
        '[data-reveal][id*="Quick"]',
        '[data-quickview]',
        '.bc-quick-view'
      ].join(',');

      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;

          const quickViewRoot = node.matches?.(SEL) ? node : node.querySelector?.(SEL);
          if (!quickViewRoot) return;

          setTimeout(() => {
            applyQuickViewRestrictions(quickViewRoot);
            requestAnimationFrame(() => applyQuickViewRestrictions(quickViewRoot));
          }, 50);
        });
      });
    });
    modalObserver.observe(document.body, { childList: true, subtree: true });

    (function persistentFixForRestrictedProducts() {
      let attempts = 0;
      const maxAttempts = 10;

      const interval = setInterval(() => {
        attempts++;
        hideSearchCardDetails(RESTRICTED_PRODUCTS);
        cleanProductDetailLabels();

        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 1000);
    })();

});

// Removes &quote; from product filter page
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.page');
  if (!container) return;

  const cleanHeading = function () {
    const h1 = document.querySelector('.page-heading');
    if (h1 && h1.textContent.includes('&quot;')) {
      h1.textContent = h1.textContent.replaceAll('&quot;', '');
    }
  };

  cleanHeading();

  const observer = new MutationObserver(function () {
    cleanHeading();
  });
  observer.observe(container, { childList: true, subtree: true });
});

/**
 * GOOGLE PAY LOCKDOWN
 */
document.addEventListener('DOMContentLoaded', function () {
    const isExtreme = document.querySelector('.productView.is-extreme-product');

    if (isExtreme) {
        const walletSelectors = '.wallet-buttons-container, [data-smart-button-container], .paypal-button-container, .checkoutButtons';
        document.querySelectorAll(walletSelectors).forEach(el => el.remove());

        let cleanupTries = 0;
        const cleanupInterval = setInterval(() => {
            const buttons = document.querySelectorAll(walletSelectors);
            if (buttons.length > 0) {
                buttons.forEach(b => b.remove());
            }
            
            cleanupTries++;
            if (cleanupTries > 20) clearInterval(cleanupInterval); 
        }, 200);
    }
});