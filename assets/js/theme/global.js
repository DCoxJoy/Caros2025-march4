import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';

import haloStickyNotificationBar from './themevale/haloStickyNotificationBar';

/*=========================================
=            www.themevale.com            =
=========================================*/
import themevale_Global from './themevale/themevale_Global';
import themevale_AddToCart from './themevale/themevale_AddToCart';
import themevale_RecentlyBought from './themevale/themevale_RecentlyBought';
import themevale_Sticky from './themevale/themevale_StickyNavigation';
import themevaleMultilevelCategoryFilter from './themevale/themevale_MultiLevelCategoryFilter';
import haloQuickAddWishlist from './themevale/haloQuickAddWishlist';
import haloAskAnExpertPopup from './themevale/haloAskAnExpertPopup';

import themevaleMenu from './themevale/themevale_MegaMenu';
    window.themevaleMenu = themevaleMenu;
    
import themevaleNewsletterPopup from './themevale/themevale_NewsletterPopup';
    window.themevaleNewsletterPopup = themevaleNewsletterPopup;
    
/*=====  End of www.themevale.com  ======*/ 


export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        cartPreview(this.context.secureBaseUrl, this.context.cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        // loadingProgressBar();
        svgInjector();
        haloAskAnExpertPopup(this.context);
        themevale_Global();
        themevale_Sticky(this.context);
        themevale_AddToCart();
        themevale_RecentlyBought(this.context);
        themevaleMultilevelCategoryFilter();

        window.themeSettings = this.context.themeSettings;
        const $context = this.context;
        if ($context.themeSettings.halo_sticky_notification_bar) {
            haloStickyNotificationBar(1, true);
        }
        else {
            haloStickyNotificationBar(1, false);
        }
        haloQuickAddWishlist($context);
    }
}


