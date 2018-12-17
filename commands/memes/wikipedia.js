const Commando = require('discord.js-commando');

class DonateWikipediaCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'donate',
           group: 'memes',
           memberName: 'donate',
           description: 'Wikipedia deserves the 3$, please donate.'
       });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0)
        {
            message.channel.send({files: ["./images/donate.jpg"]});
        }
        else if(chance == 1)
        {
            message.channel.send("Come on man. Wikipedia really needs your money. Be honest, you use it basically every day, but they can't sustain themselves without some money... Come on " + message.author + " I know you want to give some... 3$ is enough, so please just do it.");
        }
        else 
        {
            message.channel.send({files: ["./images/wikipedia.jpg"]});
        }
    }
}

module.exports = DonateWikipediaCommand;
