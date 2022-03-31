let handler =  m => m.reply(`
*¡Hola soy KreepBot!*
\n
👾 ¿Como agrego el bot a mi grupo?: Para agregar el bot a tu grupo, tienes que hacer una donación, usa el comando /donate para mas información.

👾 ¿Cuánto tengo que donar para agregar el bot   a un grupo?: Pues, es una donación, lo que quieras donar depende de ti.

👾 ¿Porque tengo que donar para agregarlo a un grupo?: El principal motivo es que los bots de WhatsApp son muy limitados, y entre en más grupos este, más se saturan los servidores haciendo que el bot deje de funcionar, por lo que al donar será un beneficio para aquellos que decidan apoyar el proyecto.

Además de que todo lo que dones sera usado exclusivamente para el mantenimiento del bot, como por ejemplo comprar  servicios de hosting, para que el bot este funcionando 24/7.
*(Ya que actualmente el bot no funciona todas las horas del dia)*

👾 Escribe /donate para obtener más información.
`.trim()) // Tambah sendiri kalo mau



handler.help = ['agregar a grupo']
handler.tags = ['info']
handler.command = /^agregaragrupo$/i

export default handler