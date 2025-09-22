const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MUZAMMIL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUUvVExoQi9XZ0Jsb1FiT1RnWFBJc2RwMW1uclBSaTZYb2pscU9RdjhWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkRISjd6dVgwV1E0TW9QblRldzhvMUYwK3RobWlyWi9NU1Fyc3RpcXpGWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQVdTN2ZHODVWOTlGaFdYTTF4VnovSlFLSHhJcGtlSzJFTk1TRnM5ZjFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWDhVNTVWcXBTRVRueVk4c2s3aDlaVk1hekk4L1R5K2xRUUt6THNVSHlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGK1FJUUViM3VlZTJTN0JiT2twTy9POHM1elRTbGJwRDkvZnZSNVQza009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldWYTQxQUN1UVJNUnN2WEVZekkyRDgrOGk2aHI3WVBqLzhIUm01dnZtUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1XQWtmMThVMW9DcHMrSFZKNW5BU01WeTk5OE80eTlLK1VwYWZaMkJudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUd6MDFOUW14QjNzZkhabXpoQUw1NXlJUVREWjd6dUVPTitJdmdVaHpoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFxMnRlaGh4MnUyYy9VT0hNaVRYNDFYZEEyRU5NMzNLekhwT1NybXNsOUNMZTI0Ymw2YW1pUjZZVmRDUGZSUUozdXNyYzFRQWt1SzZFRWpwQU5YWkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJJdDU0Tzl3UEttckozdGI0dTBYSzA4ciswTVVtMC9Bclpaazd2aXBFR0NJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ0NDM5ODk3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzYxODFCRjQ1QjRCNTQ3RUNENDc5QTgxN0I4NDQ2OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NTgwODY0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NDQzOTg5NzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFRDQ5NjY1QjYyN0E4NEIyMTAyOEU2NTAzODAxRDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODU4MDg2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTjZDS0pIMTkiLCJtZSI6eyJpZCI6IjkyMzQ0NDM5ODk3Mjo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE1MzU0ODY5MTc4NDExOjZAbGlkIiwibmFtZSI6IuC5m8KgTcamIMqG0ITGpsamxrPGsyDguZvwn5iOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL1lzWTBERVBtZ3g4WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4N3V3elltM3piVml0NUdZVHNoOERjZVhoMjV5TmpqUHdGYmthN01WY2wwPSIsImFjY291bnRTaWduYXR1cmUiOiIrTjd6dElOSTRibC80UHJ1Njl6WDdibElDUlJjZlltQnpxcG1XMG14NFFKUDZlcm1rYkx5SlprMnVRSnF2NGdaN292elAzcnhLVSsxZUlDZlBPYVBEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibHhCV1lqUUYwTHk3YWZ1Z1RmZC9ROEVaTTM2K2FKdFpkQk5QcXdPUE5kSUZieGtvbzhEalRXVFZxZjVSSTdYdHZXYTNrSjEyK2J4dk4zUWdGcFQvREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NDQzOTg5NzI6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTzdzTTJKdDgyMVlyZVJtRTdJZkEzSGw0ZHVjalk0ejhCVzVHdXpGWEpkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg1ODA4NjEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT29MIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MUZAMMIL_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/80ntso.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MUZAMMIL_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "MUZAMMIL_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MUZAMMIL_MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 MUZAMMIL_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/80ntso.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*MUZAMMIL_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
