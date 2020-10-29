import { Observable } from 'rxjs';

import { logger } from './helpers'
const log = logger('execute-observable.js');

const observer = new Observable(
	async subscriber => {
		try {
			subscriber.next('My First Observable');
			subscriber.next('Testing Observable');
			subscriber.complete();
		} catch (e) {
			subscriber.error(e);
		}
	}
);

// subscribe(next, error, complete) callbacks
export default observer.subscribe(
	x => log()(x),
	(e) => log('error:')(e),
	() => log('Observable is complete')()
);
