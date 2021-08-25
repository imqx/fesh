import pkg from '../package.json';

/**
 * Current Version of this Lib
 * @public
 */
export const version = pkg.version;

export * from './constants/conclusions';
export * from './constants/mappings';
export * from './constants/orders';
export * from './constants/texts';

export * from './indicator/geo';
