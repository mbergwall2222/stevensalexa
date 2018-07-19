'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
	httpsEnabled: false,
	port: process.env.PORT || 8001,
	server_root: __dirname,
	app_dir: "apps"
} );

server.start();
