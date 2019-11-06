const Commando = require('discord.js-commando');

class PercentageYearCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'year',
            group: 'stats',
            memberName: 'year',
            description: 'Returns the percentage of current year completed.'
        });
    }

    async run(message, args) {
        var d = new Date();
        var aar = d.getFullYear();

        var dt = new Date(`January 1, ${aar} 00:00:00`);
        var lastedMill = d - dt;
        var totalMill = 365 * 24 * 60 * 60 * 1000;
        var prosent = lastedMill * 100 / totalMill;

        message.channel.sendMessage(`We are currently ${prosent}% done with ${aar}.`);
    }
}

module.exports = PercentageYearCommand;