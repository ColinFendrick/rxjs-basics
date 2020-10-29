/*
Here, is a simple example of how to subscribe to an observable.

The subscription has one method called unsubscribe().
A call to unsubscribe() method will remove all the resources used
for that observable i.e. the observable will get canceled.
*/

import { of } from 'rxjs';
import { count } from 'rxjs/operators';

import { logger } from './helpers';

export default (() =>
	of(1, 7, 5, 10, 10, 20) // create numbers observable
		.pipe(count()) // pipe the observable through the count to return the number of elements in obsverable (6)
		.subscribe( // Subscribe to observable and send callback
			logger('subscribe.js')('The count is ')
		).unsubscribe())(); // Unsubscribe once we are done with the observable
