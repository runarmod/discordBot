const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "'"
    });
const TOKEN = 'NDk4OTQ0NzI2MjA1MDcxMzcw.DvAZjg.DN6NzTbsXRPlMVphQjTjfRwRwEM'
var forbidden = ["yeet"];

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('memes', 'Memes');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', message => {
    if(message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('hei'))
    {
        message.channel.sendMessage('Hi ' + message.author + ', how are you?');
    }
    else if(message.content.toLowerCase().includes('burn'))
    {
        message.channel.send({files: ["./images/burn.gif"]});
    }
    else if(message.content.toLowerCase().includes(': o') || message.content.includes(':0') || message.content.includes(': 0'))
    {
        message.channel.send({files: ["./images/oh.png"]});
    }
    else if(message.content.toLowerCase().includes('wut'))
    {
        message.channel.send({files: ["./images/oh.jpg"]});
    }
    else if(message.content.toLowerCase().includes('sprite cranberry'))
    {
        message.channel.send({files: ["./images/spriteCranberry.jpg"]});
    } 
    else if(message.content.toLowerCase().includes(forbidden))
    {
        if(message.author.id !== '498944726205071370')
        {
            var newSentence = message.content.replace(forbidden, "\*\*\*");
            message.delete(5000);
            message.channel.send(':open_mouth:, ' + message.author + ' tried to say the forbidden word... I will delete his message in 5 seconds! Here is what he was trying to say: "' + newSentence + '"');
        }
    }
});

bot.on('ready', function(){
    console.log('ready');
    bot.user.setActivity("'help")
});

bot.login(TOKEN);