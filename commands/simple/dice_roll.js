const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided die, or you could specify how many sides it should have.'
        });
    }

    async run(message, args) {
        if (args == "") {
            var diceRoll = Math.floor(Math.random() * 6) + 1;
            message.reply('your dice landed on ' + diceRoll)
        }
        else {
            var diceRoll = Math.floor(Math.random() * args) + 1;
            var stringRoll = diceRoll.toString();
            if (stringRoll != "NaN") {
                message.reply('Your dice landed on ' + diceRoll)
            }
            else {
                message.reply("you can't roll an \"" + args + "\" sided die... Try again")
            }
        }
    }
}

module.exports = DiceRollCommand;
