const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTk5MjgwNzYyMDYzMTU5MzAw.XTNLjw.xxgEBTi84PCTjb_IiLlwNrbq-mc';

const PREFIX = 't!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity("aaaa");
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'embed':
          const embed = new Discord.RichEmbed()
          .setTitle('User Information')
          .addField('Player Name', message.author.username, true)
          .addField('Version', version, true)
          .addField('Current Server', message.guild.name, true)
          .setColor(0xF1C40F)
          .setThumbnail(message.author.avatarURL)
          .setFooter('This person is very gay!')
          message.channel.sendEmbed(embed);
        break;



    }
})


bot.login(token);