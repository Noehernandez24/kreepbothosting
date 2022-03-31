let handler =  m => m.reply(`
*¡Hola soy KreepBot!*
\n
¡Me alegra saber que quieres donar! 🙌🏻
\n
KreepBot es un proyecto nuevo
que necesita apoyo, tu donación
ayudara a comprar sevidores de
hosting, para que el bot funcione
las 24 horas del dia
PayPal:
https://www.paypal.me/KreepDonaciones
\n
De antemano, ¡muchas gracias! 💙
\n
Por cierto... Los donadores tienen beneficios dentro del bot... 😎
Si deseas y puedes apoyar este proyecto, envíame una captura de pantalla de tu donación a mi numero: https://wa.me/+50360474702
Cuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te diré los pasos que debes seguir para añadir el bot a tu grupo 🤭
`.trim()) // Tambah sendiri kalo mau



handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
