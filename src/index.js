/* Set or link this */

const a = {
    foo: "not bar"
};

const b = {
    foo: "bar",
    fn() {
        function c() {
            console.log(this);
        }
        c.call(this); // foo: "bar"
        c.call(a); // foo: "not bar"
    }
};
b.fn();

const d = {
    name: "Jean",
    lastName: "Louis"
};

function hello(lang) {
    if (lang === "fr") {
        console.log(`bonjour: ${ this.name + this.lastName}`);
    } else {
        console.log(`hi: ${ this.name + this.lastName}`);
    }
}

hello.call(d, "fr"); // bonjour: JeanLouis
hello.apply(d, ["fr"]); // bonjour: JeanLouis

const e = hello.bind(d);
e("fr"); // bonjour: JeanLouis
