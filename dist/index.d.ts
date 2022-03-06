/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 * @description qs.parse('?foo=bar');         // { foo: 'bar' }
 * @description qs.parse('#foo=bar');         // { foo: 'bar' }
 * @description qs.parse('foo=bar');          // { foo: 'bar' }
 * @description qs.parse('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
 * @description qs.parse('foo&bar=foo');      // { foo: '', bar: 'foo' }
 */
declare function querystring(query: string): {
    [k: string]: any;
};
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix. 分割前缀符号
 * @returns {String}
 * @description qs.stringify({ foo: bar });       // foo=bar
 * @description qs.stringify({ foo: bar }, true); // ?foo=bar
 * @description qs.stringify({ foo: bar }, '#');  // #foo=bar
 * @description qs.stringify({ foo: '' }, '&');   // &foo=
 * @api public
 */
declare function querystringify(obj: {
    [k: string]: any;
}, prefix: string): string;
export declare const stringify: typeof querystringify;
export declare const parse: typeof querystring;
export {};
