/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 * @description
 *  qs.parse('?foo=bar');         // { foo: 'bar' }
    qs.parse('#foo=bar');         // { foo: 'bar' }
    qs.parse('foo=bar');          // { foo: 'bar' }
    qs.parse('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
    qs.parse('foo&bar=foo');      // { foo: '', bar: 'foo' }
 */
declare function querystring(query: string): {
    [k: string]: any;
};
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
declare function querystringify(obj: {
    [k: string]: any;
}, prefix: string): string;
export declare const stringify: typeof querystringify;
export declare const parse: typeof querystring;
export {};
