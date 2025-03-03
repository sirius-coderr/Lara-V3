const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlWWHZzR3Fsc3VpYlhDZGFCS2c3dEFxVmN0R255RzVhZDJ5d0pVRTFHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUY1MHJJU3VGOWI3eHRwZjlWaWZmL1I0VklUWldIN1IwNXBiWXgzWFBEZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnS3VnMXJWR3Zlb3NweExRWkZmZFFlMWVOdUNrSjhoRW5Mc0RkSDgxWkdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeDFRUjkvOGgwUFQ1RmtnVzJtVUxvMFdLcG1kZmpKa0FxQm5wZmFPdUNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQaUIxZXJTYVZiSUQ4TXV1ZnhjZ01GY3pqY3pRSFdqc0lLWDRmV0dWRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRKK1hOTmh6OGNBSVVOSGptc0JsUlBJYU5PT0E5Und0Y3BaaHpWaGpjMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FOcng1dXZCT1haYWZ2dTd5NzJzRlp6a0FYa3NoSE54MG9SRWMyQUNIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkdtTVZkRkdZS0tlU2tPU0QrZzhKcGk4cXV4UnJ6K3VoYWxtQmRLTUlndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRHejg4Q2s4eEtXaFBSV0NFRFpjUmk5ejJBSkpERFhBcWxTSUFrcVRGUWdBVzhUQWJnaTMwczhDV1VlaFBjUElocFhZQlZrdlpJc1hrK1U1Tll1bkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJ6TEJYRHlob0QrS25FeFhGS1R3dVJETExDWTNhYzduVGlWVHpnUnArNlNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYQnZmd1VoTFRHbVNjM0c2NElKcl9RIiwicGhvbmVJZCI6IjZlMjA4ZDk4LWYyOTQtNDUxZS1iNjhiLTBmMWY1ZDYxYzlmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRWNFclFPMnBRZXRyL2U5dUhUOXhYSDlHUlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2JubmFtcW5JTHpjblZPTTJmM1JOY0hHMlJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFMR0wxRzNXIiwibWUiOnsiaWQiOiI1MDk0MDUyNTgzMjo4MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDNSbEVNUXo0dVh2Z1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0tNNmY4OWJwL0trdklnc2xGTC9GWTVnelpZYmJIL1RJYys5d0pGNEN5QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTHd5SW1JTy83UUNaeE10NGJxODc3M2lLYkRKRi9PQU5HeEhQK0FjODlZSWNIYm1qVGFJTW5hQk1SZHBRYmhlQ01qcEdHd0E4ZFBCbG5BVHR2ZHdLQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkJZVEtoRE85T0ZCTldSYU9LUE16NnRHV2UwMEtTTjJIVmxFSkJQcnMraXBpSlVPdU1iUS9BQVlGQkJKNVo5czhZamJnWDRZRUczNFl2cm52bzZ0SENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDA1MjU4MzI6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkNqT24vUFc2ZnlwTHlJTEpSUy94V09ZTTJXRzJ4LzB5SFB2Y0NSZUFzZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTAxNDQ5Mn0=", // Add your session id
PREFIX: process.env.PREFIX || ".",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`AUTO STATUS JUST NOW SEEN BY LARA MD`_*",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
};
