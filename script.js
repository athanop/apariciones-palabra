function cantidadPalabraRepetida(){
    let textoCompleto = document.getElementById('texto').value.split(" ");
    const lowerText = textoCompleto.map(element => {
        return element.toLowerCase();
      });
    let palabraABuscar = document.getElementById('palabra').value.toLowerCase();
    let cantidadDePalabrasDelTexto = lowerText.length; //tamaño total del texto ingresado
    if(lowerText[0] == ""){
        alert("No pusiste ningún texto");
        document.getElementById("cantidad").value = "Valor indeterminado"
    }
    else{
        document.getElementById("cantidad").value = "Apariciones: " + buscarPalabra(cantidadDePalabrasDelTexto, lowerText, palabraABuscar);
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


