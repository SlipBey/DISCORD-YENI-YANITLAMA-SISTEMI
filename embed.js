const Discord = require('discord.js');
require("../ExtendedMessage.js");

exports.run = (client, message) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Slipy Hep Daha İyisi")
    .setDescription("Embedin güzelliğine bak be")
    .setImage(message.author.avatarURL())

    message.inlineReply(embed)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "embed"
}