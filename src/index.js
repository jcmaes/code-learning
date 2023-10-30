// Example 1
// Old method without Class
function Bar(name) {
  this.name = name;
}

Bar.prototype.hello = function () {
  console.log("Hello !");
};

Bar.prototype.hi = function () {
  console.log("Hi !");
};

const bar = new Bar("bar");
console.log(bar); // Bar {name: "bar"}

// New method with Class
class Foo {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log("Hello !");
  }

  hi() {
    console.log("Hi !");
  }
}

const foo = new Foo("foo");
console.log(foo); // Foo {name: ""foo"}

// Example 2
// Old method without Class
const Bar2 = function (name) {
  this.name = name;
};

Bar2.prototype.hello = function () {
  console.log("Hello !");
};

Bar2.prototype.hi = function () {
  console.log("Hi !");
};

const bar2 = new Bar("bar2");
console.log(bar2); // Bar {name: "bar2"}

// New method with Class
const Foo2 = class {
  constructor(name) {
    this.name = name;
    // this.test = null;
  }

  get doubleName() {
    return this.name + "-" + this.name;
  }

  set changeName(value) {
    this.name = value;
  }

  hello() {
    console.log("Hello !");
  }

  hi() {
    console.log("Hi !");
  }
};

const foo2 = new Foo2("foo2");

// foo.changeName = "Oof";

console.log(foo2.doubleName); // foo-foo
console.log(foo2); // Foo {name: ""foo2"}
