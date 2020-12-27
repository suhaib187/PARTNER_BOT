const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من نایێم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` تۆش ریکلام بۆمن بکە https://discord.gg/WqYe6QUc`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("791298820989386792").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame( `ڕیکلام بۆمن بنیرە`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzkwMTc4ODA4NzE5OTk4OTk4.X981XA.Jhx1NF6dlIWUgs3qKt_uU3DkXvA");//تۆکین لێرە دانێ
