
function juego (human,bot){

    if(human==="papel" && bot==="piedra"){
        console.log("Ganaste con " + human + "bot Pierde con " +bot);
    }else if(human==="piedra" && bot==="papel"){
        console.log("Perdiste con " + human + "bot Gana con " + bot);
    }else if(human==="tijera" && bot==="papel"){
        console.log("Ganaste con " + human + "bot Pierde con " +bot);
    }else if (human==="papel" && bot==="tijera"){
        console.log("Perdiste con " + human + "bot Gana con " + bot);
    }else if(human==="tijera" && bot==="piedra"){
        console.log("Perdiste con " + human + "bot Gana con " + bot);
    }else if (human==="piedra" && bot==="tijera"){
        console.log("Ganaste con " + human + "bot Pierde con " +bot);
    }else{
        console.log("empate");
    }
};

//tambien hay otros tipos de condicionales IF llamados ternario
//El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos.
// funciona de la siguiente manera:
condición ? expr1 : expr2 ;
//si la condicion se cumple sucede "expr1", si no, sucede "expr2". EJEMPLOs:
3>2 ? "es mayor" : "es menor"; 
//se puede asignar el resultado a una variable en 1 linea
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
// Se puede usar varios ternarios:
var firstCheck = false,
var secondCheck = false,
var access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"