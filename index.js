const {Client, Collection} = require('discord.js');
const { Token}= require("./Config.json");
const fs = require('fs');
//console.log(CommandsFiles);

const client= new Client({
    intents:[3276799
    ]
})

const prefix = "!"
client.on("ready", async () => {
console.log(`Le bot ${client.user.tag} est en ligne!`);

})
//console.log(client.commands);
 client.login(Token);
          console.log(`Test`);  
