module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'stevens' );


app.launch( function( request, response ) {
	response.say( 'Welcome to Stevens Institute of Technology!' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('turnOnLight',
  {
		"utterances":[
		"turn on the light",
		"light on"
	]
  },
  function(request,response) {
    response.say("Okay, I'll turn the light on!");
  }
);

module.exports = app;

