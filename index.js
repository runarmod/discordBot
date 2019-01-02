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
    else if(message.content.toLowerCase() == 'dafuq')
    {
        message.delete();
        message.channel.send({files: ["./images/dafuq.gif"]});
    }
    else if(message.content.toLowerCase() == 'ree')
    {
        message.delete();
        message.channel.send({files: ["./images/ree.gif"]});
    }
    else if(message.content.toLowerCase() == 'whatshappening')
    {
        message.delete();
        message.channel.send({files: ["./images/whatshappening.gif"]});
    }
    else if(message.content.toLowerCase().includes('milk'))
    {
        message.channel.send({files: ["./images/milk.gif"]});
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
    /*
    var millisTillNewYear = new Date(2020, 0, 1, 0, 0).getTime() - Date.now() - 3600000;
    setTimeout(function(){
        bot.channels.get("340849877254799361").send('@everyone, HAPPY NEW YEAR!!!');
        bot.channels.get("520254027808768015").send('@everyone, HAPPY NEW YEAR!!!');
    }, millisTillNewYear);
    */
    //Crewman
        var agusta = new Date(2019, 0, 3, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@278584427674599424>, happy birthday!');
        }, agusta);
/*
        var joel = new Date(2019, 8, 17, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@253219750455279616>, happy birthday!');
        }, joel);

        var stian = new Date(2019, 4, 16, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@311548590776516609>, happy birthday!');
        }, stian);

        var ludvik = new Date(2019, 4, 4, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@173458260798603264>, happy birthday!');
        }, ludvik);

        var aironas = new Date(2019, 9, 20, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@183587540425506817>, happy birthday!');
        }, aironas);

        var mir = new Date(2019, 11, 22, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@228919875777593344>, happy birthday!');
        }, mir);

        var jonas = new Date(2019, 7, 28, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@133564191087919105>, happy birthday!');
        }, jonas);
    //Epic
        var vetle = new Date(2019, 9, 22, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("520254027808768015").send('<@163667503459991552>, happy birthday!');
        }, vetle);

        var jorgen = new Date(2019, 9, 31, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("520254027808768015").send('<@308665578174939136>, happy birthday!');
        }, jorgen);
        
        var scott = new Date(2019, vet, ikke, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("520254027808768015").send('<@261523858601934850>, happy birthday!');
        }, scott);
        
       var hansi = new Date(2019, 8, 11, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("520254027808768015").send('<@164350224440098816>, happy birthday!');
        }, hansi);

        var stibay = new Date(2019, 5, 16, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("520254027808768015").send('<@309311818390568960>, happy birthday!');
        }, stibay);
    */
});

bot.login(TOKEN);
