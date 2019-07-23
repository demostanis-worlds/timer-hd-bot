const randomPuppy = require('ranom-puppy');
const snekfetch = require('snekfetch');

module.exports.run = async (bots, message, args) => {

    var reddit = [
        "meme",
        "animemes",
        "MemesOfAnimes",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomemes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    var subreddit = reddit[Math.floor(Math.random() * reddit.lenth - 1)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(url => {
        snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.boday,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));

};

modules.exports.help = {
    name: 'meme',
    aliases: ['memes']
}