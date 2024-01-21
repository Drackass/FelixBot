const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	category: 'fun',
	async execute(interaction) {
		// await  interaction.reply('Pong!');

		// Ephemeral responses
		// await  interaction.reply({ content: 'Secret Pong!', ephemeral: true });

		// Editing responses
		// await interaction.reply('Pong!');
		// await wait(2000);
		// await interaction.editReply('Pong again!');

		//  Deferred responses
		// // await interaction.deferReply();
		// await interaction.deferReply({ ephemeral: true });
		// await wait(4000);
		// await interaction.editReply('Pong!');

		// Follow ups
		// await interaction.reply('Pong!');
		// // await interaction.followUp('Pong again!');
		// await interaction.followUp({ content: 'Pong again!', ephemeral: true });
		

		// masked links
		// await interaction.reply('[text](https://example.com/)')

		// Fetching and deleting responses
		// await interaction.reply('Pong!');
		// await interaction.deleteReply();

		// await interaction.reply('Pong!');
		// const message = await interaction.fetchReply();
		// console.log(message);

		//  Localized responses
		// const locales = {
		// 	pl: 'Witaj Świecie!',
		// 	de: 'Hallo Welt!',
		// 	fr: 'salut !',
		// };
		// interaction.reply(locales[interaction.locale] ?? 'Hello World (default is english)');

		// ping
		interaction.reply(`Websocket heartbeat: ${interaction.client.ws.ping}ms.`);

	},
};