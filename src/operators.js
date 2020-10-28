/*
	An operator is a pure function which takes in observable as input
	and the output is also an observable.

	To work with operators we need a pipe() method.
*/

import { of } from 'rxjs';
import { reduce, filter } from 'rxjs/operators';

const test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const case1 = test1.pipe(
	filter(x => x % 2 === 0),
	reduce((acc, one) => acc + one, 0)
);

export default case1.subscribe(x => console.log('operators.js:', x)); // 30

/*
	check https://www.tutorialspoint.com/rxjs/rxjs_operators.htm for full list of operators
*/
