import PageManager from './page-manager';
import haloAZBrands from './themevale/themevale_AZbrands';

export default class Brands extends PageManager {
    constructor(context) {
        super(context);
    }
    
	onReady() {
		haloAZBrands(this.context);
    }
}
