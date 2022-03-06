
# querystringify-ts

这个lib是根据 `https://github.com/unshiftio/querystringify` 转换成的TS

## Install

```sh
npm install querystringify-ts

```


## Usage

### Typescript
```js
import { stringify , parse } from 'querystringify-ts';

const params = {
    "foo" : "bar"
}

console.log(stringify(params));


```

### javascript

```js
import stringify = require('querystringify-ts').stringify;
// const { stringify, parse } = require('querystringify-ts');

const params = {
    "foo" : "bar"
}

console.log(stringify(params));
```

### qs.parse()

The parse method transforms a given query string in to an object. Parameters
without values are set to empty strings. It does not care if your query string
is prefixed with a `?`, a `#`, or not prefixed. It just extracts the parts
between the `=` and `&`:

```js
qs.parse('?foo=bar');         // { foo: 'bar' }
qs.parse('#foo=bar');         // { foo: 'bar' }
qs.parse('foo=bar');          // { foo: 'bar' }
qs.parse('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
qs.parse('foo&bar=foo');      // { foo: '', bar: 'foo' }
```

### qs.stringify()

This transforms a given object in to a query string. By default we return the
query string without a `?` prefix. If you want to prefix it by default simply
supply `true` as second argument. If it should be prefixed by something else
simply supply a string with the prefix value as second argument:

```js
qs.stringify({ foo: bar });       // foo=bar
qs.stringify({ foo: bar }, true); // ?foo=bar
qs.stringify({ foo: bar }, '#');  // #foo=bar
qs.stringify({ foo: '' }, '&');   // &foo=
```

## License

MIT
