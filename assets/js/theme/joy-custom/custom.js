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

    // // Initial check on page load
    // applyPaginationLogic();

    // Optionally, reapply logic on window resize
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
    // Function to add event listeners to inputs inside the modal
    function addNumericValidationToModalInputs() {
        const inputs = document.querySelectorAll('.form-input--incrementTotal');

        inputs.forEach(input => {
            // Prevent non-numeric characters from being entered
            input.addEventListener('keydown', function (e) {
                // Allow only numeric characters, backspace, and arrow keys
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete') {
                    e.preventDefault(); // Prevent the key from being typed
                }
            });

            // Remove any non-numeric characters after the input
            input.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9]/g, ''); // Remove everything except digits
            });
        });
    }

    // Check if modal is displayed, and add event listeners for inputs inside the modal
    const modal = document.querySelector('.your-modal-class'); // Replace with your modal's class or ID

    if (modal && modal.classList.contains('is-open')) {
        addNumericValidationToModalInputs(); // Add input validation when modal is open
    }

    // If modal is opened dynamically, listen for modal open event
    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.open-modal-button')) { // Adjust based on your modal trigger element
            setTimeout(() => {
                addNumericValidationToModalInputs(); // Add input validation after modal is opened
            }, 500); // Delay to ensure modal is fully opened
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const baseURL = window.location.origin;

    // Check for the link every 100 milliseconds until it's found
    const checkLinkInterval = setInterval(function () {
        const createAccountLink = Array.from(document.querySelectorAll("a")).find(link =>
            link.textContent.trim() === "Create an account"
        );

        if (createAccountLink) {
            createAccountLink.href = `${baseURL}/login.php?action=create_account`;
            console.log("Link updated: ", createAccountLink.href);
            clearInterval(checkLinkInterval);  // Stop checking once the link is found
        }
    }, 100);
});


// ============================
//  RESTRICTED PRODUCTS CONFIG
// ============================
const RESTRICTED_PRODUCTS = {
  ids: ['2160', '2163', '2166', '2055','2172','2089', '1893', '2171'], // Add/remove as needed
  skus: ['HTA3021', 'HTA3023', 'HTA6024', 'HPA3024','CPA330S', 'CWM347MP', 'CWA657MP', 'HPA3224'], // Optional SKU match
  urlOverrides: {
    '2160': '/product/hta3021',
    'HTA3023': '/product/hta3023',
    'HTA6024': '/product/hta6024',
    'HPA3024': '/product/hpa3024',
    'CPA330S': '/product/cpa330s',
    'CWM347MP': '/product/cwm347mp',
    'CWA657MP': '/product/cwa657mp',
    'HPA3224': '/product/hpa3224'
  }
};

//START of custom related products pruning function
/**
 * Unified Quick View restriction logic:
 * - Hides price and removes ATC / Buy Now
 * - Adds "Learn More" button
 * - Triggers for restricted IDs/SKUs or Extreme series
 */
