const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923106236340";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_05_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjZvOGY4Wjd4STJXbktscnlBTmxFZ0J4anNZREpYenVUcGd5MXBaY1BOND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTI0MzkzMjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1NDMwNDMyQTkwMTFGOTVFNDhCRkRGQTM5MjBDREQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3MjMxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMjQzOTMyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzYwRTZBRjBCOUY0QUZCODRCQ0JDNTE4OEY0MDBDNTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjcyMzE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVaVEtUa2xqU1RxVkpwdW1DV2FvYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjU0OTQxZDYtMzgwMS00M2IzLTk0NjctOWZjNDRjYWIyNWM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMjA5LFxuICAgICAgMTUwLFxuICAgICAgMTc2LFxuICAgICAgMTQ2LFxuICAgICAgMTA1LFxuICAgICAgMTg0LFxuICAgICAgODMsXG4gICAgICAyNDEsXG4gICAgICAxMDEsXG4gICAgICA1OSxcbiAgICAgIDE4MCxcbiAgICAgIDE3LFxuICAgICAgODksXG4gICAgICA4OCxcbiAgICAgIDU0LFxuICAgICAgNzcsXG4gICAgICAyNTIsXG4gICAgICAzOCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMjA5LFxuICAgICAgMTU4LFxuICAgICAgMTgxLFxuICAgICAgMTY2LFxuICAgICAgMjA5LFxuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICAyNDksXG4gICAgICAxMDAsXG4gICAgICA5MCxcbiAgICAgIDEwMCxcbiAgICAgIDksXG4gICAgICAxMTUsXG4gICAgICAyNDMsXG4gICAgICAyMjksXG4gICAgICA3NixcbiAgICAgIDQ2LFxuICAgICAgMzcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOTZaV1czWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDEyNDM5MzIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTg5Mjk5MjE2Mzg1NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yRXNKWUhFTGZKdDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidURTZGtiZ2pTQ1RhSk5ZMmJPV2xtRHBtUmY4dng5WHdwZXFwZ0J6d0NIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0UkpQZ2dlbXBoK2lhVW1FNEFQSWxXOFVmOGMzYmZoeUZrb21HcHc2L004VXRWUkdGYzhubFlEbUZ2RHBIbEUyV1d5ekhScXhYQ2ovRWIvNWxTUEdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoTmtyWXFyc0doVG5HeVV4amV1NzYycVI3SHo3TTdVaThGdmlubzYzaVlIMHFQR0NldFZkZ0VsUW5mblFWcC9pT2c2L0h2ekZFUWJubWZJWUhCRnpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTI0MzkzMjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY3MjMxNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
