const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "'"
    });
const TOKEN = process.env.token;
let forbidden = ["yeet", "y33t"];


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
    else if(message.content.toLowerCase() == 'burn')
    {
        message.delete();
        message.channel.send({files: ["./images/burn.gif"]});
    }
    else if(message.content.toLowerCase() == ': o' || message.content.replace(" ", "") == ':0')
    {
        message.delete();
        message.channel.send({files: ["./images/oh.png"]});
    }
    else if(message.content.toLowerCase() == 'wut')
    {
        message.delete();
        message.channel.send({files: ["./images/oh.jpg"]});
    }
    else if(message.content.toLowerCase().includes('sprite cranberry'))
    {
        message.channel.send({files: ["./images/sprite.gif"]});
    }
    //Dette er en test og jeg vet ikke om det fungerer!
    for (var i in forbidden)
    {
        if (message.content.replace(/\s/g, "").replace(/\W/g, "").toLowerCase().includes(forbidden[i]))
        {
            var nySetning = message.content.replace(message.content.replace(/\s/g, "").replace(/\W/g, "").toLowerCase())
            if(message.author.id !== '498944726205071370' || message.author.id !== '514791363032776704')
            {
                var forbiddenBeingSaid = forbidden[i];
                var newSentenceForbidden = message.content.replace(/\s/g, "").replace(/\W/g, "").toLowerCase().replace(forbidden[i], "[forbidden word]");
                message.channel.send(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I will delete his message in 5 seconds!').then(msg => {
                    let counter = 5;
                    var editeMelding = setInterval(() =>{
                        if(counter == 1)
                        {
                            message.delete();
                            clearInterval(editeMelding);
                            msg.edit(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I have now deleted the message!');
                        }
                        if(counter > 1)
                        {
                            counter--;
                            msg.edit(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I will delete his message in ' + counter + ' seconds!');
                        }
                    }, 1000);
                });
            }
        }
    }
});

bot.on('ready', function(){
    console.log('ready');
    bot.user.setActivity("'help")
    bot.channels.get("523176389591957524").send("My code just got updated!");
    
    var millisTillNewYear = new Date(2019, 0, 1, 0, 0).getTime() - Date.now();
    setTimeout(function(){
        bot.channels.get("340849877254799361").send('@everyone, HAPPY NEW YEAR!!!');
        bot.channels.get("520254027808768015").send('@everyone, HAPPY NEW YEAR!!!');
    }, millisTillNewYear);
});

bot.login(TOKEN);
