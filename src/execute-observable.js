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
export default observer.subscribe(x => console.log(x), (e) => console.log(e),
	() => console.log('Observable is complete'));
