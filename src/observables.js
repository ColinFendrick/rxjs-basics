import { Observable } from 'rxjs';

const observable = new Observable(
	subscriber => {
		subscriber.next('My First Observable');
	}
);

export default observable.subscribe(x => console.log(x));
