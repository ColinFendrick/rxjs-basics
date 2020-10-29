/*
An observable will talk one to one - the subscriber.
Anytime you subscribe to the observable the execution will start from scratch.
Take an Http call made using ajax, and 2 subscribers calling the observable.
You will see 2 HttpHttp requests in the browser network tab.
*/

import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { logger } from './helpers';

export default (() => {
	const log = logger('ajax.js')();
	const finalVal = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(({ response }) => response));
	finalVal.subscribe(log);
	finalVal.subscribe(log);
})();
