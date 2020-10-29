// Behaviour subject will give you the latest value when called.
import { BehaviorSubject } from 'rxjs';
const behaviorSubject = new BehaviorSubject('Testing Behaviour Subject');
// 0 is the initial value

export default (() => {
	behaviorSubject.subscribe({
		next: v => console.log(`behaviourSubject.js: observerA: ${v}`)
	});

	behaviorSubject.next('Hello');
	behaviorSubject.subscribe({
		next: v => console.log(`behaviourSubject.js: observerB: ${v}`)
	});
	behaviorSubject.next('Last call to Behaviour Subject');
})();
