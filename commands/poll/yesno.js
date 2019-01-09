const Commando = require('discord.js-commando');
const { Client, RichEmbed } = require('discord.js');
const bot = new Commando.Client();

class PollCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'yesno',
           group: 'poll',
           memberName: 'yesno',
           description: 'Creates a poll with yes/no/maybe.'
       });
    }

    async run(message, args)
    {
        
        let question = args;

        if (args.length === 0)
        return message.reply("**Invalid Format:** `'Poll <Question>`")

        const poll = new RichEmbed()
        .setTitle("A Poll Has Been Started!")
        .setColor("#5599ff")
        .setDescription(`${question}`)
        .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`);
        
        message.guild.channels.find(channel => channel.name === "poll").send({embed: poll})
            .then(msg => {
                msg.react('👍')
                msg.react('👎')
                msg.react('🤷')
                message.delete()
            })
    }
}
module.exports = PollCommand;