function applyQuickViewRestrictions(quickViewRoot) {
  // Accept a specific modal root (best), or fall back to the first we can find
  const quickView =
    quickViewRoot ||
    document.querySelector('.modal-body.quickView, .snize-quick-look, .bc-quick-view, .quickView, [data-quickview]');
  if (!quickView) return;

  // ---- helpers -------------------------------------------------
  const idSet  = new Set((RESTRICTED_PRODUCTS.ids  || []).map(String));
  const skuSet = new Set((RESTRICTED_PRODUCTS.skus || []).map(s => String(s).toUpperCase()));

  const getIdentity = (root) => {
    // Prefer explicit attributes on the product root
    const rootEl =
      root.querySelector('.productView.themevale_productView') ||
      root.querySelector('[data-product-id],[data-product-sku]') ||
      root;

    let pid  = (rootEl.getAttribute('data-product-id')  || '').trim();
    let psku = (rootEl.getAttribute('data-product-sku') || '').trim().toUpperCase();

    // Fallback: dedicated SKU value element (NOT the title)
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
    // Not a restricted product — bail with no changes.
    return;
  }

  // ---- apply restrictions (safely) -----------------------------
  const prevVis = quickView.style.visibility;
  quickView.style.visibility = 'visible'; // ensure it's visible while we work

  // 1) Hide only price rows/values (scoped, not whole blocks)
  const priceSelectors = [
    // common price value rows
    '.productView-price .price',
    '.productView-price .price-section--withoutTax',
    '.productView-price [data-product-price-without-tax]',
    '.price.price--withoutTax',
    '.rrp-price--withoutTax',
    // Searchanise / theme variants; keep scope inside price containers if present
    '.productView-price .price-section',
    '.productView-price [class*="price"]'
  ];
  quickView.querySelectorAll(priceSelectors.join(',')).forEach(el => {
    // Hide only the value line, not parent containers
    el.style.display = 'none';
  });

  // 2) Remove ONLY the action buttons (keep their containers/forms)
  const atcBtn = quickView.querySelector('#form-action-addToCart, button[name="addToCart"], .button--addToCart');
  if (atcBtn) atcBtn.remove();

  const buyNowBtn = quickView.querySelector('#form-action-buyItNow, .button--buyNow');
  if (buyNowBtn) buyNowBtn.remove();

  // 3) Add "Learn More" button once, linking to PDP
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

    // Prefer inserting near options/details (keeps images intact)
    const insertionTarget =
      quickView.querySelector('.productView-options') ||
      quickView.querySelector('.productView-details') ||
      quickView; // fallback
    insertionTarget.appendChild(learnMoreBtn);
  }

  // 4) Late DOM guard: re-hide any price/buttons that appear after async renders
  let tries = 0;
  const reapply = () => {
    tries++;
    quickView
      .querySelectorAll('#form-action-addToCart, button[name="addToCart"], .button--addToCart, #form-action-buyItNow, .button--buyNow')
      .forEach(el => el.remove());
    quickView
      .querySelectorAll(priceSelectors.join(','))
      .forEach(el => (el.style.display = 'none'));
    if (tries < 6) setTimeout(reapply, 120);
  };
  reapply();

  // 5) Ensure we never leave the modal hidden
  quickView.style.visibility = prevVis || 'visible';
}





//END of custom related products pruning function


/**
 * Hide price + convert ATC to Learn More for multiple products.
 * Match by product IDs and/or SKUs.
 */
function hideSearchCardDetails(cfg = {}) {
  const idSet   = new Set((cfg.ids  || []).map(String));
  const skuSet  = new Set((cfg.skus || []).map(String).map(s => s.toUpperCase()));
  const urlMap  = cfg.urlOverrides || {};

  const cards = document.querySelectorAll('article.card[data-product-id], article.card[data-product-sku]');

  cards.forEach(card => {
    const pid = (card.getAttribute('data-product-id') || '').trim();
    const psku = (card.getAttribute('data-product-sku') || '').trim().toUpperCase();

    const isTarget = (pid && idSet.has(pid)) || (psku && skuSet.has(psku));
    if (!isTarget) return;

    card.classList.add('restricted');

    const priceEl =
      card.querySelector('.card-price[data-test-info-type="price"]') ||
      card.querySelector('.price.price--withoutTax') ||
      card.querySelector('[data-product-price-without-tax]');

    if (priceEl && priceEl.style.display !== 'none') {
      priceEl.style.display = 'none';
      console.log(`💸 Price hidden for product ${pid || psku}`);
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
        console.log(`🔗 Converted ATC to Learn More for product ${pid || psku}`);
      }
    }
  });
}



