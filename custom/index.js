exports.handler = function(event, context) {
  'use strict';
   console.log(event, context.succeed, context.fail);
   const TextMessageHandler = require('./handlers/text-message.js');
   TextMessageHandler.sendSMS();
};
