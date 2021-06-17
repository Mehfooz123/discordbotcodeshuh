const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!!";

client.on("ready", ()=>{
  console.log("bot is online");

client.on("message", async message=>{
  if(message.author.bot) return;


  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === 'invite')
message.channel.send("https://discord.com/oauth2/authorize?client_id=789214598988562484&scope=bot&permissions=8")

  if(command === 'nitro'){
   message.channel.send("https://www.epicgames.com/store/en-US/p/discord--discord-nitro")
   }

   if(command === 'website'){
        message.channel.send("https://mmehfoozpk.wixsite.com/helper-bot")
}        

  if(command === 'youtube'){
        message.channel.send("https://tinyurl.com/yefqe7e2")
}        

if(command === 'config'){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('congragulation you find screct command not dont yet')
    .setURL()
    .setDescription('congragulation you find screct command not dont yet')
    .setThumbnail('')
    .addFields(
       { name: 'anti mass emoji', value: 'stop the person from spaming emoji', inline: true },
      { name: 'antimass ping', value: 'stop the person from mass ping', inline: true },
      { name: 'antiswaer', value: 'stop poeple form swaering', inline: true},
    )
    .setImage('')
    .setTimestamp()
    .setFooter('congragulation you find screct command', '');

    message.reply(helpEmbed);

}
if(command === 'help'){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Panel')
    .setURL('https://mmehfoozpk.wixsite.com/helper-bot')
    .setDescription('Help')
    .setThumbnail('')
    .addFields(
      { name: '!!help', value: 'Show this panel', inline: true },
      { name: '!!ban', value: 'Ban the User', inline: true },
       { name: '!!ping', value: 'tell the ping of User', inline: true },
      { name: '!!kick', value: 'Kick the User', inline: true },
      { name: '!!warn', value: 'Warn the User', inline: true},
      { name: '!!youtube', value: 'shows yotube of me', inline: true },
      { name: '!!unban', value: 'Unban the User', inline: true},
       { name: '!!website', value: 'show the wesite', inline: true},
       { name: '!!nitro', value: 'give user a link for discord nitro', inline: true},
        { name: '!!invite', value: 'tell invite link of bot to invite', inline: true},
    )
    .setImage('')
    .setTimestamp()
    .setFooter('Made by M.Mehfooz is me the bot creator,HungStudio helped a lot And Yasserprogamer used to help not anymore', '');

    message.reply(helpEmbed);

}

if(command === "ban"){
    const reason = args.slice(1).join(" ");
    const member = message.mentions.members.first();
    let permissionmissing = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Missing permission")
        .setDescription(`You don't have permission to ban this user 'BAN_MEMBERS'`)
        .setFooter(`Moderator: ${message.author.tag}`);
    if(!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(permissionmissing);
    let mentionauser = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Invalid member")
        .setDescription(`Please mention a valid user`)
        .setFooter(`Moderator: ${message.author.tag}`);
    if(!member)
        return message.channel.send(mentionauser);
    message.guild.members.ban(member);
    let UserBanned = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("User has been seccussfully banned!")
        .setDescription(`${member.user.tag} has been banned by: ${message.author.tag} because of: ${reason}`)
        .setFooter(`Moderator: ${message.author.tag}`);
    message.channel.send(UserBanned);
    let youarebanned = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("You have been banned")
        .setDescription(`You have been banned by: ${message.author.tag} because of: ${reason}`)
        .setFooter(`Moderator: ${message.author.tag}`);
    member.send(youarebanned)
}

if(command === "warn"){
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    let permissionmissing = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Missing permission")
        .setDescription(`You don't have permission to warn this user 'ADMINISTRATOR'`)
        .setFooter(`Moderator: ${message.author.tag}`);
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(permissionmissing);
    let mentionauser = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Invalid member")
        .setDescription(`Please mention a valid user`)
        .setFooter(`Moderator: ${message.author.tag}`);
    if(!member)
        return message.reply(mentionauser);
    let embed = new Discord.MessageEmbed()
        .setTitle("Warnings")
        .setDescription(`${member} got warned by ${message.author} because of: ${reason}`)
        .setColor("RANDOM")
        .setFooter(`Moderator : ${message.author.username}`)
    message.channel.send(embed);
    let MemberDm = new Discord.MessageEmbed()
        .setTitle("You have been warned")
        .setDescription(`You have been warned by ${message.author} because of: ${reason}`)
        .setColor("RANDOM")
        .setFooter(`Moderator : ${message.author.username}`)
    member.send(MemberDm);
} 
	if(command === "unban"){
    let userID = args[0];
    if(!message.member.hasPermission("BAN_MEMBERS,Adminnistrator"))
            return message.channel.send("You don't have permission to unban this user BAN_MEMBERS");
    if(!userID)
      return message.channel.send("Please provide a valid user ID");
   message.guild.members.unban(userID).catch(error=> message.channel.send("ERROR: CANNOT UNBAN USER | CONSOLE ERROR:" + error))
    message.channel.send("USER HAS BEEN UNBANNED");
}

if(command === 'ping'){
        message.channel.send("***__~~Pong!~~__***").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

            var PingEmbed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping}`)
            .setColor("RANDOM")
          
            m.edit(PingEmbed)
        });
}

  if (!message.guild) return;
  if (message.content.startsWith('!!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});


})

client.login("Nzg5MjE0NTk4OTg4NTYyNDg0.X9uzXw.Ea5aKPGPm4kIeIVSDwe5Xh0AX7Q");
