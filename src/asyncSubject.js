// In the case of AsyncSubject the last value called is passed to the subscriber
// and it will be done only after complete() method is called.
import { AsyncSubject } from 'rxjs';

export default (() => {
	const asyncSubject = new AsyncSubject();

	asyncSubject.subscribe({
		next: v => console.log(`asyncSubject.js: Testing Async Subject A: ${v}`)
	});

	asyncSubject.next(1); // gets overridden by the next call
	asyncSubject.next(2);
	asyncSubject.complete();
	asyncSubject.subscribe({
		next: v => console.log(`asyncSubject.js: Testing Async Subject B: ${v}`)
	});
})();
