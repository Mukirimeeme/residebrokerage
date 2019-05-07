require('app-module-path').addPath(__dirname)
require('nightwatch/bin/runner.js')

const settings = require('./nightwatch.json')

module.exports = settings
