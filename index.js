require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

//token of your bot
const token = process.env.TELEGRANM_TOKEN;

//create a bot instance
const bot = new TelegramBot(token, { polling: true });

// control manager
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.first_name; // recover the user's name
    const rules = [
        '1. Respectez les autres membres du groupe.',
        '2. Pas de contenu offensant ou inapproprié.',
        '3. Évitez les spams ou les publicités non autorisées.',
        '4. Vous avez la possibilité d\'inbox un membre du groupe si son profil vous intéresse. ',
        'Si vous avez des questions, n\'hésitez pas à les poser. Profitez de votre temps ici !'
    ];

    let welcomeMessage = `Bonjour ${username} ! Bienvenue dans notre groupe. Veuillez lire les règles du groupe ci-dessous :`;

    rules.forEach(rule => {
        welcomeMessage += `\n- ${rule}`;
    });

    bot.sendMessage(chatId, welcomeMessage);
});

