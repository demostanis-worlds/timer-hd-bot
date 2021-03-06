const randomPuppy = require('random-puppy');
const fetch = require('node-fetch');

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
        fetch(url).then(async res => {
			const img = await res.arrayBuffer()

            await message.channel.send({
                files: [{
                    attachment: Buffer.from(img),
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'meme',
    aliases: ['memes']
}