document.addEventListener("DOMContentLoaded", function() {


    /*******************************************
     * Utility Functions: updateExtremeButtons & hidePriceIfHigh
     *******************************************/
    /**
     * updateExtremeButtons():
     * Finds article.card[data-is-extreme="true"] and converts "Add to Cart" to "Learn More."
     */
    function updateExtremeButtons() {
        const extremeCards = document.querySelectorAll('article.card[data-is-extreme="true"]');
        extremeCards.forEach(card => {
            const productLinkEl = card.querySelector('.product_img_link');
            if (!productLinkEl) return;
            const productUrl = productLinkEl.href;

            // Any .themevale_btnATC inside this card
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
    const restrictedIDs = ['1893','2160', '2163', '2166', '2055', '2089', '2171']; // Add all product IDs here

    document.querySelectorAll('article.card[data-product-id]').forEach(card => {
        const productId = card.dataset.productId;
        if (!restrictedIDs.includes(productId)) return;

        const productUrl = card.querySelector('.product_img_link')?.href || '#';

        const atcButton = card.querySelector('.themevale_btnATC');
        if (atcButton) {
            atcButton.textContent = 'Learn More';
            atcButton.href = productUrl;
            atcButton.removeAttribute('data-product-id');
            atcButton.classList.remove('themevale_btnATC');
            atcButton.classList.add('learn-more-link');
            atcButton.addEventListener('click', e => e.stopImmediatePropagation());
            console.log(`🔁 Product ${productId}: Converted to Learn More`);
        }

        const priceEl = card.querySelector('.price.price--withoutTax, .card-price[data-test-info-type="price"]');
        if (priceEl) {
            priceEl.style.display = 'none';
            console.log(`💸 Product ${productId}: Price hidden`);
        }
    });
}
  



function hidePriceIfHigh() {
    const priceElements = document.querySelectorAll('.card-price[data-test-info-type="price"]');
    priceElements.forEach(elem => {
        let priceText = elem.textContent.trim();

        // Updated: Strip out everything except digits, dots, and commas. Then remove commas for parsing
        const cleaned = priceText.replace(/[^0-9.,]/g, '').replace(/,/g, '');
        let numericPrice = parseFloat(cleaned);

        console.log("Raw price text:", priceText, "Cleaned:", cleaned, "Parsed:", numericPrice);

        if (!isNaN(numericPrice) && numericPrice >= 2599) {
            elem.style.display = 'none';
            console.log("Hiding price as price is high:", numericPrice);
        }
    });
}





    /*******************************************
     * 1) PDP Logic (for product detail pages)
     *******************************************/
    const pdpIndicator = document.querySelector(".productView-details");
    if (pdpIndicator) {
        console.log("PDP detected via .productView-details; running PDP logic.");

        // Force product_sheet button to display if it exists.
        const productSheetButton = document.querySelector("#product_sheet");
        if (productSheetButton) {
            productSheetButton.style.display = "block";
            console.log("Forcing #product_sheet button to display on PDP.");
        }

        // Special status handling on PDP
        const requestQuoteBtn = document.querySelector(".request-quote-button");
        const comingSoonBtn = document.querySelector(".coming-soon-button");
        const discontinuedMsg = document.querySelector(".discontinued-message");

        if (requestQuoteBtn || discontinuedMsg) {
            const addToCartBtn = document.querySelector("#form-action-addToCart");
            const buyItNowBtn = document.querySelector("#form-action-buyItNow");
            if (addToCartBtn) {
                addToCartBtn.style.display = "none";
                console.log("Hiding Add to Cart on PDP (Request a Quote or Discontinued).");
            }
            if (buyItNowBtn) {
                buyItNowBtn.style.display = "none";
                console.log("Hiding Buy It Now on PDP (Request a Quote or Discontinued).");
            }
        } else if (comingSoonBtn) {
            const addToCartBtn = document.querySelector("#form-action-addToCart");
            const buyItNowBtn = document.querySelector("#form-action-buyItNow");
            if (addToCartBtn) {
                addToCartBtn.style.display = "none";
                console.log("Hiding Add to Cart on PDP (Coming Soon).");
            }
            if (buyItNowBtn) {
                buyItNowBtn.style.display = "none";
                console.log("Hiding Buy It Now on PDP (Coming Soon).");
            }
            if (productSheetButton) {
                productSheetButton.style.display = "block";
                console.log("Forcing #product_sheet button to display (Coming Soon).");
            }
        } else {
            console.log("No special status detected on PDP; default buttons remain.");
        }

        /**
         * 2) Recommended Products Carousel Logic (on PDP)
         * 
         * If your theme already initializes slick for .product-related .carousel-content,
         * remove the .slick() call below. Otherwise, uncomment to init.
         */
        jQuery(document).ready(function($) {
            const $relatedCarousel = $('.product-related .carousel-content');
            if ($relatedCarousel.length) {
                // Uncomment if your theme does NOT initialize slick for this carousel
                // $relatedCarousel.slick({
                //     slidesToShow: 4,
                //     slidesToScroll: 1,
                //     infinite: false,
                //     arrows: true,
                //     dots: true
                // });

                // Run your logic right away for initially visible slides
                updateExtremeButtons();
                hidePriceIfHigh();
             

                // Re-run whenever the carousel changes slides
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


        // If you do NOT want the listing logic to run on PDP, keep this return.
        // If you want listing logic too, remove it.
        return;
    }

    /*******************************************
     * 3) Listing Page Logic (for categories, search, etc.)
     *******************************************/
    console.log("Listing page detected; running extreme product logic.");

    // Immediately run listing logic
    updateExtremeButtons();
    hidePriceIfHigh();
    forceLearnMoreForRestrictedSkus();
    hideSearchCardDetails(RESTRICTED_PRODUCTS);

    /*******************************************
     * MutationObservers for dynamically added products
     *******************************************/
    const facetedContainer = document.getElementById('faceted-search-container');
    if (facetedContainer) {
        const observer = new MutationObserver(mutations => {
            let newNodes = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    newNodes = true;
                }
            });
            if (newNodes) {
                updateExtremeButtons();
                hidePriceIfHigh();
                forceLearnMoreForRestrictedSkus();
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
            }
        });
        observer.observe(facetedContainer, { childList: true, subtree: true });
    } else {
        console.warn('No #faceted-search-container found. Faceted observer not set.');
    }

    const productGrid = document.querySelector('.productGrid');
    if (productGrid) {
        const observer2 = new MutationObserver(mutations => {
            let newNodes = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    newNodes = true;
                }
            });

           updateExtremeButtons();
           hidePriceIfHigh();
           hideSearchCardDetails(RESTRICTED_PRODUCTS);
        
        });
        observer2.observe(productGrid, { childList: true, subtree: true });
    } else {
        console.warn('No .productGrid found. ' + '"Show More" observer not set.');
    }

    /*******************************************
     * 4) "Show More" Button Click Handler
     *******************************************/
    const showMoreBtn = document.querySelector(".button--secondary.button--lg[href^='javascript:void(0)']");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            console.log("Show More button clicked...");
            setTimeout(() => {
                updateExtremeButtons();
                hidePriceIfHigh();
                hideSearchCardDetails(RESTRICTED_PRODUCTS);
                console.log("updateExtremeButtons() and hidePriceIfHigh() called after Show More click.");
            }, 1500);
        });
    }

    /*******************************************
     * 5) Responsive Handling on Window Load, Resize & Orientation Change
     *******************************************/
    window.addEventListener("load", function() {
        if (window.innerWidth < 768) {
            console.log("Window loaded on small screen; re-running listing logic.");
            setTimeout(() => {
                updateExtremeButtons();
                hidePriceIfHigh();
               hideSearchCardDetails(RESTRICTED_PRODUCTS);
 
            }, 2000);
        }
    });



    // Debounce for responsive changes
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    window.addEventListener('resize', debounce(() => {
        console.log("Window resized; re-running listing logic.");
        updateExtremeButtons();
        hidePriceIfHigh();
        hideSearchCardDetails(RESTRICTED_PRODUCTS);
 
    }, 500));

    window.addEventListener('orientationchange', () => {
        console.log("Orientation changed; re-running listing logic after delay.");
        setTimeout(() => {
            updateExtremeButtons();
            hidePriceIfHigh();
            hideSearchCardDetails(RESTRICTED_PRODUCTS);
 
        }, 1000);
    });


