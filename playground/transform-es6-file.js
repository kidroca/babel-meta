const path = require("path");
const babel = require("@babel/core");

console.time('Babel File Transform');

const res = babel.transformFileSync(
    path.resolve(__dirname, "../es6-src/es6-module.js"),
    { sourceType: "module", ast: true }
);

console.timeEnd('Babel File Transform');

console.log('Result: ', res);
