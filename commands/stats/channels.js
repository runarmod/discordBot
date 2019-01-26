const Commando = require('discord.js-commando');

class ChannelsStatsCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'channels',
            group: 'stats',
            memberName: 'channels',
            description: 'Says how many channels this bot serves.'
        });
    }

    async run(message, args) {
        /*doesnt do anything, its just for 'help */
    }
}

module.exports = ChannelsStatsCommand;