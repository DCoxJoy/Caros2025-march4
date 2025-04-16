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
    // $('.header-menu-item-link').on('click', function (e) {
    //     e.preventDefault();

    //     if ($(window).width() <= mobileBreakpoint) { 
    //         var $megaMenu = $(this).siblings('.joy-megmenu'); 
    //         $('.joy-megmenu').not($megaMenu).slideUp(300); 
    //         $megaMenu.stop(true, true).slideToggle(300); 
    //         $('.header-menu-item').not($(this).parents('.header-menu-item')).removeClass('active'); 
    //         $(this).parents('.header-menu-item').toggleClass('active');
    //     }
    // });
    
    
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

    /**
     * hidePriceIfHigh():
     * Hides prices if the numeric value is >= 2599.
     * Looks for .card-price[data-test-info-type="price"] and sets display:none.
     */
    function hidePriceIfHigh() {
        const priceElements = document.querySelectorAll('.card-price[data-test-info-type="price"]');
        priceElements.forEach(elem => {
            let priceText = elem.textContent.trim();
            let numericPrice = parseFloat(priceText.replace(/[^0-9\.]+/g, ''));
            console.log("Raw price text:", priceText, "Parsed price:", numericPrice);

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
                    console.log("Carousel updated on PDP; re-ran custom logic.");
                });
            }
        });

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
            if (newNodes) {
                updateExtremeButtons();
                hidePriceIfHigh();
            }
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
    }, 500));

    window.addEventListener('orientationchange', () => {
        console.log("Orientation changed; re-running listing logic after delay.");
        setTimeout(() => {
            updateExtremeButtons();
            hidePriceIfHigh();
        }, 1000);
    });
});


  
