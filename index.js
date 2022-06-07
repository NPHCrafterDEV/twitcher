// Importing Packages and Configfile
const config = require("./config.json");
const tmi = require('tmi.js');
const {
  Client, 
  MessageEmbed  
} = require('discord.js');

// Creating Discord.js (Discord) Client
const bot = new Client({ 
  intents: ["GUILDS", "GUILD_MESSAGES"] 
});

// Creating Tmi (Twitch) Client
const BOT_NAME = "Twitcher";
const client = new tmi.client({
  identity: {
    username: BOT_NAME,
    password: config.OAUTH
  },
  channels: [
    config.channel
  ]
});

// sending an message from the Twitch Chat to Discord
client.on('message', (target, context, msg) => {
  const commandName = msg.trim().toString();
  const embedD = new MessageEmbed()
    .setTitle(`Chat: ${target}`)
    .setDescription(commandName
    .setColor('#ab19d1')
    .setFooter('Twitch chat on Discord')
    .setTimestamp();

   bot.channels.cache.get(config.discordchannel).send({embeds: [embedD]});  
});
client.on('connected', (addr, port) => console.log(`* Connected to ${addr}:${port}`));

// Changing the Bots Precense after logging i
bot.once("ready", async  () => {
  bot.user.setPresence({ 
    activities: [{ 
      name: `Twitch Chat: ${config.channel}` 
    }], 
    status: 'idle', 
    type:"WATCHING" 
  });
});

// Connecting,,,
bot.login(config.discordtoken);
client.connect();
