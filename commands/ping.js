const { SlashCommandBuilder } = require('@discordjs/builders');
const messages = [
    "Drop the generation gap crap.",
    "I guess nurses make a lot of money taking taxis after work.",
    "What's so funny? Are you smiling at me? I really don't know what young guys are thinking.",
    "You say that like you discovered it, but it's been around since ancient times, so...",
    "You've seen We Are The World?",
    "It's not like there's no one here. It says it's forbidden.",
    "Try saying Bruce Springteen three times fast.",
    "What? You are acting like that's supposed to sound cool.",
];

module.exports = {

    data: new SlashCommandBuilder() 
        .setName('ping')
        .setDescription('Get response from Odokawa'),
    async execute(interaction) {
        await interaction.reply(messages[Math.floor(Math.random() * messages.length)]);
    },
};