var Discord = require('discord.js');
var cliente = new Discord.Client();
var datos = require("./configuracion.json");
var comando = datos.comando;
var token_bot = datos.token;

var clipsID = "469708788883128321";
var cochinadasID = "533798619258552355";
var imagenes_randomID = "549830257968939008";
var memesID = "535693278453170206";
var miusicID = "469708960975290378";
var niñas_bonitasID = "581367399274774531";
var niños_bonitosID = "581367584935641098";
var setups_gamersID  = "581586082068561930";

cliente.on("ready", () =>{
	console.log("ESTOY LISTO BRO XD HOLA");
});

cliente.on("message", (mensaje) => {
	//Esta madre es para prevenir un bucle infinito en el servidor
	if (mensaje.author.bot) return;

	if(mensaje.channel.id === clipsID || mensaje.channel.id === cochinadasID || mensaje.channel.id === imagenes_randomID || mensaje.channel.id === memesID || mensaje.channel.id === miusicID || mensaje.channel.id === niñas_bonitasID || mensaje.channel.id === niños_bonitosID || mensaje.channel.id === setups_gamersID || mensaje.channel.id === mioID){
			if(mensaje.content.includes('.com/') || mensaje.content.includes('www.') || mensaje.content.includes('https://') || mensaje.content.includes('http://')){
				return;
			}

			if(mensaje.attachments.size > 0){
				console.log("Objeto")
				return;
			}

			mensaje.delete();
			mensaje.author.send("Recuerda que no debes de escribir en canales de sólo reacción. Lee las reglas. -Pablo Avelar Armenta");
		}

});

cliente.login(token_bot);
