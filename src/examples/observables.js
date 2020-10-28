import { Observable } from 'rxjs';

const observable = Observable.create(
	function subscribe(subscriber) {
		subscriber.next('My First Observable');
	}
);

observable.subscribe(x => console.log(x));
