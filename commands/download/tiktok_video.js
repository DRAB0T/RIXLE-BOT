const fs = Ft.fs
const tiktokmusic = require("../../Lib/scrape.js").tiktokmusic
const tiktok = require("../../Lib/scrape.js").tiktok
const fetch = require('node-fetch')
module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
if (!args[0]) return m.reply("please input url")
let ttdata = await tiktokmusic(`${[args[0]]}`)
let teks = `Nickname : ${ttdata.meta.author.nickname}\nDesc : ${ttdata.meta.desc}\nDuration : ${ttdata.meta.video.duration}\n\nPilih Type Dibawah Ini!!`

conn.send2Button(m.chat, teks, userbot.packname,`VIDEO`, `tnowm ${[args[0]]}`, `AUDIO` , `tmusic ${[args[0]]}`, {quoted: m})
} catch (e) {
m.reply('erorr')
}
}
}
//BUTIMG ANJG JANGAN BUTTON IMG ITU EROR
