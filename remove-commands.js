const { REST } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started deleting all commands.');

    // Supprimez toutes les commandes globales
    await rest.put('/applications/' + clientId + '/commands', {
      headers: {
        'Authorization': `Bot ${token}`,
      },
      data: [],
    });

    // Supprimez toutes les commandes de guilde
    await rest.put(`/applications/${clientId}/guilds/${guildId}/commands`, {
      headers: {
        'Authorization': `Bot ${token}`,
      },
      data: [],
    });

    console.log('Successfully deleted all commands.');
  } catch (error) {
    console.error(error);
  }
})();
