/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'teshnig' // ubah aja
global.email = 'francisngolua09@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ༺֎ᚏ༈࿉𝑇𝛯𝑆𝛨𝛮𝛪𝐺⧉ᚙ֎⸙༻' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['ꪶ༺֎ᚏ༈࿉𝑇𝛯𝑆𝛨𝛮𝛪𝐺⧉ᚙ֎⸙༻'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '⫹⸙⧉ꪶ༺֎ᚏ༈࿉𝑇𝛯𝑆𝛨𝛮𝛪𝐺⧉ᚙ֎⸙༻⧉⸙⫺' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '⫹⸙⧉ꪶ༺֎ᚏ༈࿉𝑇𝛯𝑆𝛨𝛮𝛪𝐺⧉ᚙ֎⸙༻⧉⸙⫺' // ubah aja ini nama sticker
global.author = 'ꪶ༺֎ᚏ༈࿉𝑇𝛯𝑆𝛨𝛮𝛪𝐺⧉ᚙ֎⸙༻' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classic' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
