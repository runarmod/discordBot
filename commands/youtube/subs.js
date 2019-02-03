const Commando = require('discord.js-commando');
const request = require('request');

const { Client, RichEmbed } = require('discord.js');

class SubsYoutubeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'subs',
            group: 'youtube',
            memberName: 'subs',
            description: 'Sends how many subs a Youtube-channel have'
        });
    }

    async run(message, args) {

        if (args.length === 0)
            return message.reply('**Invalid Format:** `*subs <youtube channel id>`')

        var imagelink;
        var title;
        var totalsubscribers;
        var channelid;
        var url;
        var apikey = "AIzaSyA8NTv4moe1oZjEQYh4QMbz6DohzPFDGQA";

        channelid = args;

        if (channelid.toLowerCase() == "pewdiepie") channelid = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        if (channelid.toLowerCase() == "t-series" || channelid.toLowerCase() == "tseries" || channelid.toLowerCase() == "t series") channelid = "UCq-Fj5jknLsUf-MWSy4_brA";

        url = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=" + channelid + "&part=snippet,contentDetails,statistics";

        request(url, { json: true }, (err, res, data) => {
            if (!Array.isArray(data.items) || !data.items.length){
                return message.reply("that is not a valid channel-id. Rememeber to copy the last part of the link to a youtube-profile. Example: if you want to se stuff about PewDiePie, go to his youtube-channel, go to the searchbar where this is: <https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw> and copy the text after the last \"/\", AKA \"UC-lHJZR3Gqxm24_Vd_AJ5Yw\"");
            }
            
            fetchData(data);
            bindData(imagelink, title, totalsubscribers);
        });

        function fetchData(data) {
            imagelink = data.items[0].snippet.thumbnails.medium.url;
            title = data.items[0].snippet.title;
            totalsubscribers = data.items[0].statistics.subscriberCount;
        }

        function bindData(imagelink, title, totalsubscribers) {
            const youtuber = new RichEmbed()
                .setTitle(title)
                .setColor("#5599ff")
                .addField("Subscribers", totalsubscribers)
                .setThumbnail(imagelink)
                .setFooter(`Info Requested By: ${message.author.username}`, `${message.author.avatarURL}`);

            message.channel.send({ embed: youtuber });
        }

    }
}
module.exports = SubsYoutubeCommand;