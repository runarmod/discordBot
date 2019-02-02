const Commando = require('discord.js-commando');
const request = require('request');

const { Client, RichEmbed } = require('discord.js');

class InfoYoutubeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'youtube',
            memberName: 'info',
            description: 'Sends info about a Youtube-channel'
        });
    }

    async run(message, args) {

        if (args.length === 0)
            return message.reply('**Invalid Format:** `\'info <youtube channel id>`')

        var imagelink;
        var title;
        var totalviews;
        var totalsubscribers;
        var totalvideos;
        var channelid;
        var description;
        var createdAt;
        var url;
        var apikey = process.env.youtubeapi;

        channelid = args;

        if (channelid.toLowerCase() == "pewdiepie") channelid = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        if (channelid.toLowerCase() == "t-series" || channelid.toLowerCase() == "tseries" || channelid.toLowerCase() == "t series") channelid = "UCq-Fj5jknLsUf-MWSy4_brA";


        url = "https://www.googleapis.com/youtube/v3/channels?key=" + apikey + "&id=" + channelid + "&part=snippet,contentDetails,statistics";

        request(url, { json: true }, (error, response, data) => {
            if (!Array.isArray(data.items) || !data.items.length){
                return message.reply("that is not a valid channel-id. Rememeber to copy the last part of the link to a youtube-profile. Example: if you want to se stuff about PewDiePie, go to his youtube-channel, go to the searchbar where this is: <https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw> and copy the text after the last \"/\", AKA \"UC-lHJZR3Gqxm24_Vd_AJ5Yw\"");
            }
            
            fetchData(data);
            bindData(imagelink, title, totalsubscribers, totalviews, totalvideos, description, createdAt);
        });

        function fetchData(data) {
            imagelink = data.items[0].snippet.thumbnails.medium.url;
            title = data.items[0].snippet.title;
            totalsubscribers = data.items[0].statistics.subscriberCount;
            totalviews = data.items[0].statistics.viewCount;
            totalvideos = data.items[0].statistics.videoCount;
            description = data.items[0].snippet.description;
            createdAt = data.items[0].snippet.publishedAt;
        }

        function bindData(imagelink, title, totalsubscribers, totalviews, totalvideos, description, createdAt) {
            const youtuber = new RichEmbed()
                .setTitle(title)
                .setColor("#5599ff")
                .addField("Account created", createdAt)
                .addField("Youtube-channel description", description)
                .addField("Subscribers", totalsubscribers)
                .addField("Total views", totalviews)
                .addField("Total videos", totalvideos)
                .setThumbnail(imagelink)
                .setFooter(`Info Requested By: ${message.author.username}`, `${message.author.avatarURL}`);

            message.channel.send({ embed: youtuber });
        }

    }
}
module.exports = InfoYoutubeCommand;