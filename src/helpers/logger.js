export default filename => (msg = '') => (v = '') =>
	console.log(`${filename ? `${filename}: ` : ''}${msg}${v}`); // create a currying function to handle the callback
