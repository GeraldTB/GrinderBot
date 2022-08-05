// Dependencia de TMI cogiendo configuracion del archivo que creamos config.json
const tmi = require('tmi.js'),
    { username, password } = require('./config.json');
	
	
// Valores 
const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [TU CANAL]
};



// TMI que instalamos para poder conectar a Twitch
const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('message', (channel, user, message, self) => {
    if(self) return;
	
	
// Lo mismo pero aqui lo usamos para crear tipo comandos  !play !playbot y responder a ello.
if(message == '!play') {
    client.say(channel, `!plays gerald22VFlorkMos`);
}
	
// Aqui forzamos la respuesta cada vez que detecte en los mensajes que envian X palabra ejemplo:
if(message.includes("!playbot")) {
    client.say(channel, `!play`);
}

	
});
