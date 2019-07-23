const Discord = require('discord.js');
const bot = new Discord.Client();
const memecommand = require("./commands/meme")

require("dotenv").config()

var version = '1.0.1';

bot.on('ready', () =>{
    console.log(`Bot connected as ${bot.user.username}`);
	bot.user.setActivity("aaaa");
})

bot.on('message', message=>{

    let args = message.content.substring(process.env.PREFIX.length).split(" ");

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
		
		case "meme":
			memecommand.run(null, message, args)



    }
})

bot.login(process.env.TOKEN);
