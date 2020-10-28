import { Observable } from 'rxjs';

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
	x => console.log('execute-observable.js:', x),
	(e) => console.log('execute-observable.js error:', e),
	() => console.log('execute-observable.js completed: Observable is complete')
);
