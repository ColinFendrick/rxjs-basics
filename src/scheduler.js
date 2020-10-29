// A scheduler controls the execution of when the subscription has to start

import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

import { logger } from './helpers';
const log = logger('scheduler.js')();

const observable = new Observable(subscriber => {
	subscriber.next('new observable');
	subscriber.next('testing new observable');
	subscriber.complete();
}).pipe(observeOn(asyncScheduler));

observable.subscribe(
	log, // This might be confusing in production, but this describes the next and error callbacks as identical
	log,
	() => log('Observable is complete')
);
