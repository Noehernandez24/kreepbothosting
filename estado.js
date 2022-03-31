let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let estado =`
*ミHola estimado usuario彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*

¡Kreep bot esta funcionando correctamente! 👾
Haz click en "Menu principal" para ver la lista de comandos 
`.trim()


conn.sendHydrated(m.chat, estado, wm, picture, 'https://wa.me/+50360474702?text=Hola', 'REPORTAR BUGS', null, null, [
['MENÚ PRINCIPAL', '/comandos'],
['AGREGAR BOT A GRUPO', '/agregaragrupo'],
['CREADOR', '/owner'],
], m)}

handler.command = /^(estado|alive|estate|state|stado|stats)$/i
export default handler
