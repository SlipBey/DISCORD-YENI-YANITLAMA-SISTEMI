const Discord = require('discord.js');
require("../ExtendedMessage.js");

exports.run = (client, message) => {

    message.inlineReply(`Uğraşmaya değmez slipy xD`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "yazı"
}