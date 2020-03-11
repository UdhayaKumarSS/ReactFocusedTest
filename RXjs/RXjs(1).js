// 2) If you have an array of values in a stream and you wish to pipe it such that it will emit the arrays values individually, one by one and wait for them all to be completed before processing another array, how would you do this?  Please provide a code example.
// E.g.
// [1,2] -> [3,4] -> [5,6,7]
// Should produce:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

// Answer : 

import { from, concat } from 'rxjs';

const mergedLastestArray = concat([1,2],[3,4],[5,6,7])
const arraySource = from(mergedLastestArray);
const subscribe = arraySource.subscribe(val => console.log(val));

