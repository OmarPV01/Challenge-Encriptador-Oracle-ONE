const textArea = document.querySelector("#text-input");
const mensaje = document.querySelector("#text-output");
var areaContenidoVacio = document.querySelector('.contenido-resultado-vacio');
var areaContenidoOK = document.querySelector('.contenido-resultado-ok');

areaContenidoVacio.style.display = 'block'
areaContenidoOK.style.display = 'none'

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    
    areaContenidoVacio.style.display = 'none'
    areaContenidoOK.style.display = 'block'
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    areaContenidoVacio.style.display = 'none'
    areaContenidoOK.style.display = 'block'
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
}