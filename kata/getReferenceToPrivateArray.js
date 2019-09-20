// You need to write a function that takes SafeVector instance as its only argument
// and returns reference to array inside it; you can mutate the instance.
// function SafeVector(initValues = []) {
//     const array = initValues; // <-- GET REFERENCE TO THIS!
//     this.store = (index, value) => array[index] = value;
//     this.push = (val) => array.push(val);
//     this.get = (index) => array[index];
// }
// const v = new SafeVector()

Array.prototype.push = function() {
    return this;
};

function SafeVector(initValues = ['what you want']) {
    const array = initValues; // <-- GET REFERENCE TO THIS!
    this.store = (index, value) => array[index] = value;
    this.push = (val) => array.push(val);
    this.get = (index) => array[index];
};

const v = new SafeVector();

const getAccessToArray = (v) => v.push();

const result = getAccessToArray(v);

console.log('result', result);
