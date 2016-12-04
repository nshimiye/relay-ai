(function(){
  'use strict';

  var text = require('textbelt');

  console.log(typeof text);

  text.sendText('6463169837', 'A sample text message!', {}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(arguments);
    }
  });
})();


/*
curl -X POST http://textbelt.com/text \
-d number=6463169837 \
-d "message=I sent this message for free with textbelt.com"
*/
