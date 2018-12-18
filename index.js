const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "'"
    });
const TOKEN = process.env.token;
let forbidden = ["yeet", "yee t", "ye et", "y eet", "y e e t", "y ee t", "y  e  e  t", "y.e.e.t", "y. e. e. t"];


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('memes', 'Memes');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', message => {
    if(message.content.toLowerCase().includes('hello'))
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
    else if(message.content.toLowerCase().startsWith("i'm"))
    {
        var newMessageDadJokeEnglish = message.content.toLowerCase().replace("i'm ", "");
        message.channel.send('Hi "' + newMessageDadJokeEnglish + '", i am a bot. Greetings Dad.')
    }
    else if(message.content.toLowerCase().startsWith("im"))
    {
        var newMessageDadJokeEnglish = message.content.toLowerCase().replace("im ", "");
        message.channel.send('Hi "' + newMessageDadJokeEnglish + '", i am a bot. Greetings Dad.')
    }
    else if(message.content.toLowerCase().startsWith("i am"))
    {
        var newMessageDadJokeEnglish = message.content.toLowerCase().replace("i am ", "");
        message.channel.send('Hi "' + newMessageDadJokeEnglish + '", i am a bot. Greetings Dad.')
    }
    else if(message.content.toLowerCase().startsWith("jeg er ", ""))
    {
        var newMessageDadJokeNorwegian = message.content.toLowerCase().replace("jeg er ", "");
        message.channel.send('Hei "' + newMessageDadJokeNorwegian + '", jeg er en robot. Hilsner Pappa.')
    }
    
    for (var i in forbidden)
    {
        if (message.content.toLowerCase().includes(forbidden[i].toLowerCase()))
        {
            if(message.author.id !== '498944726205071370' || message.author.id !== '514791363032776704')
            {
                var newSentenceForbidden = message.content.toLowerCase().replace(forbidden[i], "[forbidden word]");
                message.delete(5000);
                message.channel.send(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I will delete his message in 5 seconds!');
            }
        }
    }
});

bot.on('ready', function(){
    console.log('ready');
    bot.user.setActivity("'help")
    bot.channels.get("523176389591957524").send("My code just got updated!")
});

bot.login(TOKEN);
