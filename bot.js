const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_ID);

const helpMessage = `
Choose an option:
/start - start the bot
/help - command reference
/echo - say "You said echo"
/echo <msg> - echo a message
`;

bot.start(ctx => {
  ctx.reply("Hello, I'm the echo bot.");
  ctx.reply(helpMessage);
});

bot.help(ctx => {
  ctx.reply(helpMessage);
});

bot.command("echo", ctx => {
  const input = ctx.message.text;
  let inputArray = input.split(" ");

  let message = "";
  if (inputArray.length === 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);
});

bot.launch();
