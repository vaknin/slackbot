const Slackbot = require('slackbots');
const axios = require('axios');

const bot = new Slackbot({
    token: 'xoxb-647222280642-647226352194-lhm5YPckcLSnz9DiF3PVAFrT',
    name: 'Avivbot'
});

let botID;

bot.on('start', () => {
    botID = bot.self.id;
});

bot.on('message', data => {

    if (data.type == 'message' && data.user){
        
        let cID = data.channel;
        let senderID = data.user;
        const params = {
            icon_emoji: ':cup:'  
        };
        bot.postMessage(cID, "Boop Beep.", params);
    }
});
