const _ = require('lodash');
const elements = require('./landingPage/elements')
const commands = require('./landingPage/commands')
const actualCommands = _.omit(commands, ['name']);
module.exports = {
    elements,
    commands: [actualCommands]
}
