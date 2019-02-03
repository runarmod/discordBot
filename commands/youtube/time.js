const Commando = require('discord.js-commando');
const request = require('request');

const { Client, RichEmbed } = require('discord.js');

class GapYoutubeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'time',
            group: 'youtube',
            memberName: 'time',
            description: 'Sends the time until T-series will pass PewDiePie'
        });
    }

    async run(message, args) {
        /*ingenting skjer*/

    }
}
module.exports = GapYoutubeCommand;