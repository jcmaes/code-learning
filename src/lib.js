/* Export */

// Named export

// Simple export
export let a;
export let b = 'b';
export function hello() {
    console.log('hello');
}
export const obj = {};

// Multiple export
let c = 'c';
let d = 'd';
let e = 'e';

export { c, d, e }

// Rename variable
export { c as f, d as g, e as h }

const i = {
    foo: 'bar'
}

export const { foo } = i;

// Export by default
export default function j() {};

let k = 'k';
let l = 'l';
let m = 'm';

const defaultObj = {}

export { k, l, m, defaultObj as default }