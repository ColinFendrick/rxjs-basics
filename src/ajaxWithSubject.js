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

import { logger } from './helpers';

export default (() => {
	const log = logger('ajaxWithSubject.js')();
	const testSub = new Subject();

	testSub.subscribe({
		next: log
	});
	testSub.subscribe({
		next: log
	});

	const finalVal = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(({ response }) => response));
	finalVal.subscribe(testSub);
})();
