const path = require("path");
const babel = require("@babel/core");

const filename =  path.resolve(__dirname, "../es6-src/es6-module.js");

const options =  {
    sourceType: "module",
    ast: true,
};

console.time('Babel File Transform');

const result = babel.transformFileSync(filename, options);

console.timeEnd('Babel File Transform');

console.log('Result: ', result);
