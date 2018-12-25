const Commando = require('discord.js-commando');

class KillHimCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'kill',
           group: 'memes',
           memberName: 'kill',
           description: 'Tries to kill tagged user!'
       });
    }

    async run(message, args)
    {
        if(message.content.includes(message.author))
        {
            message.channel.sendMessage('Sorry, but I will not give you permission to kill yourself ' + message.author + '. Sorry :/');
        }
        else
        {
            message.channel.sendMessage('Ahh, that backfired... I killed ' + message.author + ' instead. Oops :/');
        }
    }
}

module.exports = KillHimCommand;
