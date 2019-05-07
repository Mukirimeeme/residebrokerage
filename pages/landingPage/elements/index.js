const requireDir = require('require-dir')

module.exports = requireDir('.', {
    filter: (fullPath) => !fullPath.endsWith('index.js'),
    mapValue: (value) => ({
        selector: value[0],
        locateStrategy: value[1]
    })
})
