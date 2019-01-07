const Commando = require('discord.js-commando');

class BotSendCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'botsend',
           group: 'mod',
           memberName: 'botsend',
           description: 'Makes the bot send a message in current channel. (for mods only)'
       });
    }

    async run(message, args)
    {
        let mods = ["388082091432214538"];
        if(mods.includes(message.author.id))
        {
            message.channel.send(args);
            message.delete();
        }
        else
        {
            message.channel.send(message.author + ", you don't have permission to use this command...")
            .then(msg => {
                message.delete(3000);
                msg.delete(3000);
            })
        }
    }
}

module.exports = BotSendCommand;