document.addEventListener('snize:productsUpdated', () => {
    setTimeout(() => {
        console.log('⏳ Running delayed re-logic after Searchanise update');
        requestAnimationFrame(() => {
            hideSearchCardDetails(RESTRICTED_PRODUCTS);
            updateExtremeButtons();
            hidePriceIfHigh();
            forceLearnMoreForRestrictedSkus();
            console.log('✅ Searchanise custom logic applied.');
        });
    }, 1000);

    // 🧠 Persistent retry loop for mobile
    let searchFixAttempts = 0;
    const maxSearchFixAttempts = 10;

    const mobileSearchFixInterval = setInterval(() => {
        searchFixAttempts++;
        hideSearchCardDetails(RESTRICTED_PRODUCTS);
        updateExtremeButtons();
        hidePriceIfHigh();
        forceLearnMoreForRestrictedSkus();
        console.log(`📱 Mobile search re-patch attempt ${searchFixAttempts}`);

        if (searchFixAttempts >= maxSearchFixAttempts) {
            clearInterval(mobileSearchFixInterval);
            console.log("✅ Mobile search persistent fix complete.");
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

      // If the added node IS a quick-view container or contains one, handle it
      const quickViewRoot = node.matches?.(SEL) ? node : node.querySelector?.(SEL);
      if (!quickViewRoot) return;

      // Run restriction logic twice to catch late-rendered DOM elements
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
    console.log(`⏱ Persistent fix attempt ${attempts} for restricted products.`);

    if (attempts >= maxAttempts) {
      clearInterval(interval);
      console.log("✅ Persistent fix completed for restricted products.");
    }
  }, 1000);
})();


});


  //Following javascript code removes &quote;from product filter page
  document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.page');
  if (!container) return;

  const cleanHeading = function () {
    const h1 = document.querySelector('.page-heading');
    if (h1 && h1.textContent.includes('&quot;')) {
      h1.textContent = h1.textContent.replaceAll('&quot;', '');
    }
  };

  // Run once immediately in case it's already there
  cleanHeading();

  // Set up observer on the container that holds the page heading
  const observer = new MutationObserver(function () {
    cleanHeading();
  });

  observer.observe(container, { childList: true, subtree: true });
});

