const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_ID);

bot.start(ctx => {
  ctx.reply("hello world");
});

bot.launch();
