/*
A subject is an observable that can multicast - i.e. talk to many observers.
Consider a button with an event listener, the function attached to the event using
add listener is called every time the user clicks on the button.
Similar functionality goes for subject too.
*/

import { Subject  } from 'rxjs';

// The object is an observer that has three methods − next(v) error(e) complete()
const testSub = new Subject();
const logger = msg => (v = '') => console.log(`${msg}${v}`); // create a currying function to handle the callback

export default (() => {
	testSub.subscribe({
		// next: v => console.log(`first subscription - From Subject: ${v}`)
		next: logger('first subscription: ')
	});
	testSub.subscribe({
		next: logger('second subscription: '),
		complete: logger('Subscription is completed'),
		error: logger('Error occured: ')
	});

	testSub.next('A');
	testSub.next('B');
	// testSub.error('Custom error message would go here'); // Use this to throw an error
	testSub.complete(); // This prevents any further subscriptions
})();
