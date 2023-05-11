function encriptador(texto_a_encriptar) {
    const lista = texto_a_encriptar.split(" ");
    const vocales_a_reemplazar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
    };
    const texto_encriptado = [];
    for (let i of lista) {
        for (let [vocal, nueva_vocal] of Object.entries(vocales_a_reemplazar)) {
        i = i.replace(vocal, nueva_vocal);
    }
    texto_encriptado.push(i);
    }
    const encriptado = texto_encriptado.join(" ");
    console.log(encriptado);
    return encriptado;
}


function desencriptar(texto_encriptado) {
    const diccionario = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
    };
    let texto_desencriptado = "";
    const palabras = texto_encriptado.split(" ");
    
    for (let palabra of palabras) {
        for (let [clave, valor] of Object.entries(diccionario)) {
        palabra = palabra.replace(clave, valor);
    }
    texto_desencriptado += palabra + " ";
    }
    console.log(texto_desencriptado.trim());
    return texto_desencriptado.trim();
}




const textarea = document.getElementById("textarea");
const textoOutput = document.getElementById("texto-output");
const absolute = document.getElementById("absolute");
const botones= document.getElementById("botones");
textarea.focus();

//quitar imagen y hacer visible el boton
function quitarImg(){
    textarea.value="";
    absolute.style.display = "none";
    botones.style.opacity = 1;
}

//encriptar
const botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", function() {
    event.preventDefault();
    const textoEncriptado = encriptador(textarea.value);
    quitarImg();
    textoOutput.innerHTML = textoEncriptado;
    textarea.focus();
});

//desencriptar
const botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click", function() {
    event.preventDefault();
    const textoDesencriptado = desencriptar(textarea.value);
    quitarImg();
    textoOutput.innerHTML = textoDesencriptado;
    textarea.focus();

});

//copiar
function copiar() {
    const texto = textoOutput.innerText;
    navigator.clipboard.writeText(texto);
    
    const alerta = document.createElement("div");
    alerta.textContent = "¡Texto copiado!";
    alerta.classList.add("alerta-copiar");
    document.body.appendChild(alerta);
    
    setTimeout(function() {
    alerta.remove();
    textarea.focus();
    }, 1000);
    
}