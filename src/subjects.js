/*
A subject is an observable that can multicast - i.e. talk to many observers.
Consider a button with an event listener, the function attached to the event using
add listener is called every time the user clicks on the button.
Similar functionality goes for subject too.
*/

import { Subject  } from 'rxjs';

import { logger } from './helpers';

// The object is an observer that has three methods − next(v) error(e) complete()
const testSub = new Subject();

const log = logger('subject.js');

export default (() => {
	testSub.subscribe({
		next: log('first subscription: ')
	});
	testSub.subscribe({
		next: log('second subscription: '),
		complete: log('Subscription is completed'),
		error: log('Error occured: ')
	});

	testSub.next('A');
	testSub.next('B');
	// testSub.error('Custom error message would go here'); // Use this to throw an error
	testSub.complete(); // This prevents any further subscriptions
})();
