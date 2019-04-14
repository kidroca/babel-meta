const fs = require('fs');
const path = require('path');
const analyze = require('./analyze');

const dirname = process.argv.slice().pop();

const files = fs.readdirSync(dirname);

files.forEach(f => {

    console.log('########################');
    console.log('File: ', f);
    console.log('------------------------');
    console.log('Result: ');
    console.log('------------------------');
    const result = analyze(path.join(dirname, f));
    console.log(result);
    console.log('########################');

});
