const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../config.json');
var prefix = ayarlar.prefix;

module.exports = client => {
        
  console.log(`Aktif Oldum!`);
  console.log(`Komutlar Aktifleştirildi!`);
  client.user.setStatus('dnd')
  client.user.setActivity(`VİDEOYA LİKE AT :)`)
  console.log(`Discorda göre istatistik: ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  
}