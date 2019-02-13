const Commando = require('discord.js-commando');
const path = require('path');
const request = require('request');
const bot = new Commando.Client({
    commandPrefix: "'",
    owner: '388082091432214538',
    unknownCommandResponse: false
});
const TOKEN = process.env.token;
const apikey = process.env.youtubeapi;
let forbidden = ["yeet", "yeeet", "yeeeet", "yeeeeet", "yeeeeeet", "yeeeeeeet", "yeeeeeeet", "yeeeeeeeet", "yeeeeeeeeet", "yeeeeeeeeeet", "yeeeeeeeeeeet"];

bot.registry
    .registerGroups([
        ['simple', 'Simple'],
        ['music', 'Music'],
        ['memes', 'Memes'],
        ['poll', 'Poll'],
        ['mod', 'Mod'],
        ['stats', 'Stats'],
        ['youtube', 'Youtube']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, '/commands'));

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content == bot.commandPrefix + "users") {
        message.reply(`I am currently serving ${bot.users.size} users.`);
    }
    else if (message.content == bot.commandPrefix + "channels") {
        message.reply(`I am currently serving ${bot.channels.size} channels.`);
    }
    else if (message.content == bot.commandPrefix + "servers") {
        message.reply(`I am currently serving ${bot.guilds.size} servers.`);
    }
    if (message.content.toLowerCase() == 'hello') {
        message.channel.sendMessage('Hi ' + message.author + ', how are you?');
    }
    else if (message.content.toLowerCase() == 'burn') {
        message.delete();
        message.channel.send({ files: ["./images/burn.gif"] });
    }
    else if (message.content.toLowerCase() == ': o' || message.content.replace(" ", "") == ':0') {
        message.delete();
        message.channel.send({ files: ["./images/oh.png"] });
    }
    else if (message.content.toLowerCase() == 'wut') {
        message.delete();
        message.channel.send({ files: ["./images/oh.jpg"] });
    }
    else if (message.content.toLowerCase().includes('sprite cranberry')) {
        message.channel.send({ files: ["./images/sprite.gif"] });
    }
    else if (message.content.toLowerCase() == 'dafuq') {
        message.delete();
        message.channel.send({ files: ["./images/dafuq.gif"] });
    }
    else if (message.content.toLowerCase() == 'ree') {
        message.delete();
        message.channel.send({ files: ["./images/ree.gif"] });
    }
    else if (message.content.toLowerCase() == 'whatshappening') {
        message.delete();
        message.channel.send({ files: ["./images/whatshappening.gif"] });
    }
    else if (message.content.toLowerCase() == 'milk') {
        message.channel.send({ files: ["./images/milk.gif"] });
    }

    var utenSpaceTegnUnder = message.content.replace(/3|\ud83c|\uddea|\u03B5|\u0395|\u0045|\u24BA|\uFF25|\u00C8|\u00C9|\u00CA|\u1EC0|\u1EBE|\u1EC4|\u1EC2|\u1EBC|\u0112|\u1E14|\u1E16|\u0114|\u0116|\u00CB|\u1EBA|\u011A|\u0204|\u0206|\u1EB8|\u1EC6|\u0228|\u1E1C|\u0118|\u1E18|\u1E1A|\u0190|\u018E|\u0065|\u24D4|\uFF45|\u00E8|\u00E9|\u00EA|\u1EC1|\u1EBF|\u1EC5|\u1EC3|\u1EBD|\u0113|\u1E15|\u1E17|\u0115|\u0117|\u00EB|\u1EBB|\u011B|\u0205|\u0207|\u1EB9|\u1EC7|\u0229|\u1E1D|\u0119|\u1E19|\u1E1B|\u0247|\u025B|\u01DD/gi, "e").replace(/\u0059|\ud83c|\uddfe|\u24CE|\uFF39|\u1EF2|\u00DD|\u0176|\u1EF8|\u0232|\u1E8E|\u0178|\u1EF6|\u1EF4|\u01B3|\u024E|\u1EFE|\u0079|\u24E8|\uFF59|\u1EF3|\u00FD|\u0177|\u1EF9|\u0233|\u1E8F|\u00FF|\u1EF7|\u1E99|\u1EF5|\u01B4|\u024F|\u1EFF|\u03A5|\u03B3/gi, "y").replace(/\u03C4|\ud83c|\uddf9|\u0054|\u24C9|\uFF34|\u1E6A|\u0164|\u1E6C|\u021A|\u0162|\u1E70|\u1E6E|\u0166|\u01AC|\u01AE|\u023E|\uA786|\u0074|\u24E3|\uFF54|\u1E6B|\u1E97|\u0165|\u1E6D|\u021B|\u0163|\u1E71|\u1E6F|\u0167|\u01AD|\u0288|\u2C66|\uA787/gi, "t").replace(/\s|\W|^|$|\_/g, "").toLowerCase();

    if (message.author.id !== (/*Stian*/ '311548590776516609' && /*Joel*/ '253219750455279616')) {
        for (var i in forbidden) {
            if (utenSpaceTegnUnder.includes(forbidden[i])) {
                var newSentenceForbidden = utenSpaceTegnUnder.replace(new RegExp(forbidden[i], 'g'), "[forbidden word]");
                message.channel.send(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I will delete his message in 5 seconds!').then(msg => {
                    let counter = 5;
                    var editeMelding = setInterval(() => {
                        if (counter == 1) {
                            message.delete();
                            clearInterval(editeMelding);
                            msg.edit(':open_mouth:, ' + message.author + ' tried to say "' + newSentenceForbidden + '." I have now deleted the message!');
                        }
                        else {
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
    bot.user.setActivity(`'help | serving ${bot.users.size} users`);
    bot.channels.find(channel => channel.name === "online").send("My code just got updated!");
});

var diffGap;
var dateTPew;
var loopTime = 3600;
var loopTimeMillis = loopTime * 1000;

bot.on('ready', function () {
    var totalsubscribersPew;
    var totalsubscribersT;
    diff = 0;
    var urlPew;
    var urlT;

    urlPew = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet,contentDetails,statistics";
    urlT = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,contentDetails,statistics";


    setInterval(function () {
        var oldDiff = diff;

        request(urlPew, { json: true }, (err, res, dataPew) => {
            if (!Array.isArray(dataPew.items) || !dataPew.items.length) return;
            fetchDataPew(dataPew);
        });
        
        request(urlT, { json: true }, (err, res, dataT) => {
            if (!Array.isArray(dataT.items) || !dataT.items.length) return;
            fetchDataT(dataT);
        });

        function fetchDataPew(dataPew) {
            totalsubscribersPew = dataPew.items[0].statistics.subscriberCount;
        }
        function fetchDataT(dataT) {
            totalsubscribersT = dataT.items[0].statistics.subscriberCount;
        }
        setTimeout(function () { bindData(totalsubscribersPew, totalsubscribersT); }, 500);

        function bindData(totalsubscribersPew, totalsubscribersT) {
            diff = totalsubscribersPew - totalsubscribersT;
        }
        setTimeout(function () {
            diffGap = oldDiff - diff;

            if (diffGap < 0) return;
            var timeUntilInMillis = (diff / diffGap) * loopTime * 1000;
            var dateNowMillis = new Date().getTime();
            var dateTPewMillis = dateNowMillis + timeUntilInMillis;
            dateTPew = new Date(dateTPewMillis);
        }, 500);

    }, loopTimeMillis);

    
    
    /*
    urlPewdie = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet,contentDetails,statistics";
    urlTs = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,contentDetails,statistics";
    bot.channels.find(channel => channel.name === "live").send('The difference gap will be updated here every 15 minutes').then(msg => {
        var editGap = setInterval(() => {
            request(urlPewdie, { json: true }, (err, res, dataPewdie) => {
                if (!Array.isArray(dataPewdie.items) || !dataPewdie.items.length) return;
                fetchDataPewdie(dataPewdie);
            });

            request(urlTs, { json: true }, (err, res, dataTs) => {
                if (!Array.isArray(dataTs.items) || !dataTs.items.length) return;
                fetchDataTs(dataTs);
            });

            function fetchDataPewdie(dataPewdie) {
                totalsubscribersPewdie = dataPewdie.items[0].statistics.subscriberCount;
            }
            function fetchDataTs(dataTs) {
                totalsubscribersTs = dataTs.items[0].statistics.subscriberCount;
            }

            var differencegap = totalsubscribersPewdie - totalsubscribersTs;
            msg.edit("The gap is currently " + differencegap + " subscribers.");
        }, 60000);
    });
    */
    

});
bot.on('message', message => {
    if (message.content.startsWith(bot.commandPrefix + "time")) {
        if (diffGap < 0) return message.reply("wonderful news incomming! PewDiePie is currently getting more subs than T-Series. Do 'gap to see exact gap.");
        if (diff == 0) return message.reply("the time estimate is not yet ready. Try again soon. Remember that the estimate refreshes once per " + loopTime + " seconds, and that you have to wait for that many seconds after the code has been renewed to see the estimate. ");
        if (dateTPew == (undefined || NaN || null)) return message.reply("I can't get contact with the youtube API. Please contact runarmod#4352");
        message.reply("if it keeps going as it has for the last " + loopTime + " seconds, then T-Series will pass PewDiePie at " + dateTPew);
    }
});


bot.login(TOKEN);
