const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("suggestions-page")
    .setDescription("show suggestions page."),
  category: "page",
  async execute(interaction) {
    interaction.deferReply();
    interaction.deleteReply();

    const newFlixBtn = new ButtonBuilder()
      .setCustomId("newFlixBtn")
      .setLabel("🍿New Flix🍿")
      .setStyle(ButtonStyle.Danger);

    const viewNewFlixBtn = new ButtonBuilder()
      .setLabel("View All")
      .setURL("https://discord.com/channels/1133315133951721552/1134820460287234128")
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder().addComponents(viewNewFlixBtn,newFlixBtn);

    const suggestionsPage = new EmbedBuilder()
      .setImage("./public/Nextflix.png")
      .setColor(0xe50914)
      .setTitle(":popcorn: Suggestions :popcorn:")
      .setDescription(
        "Welcome to Nextflix's Suggestions Channel, the place where you can share your favorite Flix and introduce them to the community!\n\n Once posted, your suggestion will undergo moderation. Look forward to seeing if it gets accepted and added to our growing collection of movies, series, and anime!"
      )
      .setThumbnail(
        "https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png"
      );

    interaction.channel.send({ embeds: [suggestionsPage], components: [row] });
  },
};
