const requireDir = require('require-dir')
const _ = require('lodash');
const paths = requireDir('.', {
    filter: (fullPath) => !fullPath.endsWith('index.js'),
    mapValue: (obj, key) => obj[key],
})
module.exports = paths;
