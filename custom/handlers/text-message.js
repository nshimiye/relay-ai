
exports.sendSMS = function(){
  'use strict';
  //Initialize a REST client in a single line:
  const config = require('./config.json')
  var client = require('twilio')(config.ID, config.SECRET);

  // Use this convenient shorthand to send an SMS:
  client.sendSms({
      to:'+16463169837',
      from:'+1 646-762-9154',
      body: `Hello!! Time is ${(new Date()).toString()}`
  }, function(error, message) {
      if (!error) {
          console.log('Success! The SID for this SMS message is:');
          console.log(message.sid);
          console.log('Message sent on:');
          console.log(message.dateCreated);
      } else {
          console.log('Oops! There was an error.', error);
      }
  });
};
