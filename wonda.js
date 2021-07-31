const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const wonda1 = new Discord.Client();
const wonda2 = new Discord.Client();
const wonda3 = new Discord.Client();
const wonda4 = new Discord.Client();
const wonda5 = new Discord.Client();
const wonda6 = new Discord.Client();
const wonda7 = new Discord.Client();
const wonda8 = new Discord.Client();
const wonda9 = new Discord.Client();
const wonda10 = new Discord.Client();
const wonda11 = new Discord.Client();
const wonda12 = new Discord.Client();




wonda1.on("ready", () => {
wonda1.channels.get("kanalid").join()    
});

wonda2.on("ready", () => {
wonda2.channels.get("kanalid").join()    
});

wonda3.on("ready", () => {
wonda3.channels.get("kanalid").join()    
});

wonda4.on("ready", () => {
wonda4.channels.get("kanalid").join()    
});

wonda5.on("ready", () => {
wonda5.channels.get("kanalid").join()    
});











wonda1.login("token");
wonda2.login("token");
wonda3.login("token");
wonda4.login("token");
wonda5.login("token");
wonda6.login("token");
wonda7.login("token");
wonda8.login("token");
wonda9.login("token");
wonda10.login("token");
wonda11.login("token");
wonda12.login("token");
