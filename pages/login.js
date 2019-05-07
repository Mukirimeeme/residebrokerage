
const _ = require('lodash');
const elements = require('./login/elements')
const commands = require('./login/commands')
const actualCommands = _.omit(commands, ['name']);
module.exports = {
    elements,
    commands: [actualCommands]
}
