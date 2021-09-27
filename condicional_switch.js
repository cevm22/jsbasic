
//ES NECESARIO usar "break;" para que termine el Switch case. De lo contrario
//seguirà arrojando resultados aleatorios, o Realizarà todos los casos faltantes
function game(human,bot){
    switch(human){
        case "paper":
            switch(bot){
                case "paper":
                    console.log("is a tie");
                    break;
                case "rock":
                    console.log("WIN");
                    break;
                case "scissors":
                    console.log("LOSE");
                    break;
            }break;
        case "rock":
            switch(bot){
                case "paper":
                    console.log("LOSE");
                    break;
                case "rock":
                    console.log("is a tie");
                    break;
                case "scissors":
                    console.log("WIN");
                    break;
            }break;
        case "scissors":
            switch(bot){
                case "paper":
                    console.log("win");
                    break;
                case "rock":
                    console.log("LOSE");
                    break;
                case "scissors":
                    console.log("is a tie");
                    break;
            }break;

    }
}

game("paper","rock")