// Currying a function.
// From: https://javascript.info/currying-partials
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

console.log("Hello");

let x = 1;
let y = 2;
let z = 3;

let res = sum(x, y, z);

console.log(res);

let sum_c = curry(sum);

let res_c = sum_c(x)(y)(z);

console.log(res_c);
