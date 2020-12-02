import { Observable } from 'rxjs';

import { logger } from './helpers';

const observable = new Observable(
	subscriber => {
		subscriber.next('My First Observable');
	}
);

export default observable.subscribe(x => logger('observables.js:')()(x));
