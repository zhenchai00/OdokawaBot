const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help from Odokawa'),
    async execute(interaction) {
        await interaction.reply(
        "**/help** - Get help form Odokawa :)\n" + 
        "**/avatar <target>** - Get user profile avatar\n" + 
        "**/ping** - Check response from Odokawa"
        );
    }
}