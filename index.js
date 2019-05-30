const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'Pickle Simulator',
            type: 'PLAYING' 
        },
        status: 'online'
    })

});
client.on('message', message => {
    if (message.content === '>commands') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('I can do the following things for you:                                                                                                         1. >game -- Gives you a link to the game.');
    }

});
client.on('message', message => {
    if (message.content === '>game') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Here you have a link for the game:                                                                                                         https://www.roblox.com/games/3208831498/NEW-Pickle-Simulator-Beta');
    }

});
client.login('NTgzNjAzNTA5NDM0NTE1NDU2.XO-7ig.7Awmm7t6ItwsnBLyMeF-LfD_0nw');