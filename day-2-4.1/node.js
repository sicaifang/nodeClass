console.log(111);
//alert(111);
// console.log(global);
console.error(222);
console.dir(333);
console.time('a');
for (var i = 0; i < 1000; i++) {
}
console.timeEnd('a');
console.log(arguments);
console.log(exports);
var a = 1;


function sum() {
    return Array.from(arguments).reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4, 5));

let sumArrFn = arguments => Array.from(arguments).reduce((prev, next) => prev + next);

console.log(sumArrFn(1, 2));