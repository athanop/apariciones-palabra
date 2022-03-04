function cantidadPalabraRepetida(){
    let textoCompleto = document.getElementById('texto').value.split(" ");
    let palabraABuscar = document.getElementById('palabra').value;
    let cantidadDePalabrasDelTexto = textoCompleto.length; //tamaño total del texto ingresado
    if(textoCompleto[0] == ""){
        alert("No pusiste ningún texto");
        document.getElementById("cantidad").value = "Valor indeterminado"
    }
    else{
        document.getElementById("cantidad").value = "La cantidad es: " + buscarPalabra(cantidadDePalabrasDelTexto, textoCompleto, palabraABuscar);
    }
}


function buscarPalabra(cantPalabra, texto, palabra){
    let repetidas = 0;
    for (i=0; i < cantPalabra; i++){
        repetidas = repetidas + estaLaPalabra(texto, palabra);
    }
    return repetidas;
}

function estaLaPalabra(texto, palabra){
    if(texto[0] == palabra){
        texto.shift();
        return 1;
    }
    else{
        texto.shift();
        return 0;
    }
}

