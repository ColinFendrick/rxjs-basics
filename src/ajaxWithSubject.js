/*
Now, here the problem is, we want the same data to be shared, but not, at the cost of 2 Http calls.
We want to make one Http call and share the data between subscribers.

This will be possible using Subjects.
It is an observable that can multicast i.e.talk to many observers.
It can share the value between subscribers.
*/

import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export default (() => {
	const testSub = new Subject();

	testSub.subscribe({
		next: v => console.log(`ajaxWithSubject: ${v}`)
	});
	testSub.subscribe({
		next: v => console.log(`ajaxWithSubject: ${v}`)
	});

	const finalVal = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(({ response }) => response));
	finalVal.subscribe(testSub);
})();
