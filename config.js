let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6281292709196" ],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   error: "errorr!!"
   },
   prefix: "#",
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU', // buat Image Button
   packname: "Created With ♥️ Powered By Dend <Ra> ☕",
   author: 'Mau Nyolong Yah ? (´ε｀ ) ',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}
module.exports = userbot

