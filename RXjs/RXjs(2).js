// 3) If you have a stream that receives individual values and would like to pipe it such that it builds an array out of these values, emitting the updated array each time a new value is added to it, how would you do this?  Please provide a code example.
// E.g.
// 1 -> 2 -> 3 -> 4
// Should produce:
// [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]

// Answer : 
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { from } from 'rxjs';

const numbers = from([1,2,3,4]);
let someArray = [];
const finalArray= numbers.pipe(take(4));
 
 
finalArray.subscribe(x =>{
  someArray.push(x);
console.log(someArray)
});


// Alternative Way

import { interval, from } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);
let someArray = [];
const finalArray= numbers.pipe(take(4));
 
 
finalArray.subscribe(x =>{
  someArray.push(x + 1);
console.log(someArray)
});
