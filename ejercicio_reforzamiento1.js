/*EJERCICIO DE REFORZAMIENTO 1 MODULO 2 - Ana Laura Chenoweth Galaz*/

// Le pido al usuario e codigo del producto y el money moeny money que tiene (dinero) y convierto el dinero en un dato tipo numero
const prompt = require('prompt-sync')();

var codigo = prompt("Ingresa el codigo del producto, por favor:  ");
var money = prompt("Ingrese la cantidad de dinero aquí, por favor:  ");
var moneynumber = Number(money);

//Hago una estructura de control y si su codigo es igual a "xc23" le pongo la compra del chocolate :D
//Y en caso de que no tenga dinero pues le muestro el mensaje de: "Dinero insuficiente para comprar este producto  "
if( codigo == "xc23" ){

    if (moneynumber >= 12.5){
    console.log("Compra de chocolate exitosa, gracias por su preferencia  ");
    if (moneynumber>12.5){
        var cambiochocolate = moneynumber-12.5;
        console.log("Tu cambio es de "+cambiochocolate);
    }
    } else if(moneynumber < 12.5){
        console.log("Dinero insuficiente para comprar este producto  ");
    }
} 
// Lo mismo que arriba pero ahora con el codigo "c4f2" y ahora se compra una paleta :)
if( codigo == "c4f2" ){

    if (moneynumber >= 5.75){
    console.log("Compra de paleta exitosa, gracias por su preferencia ");
    if (moneynumber>5.75){
        var cambiopaleta = moneynumber-5.75;
        console.log("Tu cambio es de "+cambiopaleta);
    }
    } else if(moneynumber < 5.75){
        console.log("Dinero insuficiente para comprar este producto  ");
    }
} 
// Lo mismo que arriba pero ahora con el codigo "gt74" y ahora se compra un chicle ;D
if( codigo == "gt74"){

    if (moneynumber >= 4.25){
    console.log("Compra de chicle exitosa, gracias por su preferencia  ");
    if (moneynumber>4.25){
        var cambiochicle = moneynumber-4.25;
        console.log("Tu cambio es de "+cambiochicle);
    }
    } else if(moneynumber < 4.25){
        console.log("Dinero insuficiente para comprar este producto  ");
    }
} 
// Lo mismo que los anteriores  pero ahora con el codigo "l3k8" y ahora se compra una galleta ^.^
if( codigo == "l3k8"){

    if (moneynumber >= 9.1){
    console.log("Compra de galleta exitosa, gracias por su preferencia  ");
    if (moneynumber>9.1){
        var cambiogalleta = moneynumber-9.1;
        console.log("Tu cambio es de "+cambiogalleta);
    }
    } else if(moneynumber < 9.1){
        console.log("Dinero insuficiente para comprar este producto  ");
    }
} 

// Esta condicional la hice por si acaso y el codigo que ingresaron no esta marque que esta incorrecto
if(codigo != "xc23" && codigo != "c4f2" && codigo != "gt74" && codigo != "l3k8" ){
    console.log("Código incorrecto, ingresa un código valido  ");
}