import { Bot } from '../packages/index.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);

export { bot };
