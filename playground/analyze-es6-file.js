const analyze = require('./analyze');

const filename = process.argv.slice().pop();

const result = analyze(filename);

console.log('Result: ', result);
