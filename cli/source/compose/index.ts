import {
	product,
	priceItem,
	feature,
	featureItem,
	pricedFeatureItem,
} from './builders/builderFunctions.js';
import {Feature, Product} from './models/composeModels.js';
import {ProductItem} from './models/productItemModels.js';

export {product, priceItem, feature, featureItem, pricedFeatureItem};

export type {Feature, Product, ProductItem};
export type Infinity = 'infinity';

// CLi types

export type AutumnConfig = {
	products: Product[];
	features: Feature[];
};
