/* Import */

// Example 1
import { a, b, hello } from './lib.js';
import { c as x } from './lib.js';

// Example 2
import * as obj from './lib.js';

// Example 3
import j, { k, l  } from './lib.js';

// Example 4
import './lib.js';

const c = 'test';

console.log(a);
console.log(b);
console.log(hello);

hello();

console.log(x);

console.log(obj.a);
console.log(obj.b);
console.log(obj.hello);

obj.hello();

console.log(j);
console.log(k);
console.log(l);

j();
