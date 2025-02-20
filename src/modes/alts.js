const Sniper = require('../lib/Client');

module.exports = async () => {
   if (!settings.tokens.main || !settings.tokens.main?.length) return logger.critical(constants.noMain);
   if (!util.cleanTokens().length) {
      return logger.critical(constants.noAlts);
   }

   // Alts
   for (const token of util.cleanTokens()) {
      await new Promise((fulfill) => {
         setTimeout(async () => {
            const client = await new Sniper().init(token);
            if (client) {
               active.push(client);

            }
            fulfill();
         }, util.randomInt(1e3, 3e3));
      });
   }
};
