const Commando = require('discord.js-commando');

class UsersStatsCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'users',
            group: 'stats',
            memberName: 'users',
            description: 'Says how many users this bot serves.'
        });
    }

    async run(message, args) {
        /*doesnt do anything, its just for 'help */
    }
}

module.exports = UsersStatsCommand;