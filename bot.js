const Discord = require("discord.js");
//twitch
const CUS1 = new Discord.Client();

var prefix = "d";
var adminprefix = '#'
const developers = ["461625485449887746"]
CUS1.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    CUS1.user.setGame(argresult);
      message.channel.send(`Done   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  CUS1.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`Done   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  CUS1.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`Done   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    CUS1.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`Done`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  CUS1.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  CUS1.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
CUS1.login(process.env.TOKENTW);



