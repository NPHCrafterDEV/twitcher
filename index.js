const config = require("./config.json")
const tmi = require('tmi.js');
const {Discord ,Collection, MessageActionRow, MessageSelectMenu, MessageButton, Client, Intents, MessageEmbed  } = require('discord.js')
const express = require("express")
const fetch = require("node-fetch")
const fs = require("fs")
const bot = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const bottoken = config.discordtoken
const BOT_NAME = "Twitcher"
const authentication = config.OAUTH

const opts = {
  identity: {
    username: BOT_NAME,
    password: authentication
  },
  channels: [
    config.channel,
 
  ]
};


const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();


function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}




function onMessageHandler (target, context, msg, self, username, messaget) {

const commandName = msg.trim();
const embedD = new MessageEmbed()
  .setTitle(`Chat: ${target}`)
  .setDescription(commandName.toString())
  .setColor('#ab19d1')
  .setFooter('Twitch chat on Discord')
  .setTimestamp()
  
  

  
   bot.channels.cache.get(config.discordchannel).send({embeds: [embedD]})
}












bot.once("ready", async  () => {
  bot.user.setPresence({ activities: [{ name: `Twitch Chat: ${config.channel}` }], status: 'idle', type:"WATCHING" });
})











bot.login(token)
