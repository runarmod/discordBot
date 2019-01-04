const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "'"
    });
const TOKEN = process.env.token;
let forbidden = ["yeet"];


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

    var utenSpaceTegnUnder = message.content.replace(/3|\ud83c\uddea|\u03B5|\u0395|\u0045|\u24BA|\uFF25|\u00C8|\u00C9|\u00CA|\u1EC0|\u1EBE|\u1EC4|\u1EC2|\u1EBC|\u0112|\u1E14|\u1E16|\u0114|\u0116|\u00CB|\u1EBA|\u011A|\u0204|\u0206|\u1EB8|\u1EC6|\u0228|\u1E1C|\u0118|\u1E18|\u1E1A|\u0190|\u018E|\u0065|\u24D4|\uFF45|\u00E8|\u00E9|\u00EA|\u1EC1|\u1EBF|\u1EC5|\u1EC3|\u1EBD|\u0113|\u1E15|\u1E17|\u0115|\u0117|\u00EB|\u1EBB|\u011B|\u0205|\u0207|\u1EB9|\u1EC7|\u0229|\u1E1D|\u0119|\u1E19|\u1E1B|\u0247|\u025B|\u01DD/gi, "e").replace(/\u0059|\ud83c\uddfe|\u24CE|\uFF39|\u1EF2|\u00DD|\u0176|\u1EF8|\u0232|\u1E8E|\u0178|\u1EF6|\u1EF4|\u01B3|\u024E|\u1EFE|\u0079|\u24E8|\uFF59|\u1EF3|\u00FD|\u0177|\u1EF9|\u0233|\u1E8F|\u00FF|\u1EF7|\u1E99|\u1EF5|\u01B4|\u024F|\u1EFF|\u03A5|\u03B3/gi, "y").replace(/\u03C4|\ud83c\uddf9|\u0054|\u24C9|\uFF34|\u1E6A|\u0164|\u1E6C|\u021A|\u0162|\u1E70|\u1E6E|\u0166|\u01AC|\u01AE|\u023E|\uA786|\u0074|\u24E3|\uFF54|\u1E6B|\u1E97|\u0165|\u1E6D|\u021B|\u0163|\u1E71|\u1E6F|\u0167|\u01AD|\u0288|\u2C66|\uA787/gi, "t").replace(/\s|\W|^|$|\_/g, "").toLowerCase();
    
    if(message.author.id !== '388082091432214538' && message.author.id !== '311548590776516609' && message.author.id !== '253219750455279616' && message.author.id !== '498944726205071370' && message.author.id !== '514791363032776704')
    {
        for (var i in forbidden)
        {
            if (utenSpaceTegnUnder.includes(forbidden[i]))
            {
                var forbiddenBeingSaid = forbidden[i];
                var newSentenceForbidden = utenSpaceTegnUnder.replace(new RegExp(forbidden[i], 'g'), "[forbidden word]");
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
    bot.user.setActivity("'help")
    bot.channels.get("523176389591957524").send("My code just got updated!");
    /*
    var millisTillNewYear = new Date(2020, 0, 1, 0, 0).getTime() - Date.now() - 3600000;
    setTimeout(function(){
        bot.channels.get("340849877254799361").send('@everyone, HAPPY NEW YEAR!!!');
        bot.channels.get("520254027808768015").send('@everyone, HAPPY NEW YEAR!!!');
    }, millisTillNewYear);
    
    //Crewman
        var agusta = new Date(2019, 0, 3, 0, 0).getTime() - Date.now();
        setTimeout(function(){
            bot.channels.get("340849877254799361").send('<@278584427674599424>, happy birthday!');
        }, agusta);

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
