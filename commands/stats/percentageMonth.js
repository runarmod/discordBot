const Commando = require('discord.js-commando');

class PercentageMonthCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'month',
            group: 'stats',
            memberName: 'month',
            description: 'Returns the percentage of current month completed.'
        });
    }

    async run(message, args) {
        var d = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var maaned = monthNames[d.getMonth()]
        var aar = d.getFullYear();

        var dt = new Date(`${maaned} 1, ${aar} 00:00:00`);
        var lastedMill = d - dt;
        var totalMill = 30 * 24 * 60 * 60 * 1000;
        var prosent = lastedMill * 100 / totalMill;

        message.channel.sendMessage(`We are currently ${prosent}% done with ${maanded}.`);
    }
}

module.exports = PercentageMonthCommand;