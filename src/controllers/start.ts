import { Context } from '../packages/index.ts';

const startController = async (ctx: Context) => {
  await ctx.reply('Auu');
};

export { startController };
