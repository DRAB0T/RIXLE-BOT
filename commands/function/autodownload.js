const { servers, yta, ytv } = require('../../Lib/y2mate')
const fetch = require('node-fetch')
let yts = require('yt-search')
const { tiktok } = require("../../Lib/scrape.js")

module.exports = { 
name: "autodownlaod", 
async functions(m) {
let { conn } = data

if (/^https?:\/\/.*youtu/i.test(m.text)) {
        let results = await yts(m.text)
        let vid = results.all.find(video => video.seconds < 3600)
        if (!vid) return m.reply('Video/Audio Tidak ditemukan')
        let yt = false
        let usedServer = servers[0]
        for (let i in servers) {
            let server = servers[i]
            try {
                yt = await yta(vid.url, server)
                yt2 = await ytv(vid.url, server)
                usedServer = server
                break
            } catch (e) {
                m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
            }
        }
        if (yt === false) return m.reply(eror)
        if (yt2 === false) return m.reply(eror)
        let { dl_link, thumb, title, filesize, filesizeF } = yt
        m.reply('SEDANG DIPROSES')
        await conn.sendFile(m.chat, dl_link, title + ".mp3", null, m)
   }
     if (/^https?:\/\/.*vt/i.test(m.text)) {
     let ttdata = await tiktok(m.text)
     conn.sendMessage(m.chat, await (await Ft.fetch(ttdata.result.nowm)).buffer(),"videoMessage",{quoted:m})
     }
}
}
//Madeby Rizxyu
