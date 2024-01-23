const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome-page')
        .setDescription('Show welcome page.'),
    category: 'page',
    async execute(interaction) {
        interaction.deferReply();
        interaction.deleteReply();

        const welcomePage = {
            color: 0xe50914,
            author: {
                name: 'Nextflix',
                iconURL: 'https://pic.clubic.com/v1/images/1900892/raw?fit=smartCrop&height=900&width=900&hash=f2b09f85025646cea83c136c3b51ed4413096bfb',
                url: 'https://discord.js.org',
            },
            title: ':popcorn: Welcome to Nextflix Community! :popcorn::tada:',
            description: '**#👋・welcome : Server Rules**\n' +
                'Welcome to Nextflix, the perfect spot to discuss your favorite movies, series, and anime! ' +
                'Before diving into the cinematic world, make sure to read and accept our rules below:\n\n' +
                '1. Respect fellow community members.\n' +
                '2. No spoilers without warnings!\n' +
                '3. No inappropriate content.\n\n' +
                'React with :white_check_mark: to accept the rules and access other channels!\n\n' +
                '**#📢・news : Stay Informed**\n' +
                'Stay updated on the latest server announcements and changes. ' +
                "Don't miss out on any Nextflix-related news by joining this lounge!\n\n" +
                '**#🤖・bot : Chat with our AI Bot**\n' +
                'Engage with our intelligent bot based on OpenAI. ' +
                'Use commands to discover recommendations, ask questions about your favorite films, and more!\n\n' +
                '**#🌍・chat : Connect with the Community**\n' +
                'Share your opinions, discoveries, and cinematic experiences with the community. ' +
                'Enjoy exciting discussions on everything related to the entertainment world!\n\n' +
                '**#🎫・suggestions : Propose Your Films!**\n' +
                'Submit film suggestions by sharing the IMDb ID and the link to watch. ' +
                'Suggestions go through moderation before being accepted or rejected.\n\n' +
                '**#✅・validation (Moderators) : Managing Suggestions**\n' +
                'Visible only to moderators, this lounge allows the management of film suggestions. ' +
                'Moderators will make informed decisions to enrich our collection.\n\n' +
                '**#🍿・new-films : Discover the Latest Additions!**\n' +
                'Explore films recently approved by moderators. ' +
                'Each film has its own thread for detailed discussions. ' +
                'Messages will be automatically relayed to the dedicated film page on our Nextflix website!\n\n' +
                'Remember, cinema is a passion we all share here on Nextflix. ' +
                'Enjoy the experience and have fun! :popcorn:',
            thumbnail: {
                url: 'https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png',
            },
        };

        await interaction.channel.send({
            embeds: [welcomePage]
        });

    },
};


// **Welcome to Nextflix Community! :popcorn::tada:** 

// **#👋・welcome : Server Rules**
// Welcome to Nextflix, the perfect spot to discuss your favorite movies, series, and anime! Before diving into the cinematic world, make sure to read and accept our rules below:

// 1. Respect fellow community members.
// 2. No spoilers without warnings!
// 3. No inappropriate content.

// React with :white_check_mark: to accept the rules and access other channels!

//  **#📢・news : Stay Informed**
// Stay updated on the latest server announcements and changes. Don't miss out on any Nextflix-related news by joining this lounge!

// **#🤖・bot : Chat with our AI Bot**
// Engage with our intelligent bot based on OpenAI. Use commands to discover recommendations, ask questions about your favorite films, and more!

// **#🌍・chat : Connect with the Community**
// Share your opinions, discoveries, and cinematic experiences with the community. Enjoy exciting discussions on everything related to the entertainment world!

// **#🎫・suggestions : Propose Your Films!**
// Submit film suggestions by sharing the IMDb ID and the link to watch. Suggestions go through moderation before being accepted or rejected.

// **#✅・validation (Moderators) : Managing Suggestions**
// Visible only to moderators, this lounge allows the management of film suggestions. Moderators will make informed decisions to enrich our collection.

// **#🍿・new-films : Discover the Latest Additions!**
// Explore films recently approved by moderators. Each film has its own thread for detailed discussions. Messages will be automatically relayed to the dedicated film page on our Nextflix website!

// Remember, cinema is a passion we all share here on Nextflix. Enjoy the experience and have fun! :popcorn: