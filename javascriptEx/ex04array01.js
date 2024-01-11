let array = [];

array[3] = 100;

console.log(array); // [ <3 empty items>, 100 ] => [undefined, undefined, undefined , 100] empth = undefined

array = [1, '2', true, NaN, {}, [100, 203, 12, 123], [], 12.123123, undefined,
  null, function test() { console.log("hello") }];

console.log(array);
console.log(array[array.length - 1]);
array[array.length - 1]();

console.log(array[0]);
console.log(array[2]);
console.log(array[3]);

console.log('----------')

for (let i = 0; i < array.length; i += 1) {
  console.log(` index ${i} = ${array[i]}`);
}

array[-1] = "test";
console.log(array[-1]);

let arr = new Array(); // let arr = []

arr = new Array(3); // [undefined , undefined , undefined] 
console.log(arr);