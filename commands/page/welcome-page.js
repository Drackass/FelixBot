const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome-page')
        .setDescription('Show welcome page.'),
    category: 'page',
    async execute(interaction) {
        interaction.deferReply();
        interaction.deleteReply();

        const selectLanguage = new StringSelectMenuBuilder()
        .setCustomId('selectLanguage')
        .setPlaceholder('Select your language.')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('English')
                .setDescription("if you're English, this is the language you want to use.")
                .setValue('us')
                .setDefault(true)
                .setEmoji({
                    id: '1199298230048002088',
                  }),
            new StringSelectMenuOptionBuilder()
                .setLabel('Français')
                .setDescription('Si vous êtes français, ceci est la langue que vous souhaitez utiliser.')
                .setValue('fr')
                .setEmoji({
                    id: '1199298263069757501',
                  }),
        );

        const row = new ActionRowBuilder()
        .addComponents(selectLanguage);

        const LanguageSelectionPage = new EmbedBuilder()
        .setColor(0xe50914)
        .setTitle("🌎** Please select your desired language below!**")
        .setDescription(
          "This server is made for all regions over the globe.\nRead the server rules or other important information in your native language."
        )

        const welcomeMessage = `
*If you love movies and series as much as we do, then you've come to the right place.*

We are a very welcoming community of fans who are excited to meet you and most likely share the same interests as you. Believe me, we're all very passionate about it.

When a movie or series with constant plot twists keeps you on the edge the entire time, our community offers you the right place to express your excitement with.

If you seek all kinds of updates regarding Netflix, this server is the only place you'll have to be in. To be less spammy and offer you the most comforting experience, you can decide on what you want to be informed about by assigning **the Notification roles** of your own choice.

Our interactive buttons below this message allow you to view our rules, get an introduction about our server, customize your roles and submit feedback to us!

Enjoy your stay, we're looking forward to seeing you in our chats.

Remember, cinema is a passion we all share here on Nextflix. Enjoy the experience and have fun! :popcorn:
`;

        const welcomePage = new EmbedBuilder()
        .setColor(0xe50914)
        .setTitle("**:popcorn: Welcome to Nextflix Community! :popcorn::tada:**")
        .setDescription(welcomeMessage)
        .setThumbnail(
            "https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png"
          )
      .setImage("https://github.com/Drackass/Nextflix-Bot/blob/main/public/Nextflix.png?raw=true");
        

        const SelectedLanguage = await interaction.channel.send({
            embeds: [LanguageSelectionPage],
            components: [row],
        });


        await interaction.channel.send({
            embeds: [welcomePage],
        });

    },
};


