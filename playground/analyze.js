const path = require('path');
const babel = require("@babel/core");

// Warm up babel - first usage is slow (probably starts a node process internally)
babel.transformFileSync(path.resolve(__dirname, '../es6-src/es6-module.js'));

const options =  {
    sourceType: "module",
    ast: true,
};

module.exports = function(filename) {
    const start = process.hrtime();
    const result = babel.transformFileSync(filename, options);
    const [seconds, nano] = process.hrtime(start);
    const executionTime = `${seconds}.${Math.round((nano / 1000000))}ms`;

    return {
        ...result,
        executionTime,
    };
};
