const Commando = require('discord.js-commando');

class ServersStatsCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'servers',
            group: 'stats',
            memberName: 'servers',
            description: 'Says how many servers this bot serves.'
        });
    }

    async run(message, args) {
        /*doesnt do anything, its just for 'help */
    }
}

module.exports = ServersStatsCommand;