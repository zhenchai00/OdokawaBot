const { Client, Intents } = require('discord.js');

// Inherit dot env file
require('dotenv').config();

// Token, Client, Guild id 
const TOKEN = process.env.TOKEN;
const CLIENTID = process.env.CLIENTID;
const GUILDID = process.env.GUILDID;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	console.log(interaction);

    if (!interaction.isCommand()) return;

	const { commandName } = interaction;

    if (commandName === 'ping') {
		interaction.reply('Pong.');
	} else if (commandName === 'beep') {
		interaction.reply('Boop.');
	} else if (commandName === 'server') {
		interaction.reply('Guild name: ' + interaction.guild.name + '\nTotal members: ' + interaction.guild.memberCount);
	} else if (commandName === 'user') {
		interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
	}
});

client.login(TOKEN);
