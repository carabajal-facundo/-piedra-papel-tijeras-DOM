alert("Esto es piedra, papel o tijeras!!!");
function jugar(){
    if(document.getElementById('piedra').checked){
        comparar('piedra');
    }
    else if(document.getElementById('papel').checked){
        comparar('papel');
    }
    else if(document.getElementById('tijeras').checked){
        comparar('tijeras');
    }
}

function comparar(eleccion){
    let random = parseInt(Math.random() * (4 - 1) + 1);
    //1 representa piedra, 2 representa papel y 3 representa tijeras
    switch (eleccion) {
        case 'piedra':
            if (random == 1) {
                alert("Fue un empate :D");
            }
            else if (random == 2) {
                alert("Ganaste!!");
            }
            else if (random == 3) {
                alert("Perdiste JAJAJA!!");
            }
            break;
        case 'papel':
            if (random == 1) {
                alert("Ganaste!!");
            }
            else if (random == 2) {
                alert("Fue un empate :D");
            }
            else if (random == 3) {
                alert("Perdiste JAJAJA!!");
            }
            break;
        case 'tijeras':
            if (random == 1) {
                alert("Perdiste JAJAJA!!");
            }
            else if (random == 2) {
                alert("Ganaste!!");
            }
            else if (random == 3) {
                alert("Fue un empate :D");
            }
            break;
    }
}