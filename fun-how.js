let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Etiquete a una persona ejemplo: ${usedPrefix}${command} @Samuel`
    conn.reply(m.chat, `
 ¿Cual es el porcentaje de Gay de *${text}*?
  *${text}* es *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i

export default handler