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
	
// Aqui forzamos la respuesta cada vez que detecte en los mensajes que envian X palabra ejemplo.
if(message.includes("!mos tip 14")) {
    client.say(channel, `!play`);
}

// TheTonyBlacks
if(message.includes("60 SECONDS TO ENTER THE ROYALE/RACE!")) {
    client.say(channel, `!play`);
}

if(message.includes("GET YOUR BALLS ON THE TRACK, BABY! LET'S GO!")) {
    client.say(channel, `!play`);
}

if(message.includes("GIMME YA BALLS!!")) {
    client.say(channel, `!play`);
}

// Tokoozoona
if(message.includes("ScaredyCat Its Time to !play")) {
    client.say(channel, `!play`);
}
	
// MerlinMilk
if(message.includes("merlin29Hype MARBLES IN 60 SECONDS ON THE CLOCK !play GET THEM IN merlin29Hype")) {
    client.say(channel, `!play`);
}

// MerlinMilk
if(message.includes("merlin29Hype MARBLES IN 45 SECONDS ON THE CLOCK !play GET THEM IN merlin29Hype")) {
    client.say(channel, `!play`);
}

	
if(message.includes("You have 45 seconds")) {
    client.say(channel, `!play`);
}
	
	
	
});
