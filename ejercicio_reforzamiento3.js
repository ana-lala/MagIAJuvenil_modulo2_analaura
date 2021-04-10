/*EJERCICIO DE REFORZAMIENTO 3 MODULO 2 - Ana Laura Chenoweth Galaz*/

const prompt = require('prompt-sync')();
//Empezé haciendo una función donde se puede prender y apagar el dron
var BotonEncendido = function OnOff(a) {
    if(a == 1){ 
        console.log("Prendiste el dron ¡Buen trabajo!");
        return "ON";
    }else if (a == 0){
        console.log("El dron esta apagado :(")
        return "OFF";
    }
    else {
        console.log("Intenta usar 1 o 0 para prender y apagar")}
}

// Aquí hice los obstaculos
// Lo que hice fue declarar dos arrglos uno de numeros (para el orden) y otro de nombres (para el nombre de los obstaculos) :D
var ObstaculosNum = [1 , 1 , 2 , 0 , 3 , 0];
var ObstaculosNombre = ['Aro alto \n', 'Aro Bajo \n', 'Tobogan que gira a la derecha\n', 'Tobogan que gira a la izquierda\n'];

//Aquí le hice la pregunta para iniciar la carrera
// Y se le explica las opciones al poner un 0 Significa que si quiere
// Al poner un 1 significa que no quiere
var PreguntaInicio = parseInt(prompt("¿Quieres iniciar la carrera? \n SI = 1 n\ NO = 0 \n"));

//Esta variable es para contar los obstaculos que ha logrado pasar
var ObstaculosLogrados = 0 ;

//La repuesta que de el usuario en la PreguntaInicio sera la "a" en la funcion "BotonEncendido"
if (BotonEncendido(PreguntaInicio)== "ON"){
    //Aquí se le muestran las instrucciones una vez encendido el dron para que pueda manejar los controles
     
    console.log("      INTRUCCIONES     \n"
                +"Anotalas ;)\n"
                +"1 = Arriba => Aro alto \n"
                +"2 = Abajo => Aro bajo \n"
                +"3 = Girar hacia la Derecha => Se usa para el Tobogan Derecho \n"
                +"4 = Girar hacia la Izquierda => Se usa para el Tobogan Izquierdo\n");
     
    var entendido = prompt("¿Entendido? SI O NO");// Elaboré esta pregunta para que el usuario le quede claro las instrucciones

    if(entendido=="no"||entendido=="NO"||entendido=="No"){
        //Se le vuelven a dar las instrucciones
        console.log("      INTRUCCIONES     \n"
        +"Anotalas >:( \n"
        +"1 = Arriba => Aro alto \n"
        +"2 = Abajo => Aro bajo \n"
        +"3 = Girar hacia la Derecha => Se usa para el Tobogan Derecho \n"
        +"4 = Girar hacia la Izquierda => Se usa para el Tobogan Izquierdo\n");
        var entendido = prompt("¿Entendido? SI O NO");// Se le vuelve a preguntar si entendio otra vez
    }

    for (var obstaculos = 0; obstaculos < ObstaculosNum.length; obstaculos++){
            //Aquí acomodé el arreglo de los numero de los obstaculos dentro del arreglo de los nombres de los obstaculos
            console.log(ObstaculosNombre[ObstaculosNum[obstaculos]]);
            
            //Aquí es donde le pregunto al jugador que accion quiere hacer (arriba, abajo, girar derecha o izquierda)
            var AccionJugador =parseInt(prompt(" ¿Te acuerdas de las instrucciones? Ahora las vas a usar... Pon el numero que crees que es correcto Suerte ;)"));

            //Aca hice un Switch, para que así le informará al usuario si su respuesta es correcta o no :0
            switch (AccionJugador) {
                case 1:
                    arriba();
                    // Llama a la función que hace ir hacia arriba
                    exito(AccionJugador-1 == ObstaculosNum[obstaculos]);
                    // Aquí le llamó a la función exito, si cumple la condición pasara el obstaculo y si no esta enviará el mensaje de que se equivocó
                    break;
                
                case 2:
                    abajo();
                    exito(AccionJugador-1 == ObstaculosNum[obstaculos]);
                    break;

                case 3:
                    DerechaGirar();
                    exito(AccionJugador-1 == ObstaculosNum[obstaculos]);
                    break;    
            
                case 4:
                    IzquierdaGirar();
                    exito(AccionJugador-1 == ObstaculosNum[obstaculos]);
                    break;

                default://El default es por si el usuario Puso un numero que no corresponde a los botones de las acciones
                // Es decir que no puso ni 1 ni 2 ni 3 ni 4 :/
                    console.log("Ese numero no se encuentra en las acciones :() \n");
                    exito(false);
                    break;
        }
    }
}

console.log(BotonEncendido(1));

//Aquí le informé al Jugador sus resultados en la carrera ;D
if (ObstaculosLogrados == 6){
    console.log('Excelente!! Felicidades lo hiciste muy bien :D\n')
}

else if (ObstaculosLogrados < 2){
    console.log('Intentalo la proxima amigo :() \n')
    }

else {
    console.log('Casi lo logras ;) \n');
    }

    // Y aquí le pusé su numero de obstaculos superados :))
console.log("Los obstaculos que superaste fueron:"+ ObstaculosLogrados);


// FUNCIONES PARA LOS BOTONES DE MOVIMIENTOS
function arriba() {
    console.log("Arribaa \n")
    prompt("Pon un punto para continuar");  
}

function abajo() {
    console.log("Abajooo \n")
    prompt("Pon un punto para continuar");
}

function DerechaGirar() {
    console.log("Vuelta a la derechaaa Wuuu \n")
    prompt("Pon un punto para continuar");
}

function IzquierdaGirar() {
    console.log("Vuelta a la izquierdaaa Wuuu")
    prompt("Pon un punto para continuar");
}

//Esta es la funcion de Exito para saber si el obstaculo lo supero o no 
// Z es un dato booleano para saber si lo supero o no
function exito(z) {
    if (z) {
        console.log("Wuuu!! Lo lograte \n");
        prompt("Pon un punto para continuar"); 
        return ObstaculosLogrados++;}//Si lo logr+o pues se le suma mas 1 al numero de obstaculos logrados

    else {
        console.log ("AYY te golpeaste upss \n")
        prompt("Pon un punto para continuar"); 
    }
}