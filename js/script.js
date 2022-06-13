window.onload = inicio;

const BEBIDAS = 200;
const BURRITOS_TRADICIONALES = 800;
const BURRITOS_POLLO_ARROZ = 850;
const NACHOS = 600;
const TACOS_SET = 750;
const TACOS_POLLO = 700;
const TACOS_RES = 850;

let suma = document.querySelectorAll(".suma");
let resta = document.querySelectorAll(".resta");
let total = document.getElementById("total");


function inicio(){

    suma.forEach((suma) => {
        suma.addEventListener('click', e => {
            let padre = e.target.parentNode.id
            let contador = parseInt(e.target.parentNode.children[1].innerText);
            let elemento = e.target.parentNode.children[1];
            
            contador += 1;
            elemento.innerText = contador;

            let precio = encontrarPrecio(padre);
            let precioTotal = parseInt(total.innerText);

            precioTotal += precio;

            total.innerText = precioTotal;

        })
    })

    resta.forEach((resta) => {
        resta.addEventListener('click', e => {
            let padre = e.target.parentNode.id
            let elemento = e.target.parentNode.children[1];
            let contador = parseInt(e.target.parentNode.children[1].innerText);
            

            if ( contador != 0) {
                contador -= 1;
                elemento.innerText = contador;

                precio = encontrarPrecio(padre);
                precioTotal = total.innerText;
                
                precioTotal -= precio;

                total.innerText = precioTotal;
            }
        })
    })


}

function encontrarPrecio(id){
    precio = 0;
    if ( id == "pollo" || id == "arroz") {
        precio += BURRITOS_POLLO_ARROZ; 
    } else if ( id == "tradicionales" ) {
        precio += BURRITOS_TRADICIONALES;
    } else if ( id == "mezcal" || id == "tejuino" || id == "tequila") {
        precio += BEBIDAS;
    } else if ( id == "wacamole" || id == "cheddar") {
        precio += NACHOS;
    } else if ( id == "set" ){
        precio += TACOS_SET;
    } else if ( id == "t-res") {
        precio += TACOS_RES;
    } else {
        precio += TACOS_POLLO;
    }

    return precio;
}

