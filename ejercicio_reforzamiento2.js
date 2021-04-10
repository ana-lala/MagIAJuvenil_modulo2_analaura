/*EJERCICIO DE REFORZAMIENTO 2 MODULO 2 - Ana Laura Chenoweth Galaz*/
//Hice dos arreglos de los alfabetos
var alfabeto1 =["a","b","c","d","e","f","g","h","i","j","k","l","m"];
var alfabeto2 =["n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Cree un arrreglo en el voy a poner el mensaje oculto (osea ya con las claves y así)
var mensajeoculto = [];

//Le pedí al usuario el mensaje
const prompt = require('prompt-sync')();
var mensaje = prompt("Dime el mensaje :D  ");

// En esta variable se almacenan los valores incorrectos (numeros o mayúsculas)
var valoresincorrectos = mensaje.length;

// "x" va a señalar en que elemento estamos en el arreglo de 'mensajeoculto'
for (var x = 0; mensaje.length != mensajeoculto.length; x++) {

    // "y" señala el elemeto en el que estamos
    for (var y = 0; y < mensaje.length; y++) {
        // La estrctura de control es para que cuando el mensaje oculto tenga la misma cantidad de caracteres que el mensaje autentico pare
        if(mensaje[x]==alfabeto1[y]){
            mensajeoculto[x]=alfabeto2[y];
            valoresincorrectos--;
            y = mensaje.length;
        }
        //Este compara lo mismo de arrbia, si no se haya en la primera parte del abecedario se busca en este y pasa lo mismo 
        else if(mensaje[x] == alfabeto2[y]){
            mensajeoculto[x]=alfabeto1[y];//Este es lo que guarda el valor de la parte correspondiente al abecedario en el codigo cifrado
            valoresincorrectos--;//Tiene la misma funcion que el de arriba
            y = mensaje.length;//Como ya fue mencionado este hace que el ciclo se rompa
        }
        // Si el mensaje tiene espacios entre sus palabras este tambien sera trasladado para que se entienda
        else if (mensaje[x]== " "){
            mensajeoculto[x]=" ";//Esto es lo que se insertara en la casilla ya que si solo lo dejamos sin ningun valor al hacer el join 
                             //el espacio no se agrega si no se le indica
            valoresincorrectos--;
            y = mensaje.length;

        }

    }
    //Para que el ciclo no se una infinito :p
    if (x == mensaje.length-1){
        mensajeoculto.length= mensaje.length;}

    // Para que se muestre los valores
    console.log(mensajeoculto)
    console.log(valoresincorrectos)
    
}
console.log("valores incorrectos "+ valoresincorrectos);//Muestra los valores incorrectos como numeros o mayusculas
console.log(mensajeoculto.join('')) // "join" hace que los elementos del arreglo se fusionen en una unica cadena de texto