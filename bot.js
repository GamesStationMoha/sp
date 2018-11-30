const Discord = require('discord.js');
const1 client = new Discord.Client();
var prefix = "1";

client1.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client1.on('ready', async() => {
var server = "498814210529034240"; // ايدي السررفر
var channel = "517312143524364288";//ايدي الروم
    setInterval(()=>{
    client1.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})
client.login(process.env.TOKEN1);

