import { from } from 'rxjs';
import { max } from 'rxjs/operators';

const list1 = [1, 6, 15, 10, 58, 2, 40];

export default from(list1).pipe(max((a, b)=>a - b)).subscribe(x => console.log(
	`The Max value is ${x}`
));
