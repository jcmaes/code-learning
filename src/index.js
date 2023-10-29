const foo = {
  test: 1,
};

console.log(Object.entries(foo));

// Object.freeze(foo);
// delete foo.test;

// Object.preventExtensions(foo);
// foo.test = 2;

foo.test = 3;
Object.seal(foo);
foo.test = 4;
console.log(foo);
delete foo.test; //Cannot delete property
