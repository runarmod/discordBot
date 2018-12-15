const Commando = require('discord.js-commando');

class ProfilePicCommand extends Commando.Command
{
    constructor(client)
    {
       super(client,{
           name: 'profilepic',
           group: 'simple',
           memberName: 'profilepic',
           description: 'Looks at your reflection in a mirror!'
       });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = ProfilePicCommand;