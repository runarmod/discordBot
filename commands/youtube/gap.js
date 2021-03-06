const Commando = require('discord.js-commando');
const request = require('request');

const { Client, RichEmbed } = require('discord.js');

class GapYoutubeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'gap',
            group: 'youtube',
            memberName: 'gap',
            description: 'Sends the gap between T-series and PewDiePie'
        });
    }

    async run(message, args) {
        var totalsubscribersPew;
        var totalsubscribersT;
        var urlPew;
        var urlT;
        var dataPewWorked = false;
        var dataTWorked = false;
        var apikey = process.env.youtubeapi;

        urlPew = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet,contentDetails,statistics";
        urlT = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,contentDetails,statistics";

        request(urlPew, { json: true }, (err, res, dataPew) => {
            if (!Array.isArray(dataPew.items) || !dataPew.items.length) {
                return message.reply("an error has occured. Try again or contact runarmod#4352")
            }
            dataPewWorked = true;
            fetchDataPew(dataPew);
        });
        if (dataPewWorked != false) return message.reply("error with PewDiePie API");
        request(urlT, { json: true }, (err, res, dataT) => {
            if (!Array.isArray(dataT.items) || !dataT.items.length) {
                return message.reply("an error has occured. Try again or contact runarmod#4352")
            }
            dataTWorked = true;
            fetchDataT(dataT);
        });
        if (dataTWorked != false) return message.reply("error with T-Series API");

        function fetchDataPew(dataPew) {
            totalsubscribersPew = dataPew.items[0].statistics.subscriberCount;
        }
        function fetchDataT(dataT) {
            totalsubscribersT = dataT.items[0].statistics.subscriberCount;

        }
        setTimeout(function () { bindData(totalsubscribersPew, totalsubscribersT); }, 500);
        function bindData(totalsubscribersPew, totalsubscribersT) {
            if (totalsubscribersPew == (NaN || null || undefined)) return message.reply("error with getting PewDiePie API data");	
            if (totalsubscribersT == (NaN || null || undefined)) return message.reply("error with getting T-Series API data");
            const embededed = new RichEmbed()
                .setTitle("Pewdiepie vs. T-Series")
                .setColor("#FF0000")
                .addField("The Gap", totalsubscribersPew - totalsubscribersT + " subscribers")
                .setThumbnail("https://bit.ly/2S45ygJ")
                .setFooter(`Info Requested By: ${message.author.username}`, `${message.author.avatarURL}`);

            message.channel.send({ embed: embededed });
        }

    }
}
module.exports = GapYoutubeCommand;
