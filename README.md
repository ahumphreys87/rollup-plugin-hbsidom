# rollup-plugin-hbsidom

[Rollup](https://github.com/rollup/rollup) plugin to compile handlebar templates to IncrementalDOM.

## Install

```sh
npm i rollup-plugin-hbsidom -D
```

## Usage

```js
import { rollup } from 'rollup';
import hbsIdom from 'rollup-plugin-hbsidom';

rollup({
	entry: 'main.js',
	plugins: [
		hbsIdom()
	]
});
```

```mustache
<p>Hello {{name}}</p>
```

import the template.
```js
import template from 'template.hbs';

console.log(template({name:'world'}))
```

## Example

```js
import { rollup } from 'rollup';
import hbsIdom from 'rollup-plugin-hbsidom';
import babel from 'rollup-plugin-babel';
import { minify } from 'uglify-js';

rollup({
	entry: 'main.js',
	plugins: [
		hbsIdom()
	]
});
```

# License

MIT ©
