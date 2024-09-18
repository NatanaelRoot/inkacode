/* WhatsApp chat - message */

let btnWhatsApp = document.querySelector("#btn-whatsapp");
let messageWhatsApp = document.querySelector("#whatsapp-message");
let chatWhatsApp = document.querySelector("#whatsapp-chat");

/* Si es que pasas el cursor por el boton se mostrara el mensaje */

btnWhatsApp.addEventListener('mouseover', (e) => {
    e.preventDefault();
    messageWhatsApp.style.display = 'flex';
}), addEventListener('mouseout' , function(e){
    e.preventDefault();
    messageWhatsApp.style.display = 'none';
});

/* Click para ocultar el chat y mostrar  */

let btnCloseChat = document.querySelector(".whatsapp-chat__btn-close");

/* Se esta mostrando y ocultando con el boton de WhatsApp */
btnWhatsApp.addEventListener('click', (e) => {
    e.preventDefault();
    chatWhatsApp.classList.toggle('translateX');
})

/* Se esta ocultado con el boton cerrar del chat */

btnCloseChat.addEventListener('click', (e) => {
    e.preventDefault();
    chatWhatsApp.classList.remove('translateX');
})

/* Enviar contenido del menssager al WhatsApp */

let btnMessageChat = document.querySelector(".whatsapp-chat__btn-submit");

/* Funcion para enviar los mensajes */
function sendMessage() {
    let messageUser = document.querySelector(".whatsapp-chat__chat").value;
    let contentMessage = messageUser.replace(/ /g,"%20");

    window.open('https://wa.me/992232493?text='+contentMessage, '_blank'); 
}

/* Evento para enviar el mensaje con el boton enviar */

let errorMessage = document.querySelector(".whatsapp-error");

btnMessageChat.addEventListener('click', () => {

    if(messageUser.value.length > 0) {
        sendMessage();

    } else {
        alert("No escribiste nada")
    }

})

/* Evento para enviar el mensaje con la tecla ENTER = 13 */

window.addEventListener('keydown', (e) => {
    if(e.keyCode===13){
        
        if(messageUser.value.length > 0) {
            sendMessage();
        } 

    }
})

/* Logica para mostrar un boton de clear si es que hay contenido en la caja de texto */

let messageUser = document.querySelector(".whatsapp-chat__chat"); 
let btnClearMessage = document.querySelector("#whatsapp-chat__btn-clear")

/* Evento para validar si hay texto en la caja de texto, si hay texto se mostrara el boton si no hubiera se ocultara */

messageUser.addEventListener('input', function() {
    if (messageUser.value.length > 0) {
        btnClearMessage.classList.add('active');
    } else {
        btnClearMessage.classList.remove('active');
    }
});

/* Evento para eliminar el texto que haya en la caja de texto */

btnClearMessage.addEventListener('click', function() {
    messageUser.value="";
    btnClearMessage.classList.remove('active');
    messageUser.focus();
})


/* MODO OSCURO Y MODO CLARO */

let btnModo = document.querySelector('.navbar__mod');

let mainModo = document.querySelector('.navbar__mod-container');

let modoClaro = document.getElementById('claro');

let modoOscuro= document.getElementById('oscuro');

let header = document.querySelector('.header');

let iconNavbar = document.querySelector('.navbar__icon-name');

let modoIcon = document.getElementById('mod-icon');

let inputNavbar = document.getElementById('input');

let primero = document.querySelector('.first');

let btnPrimero = document.querySelector('.first__btn ');

let segundo = document.querySelector('.lenguajes');

let card = document.querySelector('.lenguajes__card');

let footer = document.querySelector('.footer');

let caja = document.querySelector('.ou');

btnModo.addEventListener('click', (e) => {
    e.preventDefault();
    mainModo.classList.toggle('modo');
});


modoOscuro.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = '#000';
    header.style.backgroundColor = '#000';
    iconNavbar.style.color = '#fff';
    modoIcon.style.color = '#fff';
    primero.style.boxShadow ='0px 0px 4px rgba(255, 255, 255, 0.667)';
    primero.style.color ='#fff';
    btnPrimero.style.backgroundColor = '#fff';
    btnPrimero.style.color = '#000';
    segundo.style.boxShadow ='0px 0px 4px rgba(255, 255, 255, 0.667)';
    segundo.style.color = '#fff';
    card.style.color = '#fff';
    footer.style.backgroundColor = 'orange';
})

modoClaro.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = '#fff';
    header.style.backgroundColor = '#fff';
    iconNavbar.style.color = '#000';
    modoIcon.style.color = '#000';
    primero.style.boxShadow ='0px 0px 4px #0007';
    primero.style.color ='#000';
    btnPrimero.style.backgroundColor = '#000';
    btnPrimero.style.color = '#fff';
    segundo.style.boxShadow ='0px 0px 4px #0007';
    segundo.style.color = '#000';
    card.style.color = '#000';
    footer.style.backgroundColor = '#000';
})

/* https://marabelia.com/css-font-size-responsive/ */


btnPrimero.addEventListener('click', () => {
    window.open('https://wa.me/992232493?text='+"Necesito de tu servicio", '_blank'); 
})



