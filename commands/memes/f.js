const Commando = require('discord.js-commando');

class FChatCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'f',
           group: 'memes',
           memberName: 'f',
           description: 'Pays respect!'
       });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 5);
        if(chance == 0)
        {
            message.channel.send({files: ["./images/f1.jpg"]});
        }
        else if(chance == 1)
        {
            message.channel.send({files: ["./images/f2.jpg"]});
        }
        else if(chance == 2)
        {
            message.channel.send({files: ["./images/f3.jpg"]});
        }
        else if(chance == 3)
        {
            message.channel.send({files: ["./images/f4.jpg"]});
        }
        else 
        {
            message.channel.send({files: ["./images/f5.jpg"]});
        }
    }
}

module.exports = FChatCommand;