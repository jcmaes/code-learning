// Method 1
const user = {
  firstname: "Tintin",
  lastname: "Milou",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(user.fullname());

// Method 2
const user2 = {
  firstname: "Bob",
  lastname: "Bobette",
  get fullname() {
    return this.firstname + " " + this.lastname;
  },
  set fullname(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
};

user.fullname = "foo bar";

console.log(user2.fullname);

// Method 3
const user3 = {
  firstname: "Tom",
  lastname: "Jerry",
};

Object.defineProperty(user, "fullname", {
  get: function () {
    return this.firstname + " " + this.lastname;
  },
  set() {
    [this.firstname, this.lastname] = value.split(" ");
  },
  enumerable: true,
  writable: true,
});

const descriptor = Object.getOwnPropertyDescriptor(user, fullname);

console.log(descriptor);
console.log(user.fullname);
