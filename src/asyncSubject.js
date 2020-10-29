// In the case of AsyncSubject the last value called is passed to the subscriber
// and it will be done only after complete() method is called.
import { AsyncSubject } from 'rxjs';

import { logger } from './helpers';

export default (() => {
	const log = logger('asyncSubject.js');
	// construct our log functions so we can pass in something which handles callbacks
	const [aLog, bLog] = ['A', 'B'].map(x => log(`Testing Async Subject ${x}: `));

	const asyncSubject = new AsyncSubject();

	asyncSubject.subscribe({
		next: aLog
	});

	asyncSubject.next(1); // gets overridden by the next call
	asyncSubject.next(2);
	asyncSubject.complete();
	asyncSubject.subscribe({
		next: bLog
	});
})();
