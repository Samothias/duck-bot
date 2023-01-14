require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
console.log("token")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!video') {
    var today = new Date();
    var day = today.getDay();
    if (day === 4) { // Thursday
      const videoUrl = 'https://example.com/video.mp4';
      msg.channel.send(videoUrl);
    } else {
      msg.channel.send("It's not Thursday yet!");
    }
  }
});

client.login(process.env.token);





