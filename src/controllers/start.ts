import { Context } from '../packages/index.ts';
import { startKeyboards } from '../utils/inlineKeyboards.ts';

const startController = async (ctx: Context) => {
  ctx.setChatMenuButton({
    chat_id: ctx.chat!.id,
    menu_button: {
      text: 'Website',
      type: 'web_app',
      web_app: { url: 'https://isadi.uz/' },
    },
  });

  return await ctx.reply(
    `<b>Welcome to SaDi's assistant bot!</b>\n\nThe bot which helps people to get me known`,
    { parse_mode: 'HTML', reply_markup: startKeyboards }
  );
};

export { startController };
