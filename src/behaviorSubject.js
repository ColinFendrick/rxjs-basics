// Behaviour subject will give you the latest value when called.
import { BehaviorSubject } from 'rxjs';
import { logger } from './helpers'

const behaviorSubject = new BehaviorSubject('Testing Behaviour Subject');
// 0 is the initial value

export default (() => {
	const log = logger('behaviorSubject.js');
	const [aLog, bLog] = ['A', 'B'].map(x => log(`observer${x}: `));
	behaviorSubject.subscribe({
		next: aLog
	});

	behaviorSubject.next('Hello');
	behaviorSubject.subscribe({
		next: bLog
	});
	behaviorSubject.next('Last call to Behaviour Subject');
})();
