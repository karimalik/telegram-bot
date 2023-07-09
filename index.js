require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

//token of your bot
const token = process.env.TelegramBot

//create a bot instance
const bot = new TelegramBot(token, { polling: true });
