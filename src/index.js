/* Methods available on strings */

const a = "Sun";
console.log(a);

const b = a.charAt(0);
console.log(b); // S

const c = "I\'m the sun";
const d = c.endsWith('sun');
console.log(d); // true

const e = c.startsWith('sun');
console.log(e); // false

const f = c.indexOf('sun');
console.log(f); // 8

const g = c.indexOf('earth');
console.log(g); // -1

const h = c.replace('sun', 'moon');
console.log(h); // I'm the moon

const i = c.search('sun');
console.log(i); // 8

const j = c.slice(2, -1);
console.log(j); // m the su

const k = c.trim();
console.log(k); // I'm the sun

const l = "sun, earth, moon";
const m = l.split(",");
console.log(m);
