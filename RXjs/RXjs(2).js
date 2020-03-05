import { Subject } from "rxjs";

const stream = [1, 2, 3, 4];
const output = [];
const sub = new Subject();
sub.subscribe(i => {
  output.push(i);
  console.log(output);
  return output;
});
stream.forEach(input => {
  sub.next(input);
});
