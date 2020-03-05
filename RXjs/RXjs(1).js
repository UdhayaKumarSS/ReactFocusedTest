import { Subject } from "rxjs";
const stream = [
  [1, 2],
  [3, 4],
  [5, 6, 7]
];
const sub = new Subject();
sub.subscribe(i => i.forEach(v => console.log(v)));
stream.forEach(input => {
  sub.next(input);
});
