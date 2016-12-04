
exports.sendSMS = function(){
  'use strict';
  //Initialize a REST client in a single line:
  var client = require('twilio')('AC7c79dae77ff7c2eece5a029ce1f5a8b1', '677765b7bbc0d0a954610091ff3e60fb');

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
