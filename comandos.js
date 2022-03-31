let handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './Menu2.jpg'
    let comandos =`
*👾Comandos del bot👾*
\n
➥ /alive - Verifica si el bot
funciona correctamente.
➥ /comandos - Muestra la lista de comandos.
➥ /play (Nombre de la canción) -
Descarga cualquier canción.
➥ /sticker (Responde a la foto o video)
- Crea un sticker de la foto dada, si
envia un video el bot le dara
un sticker animado.
➥ /image - Busca alguna imagem desde
Google Pictures (Ej: /image Minecraft).
➥ /wiki - Busca algo en Wikipedia.
➥ /igstalk (nombre de usuario) - Stalkea
un perfil en instagram.
➥ /del (responde a un mensaje del bot) -
Elimina el mensaje del bot al que respondas
➥ /spotify (Nombre de la canción) - 
Envia información y vista previa
de la canción en spotify.
➥ /tomp3 - Convierte mp4 a mp3
➥ /donate - Dona para que el bot funcione las 24 horas del día.
\n
Por favor, ten en cuenta que es un proyecto que
 aún está en desarrollo y puede contener fallas 🚧
 
 Unete al grupo de soporte del bot, donde podras solventar tus dudas:
 https://chat.whatsapp.com/I2Ykt6TerwD4yfarO2joOG
 `.trim()

 conn.sendHydrated(m.chat, comandos, wm, picture, 'https://wa.me/+50360474702?text=Hola', 'REPORTAR BUGS', null, null,[

 ], m)}


 handler.command = /^comandos|commands$/i
 export default handler
 





