window.onload = function() {


var opciones = [
"No se cantar bien",
"Pidiendo Perdon",
"Saludos",
"Lagrimas",
"Pasen el link",
"₍₍ (ง ˙ω˙)ว ⁾⁾",
"Problemas Tecnicos",
"No se oye",
"Empezando Tarde",
"Se cae la transmicion",
"Copyrigth strike",
"En Monoaural",
"En Estereo",
"Sangre nueva",
"Grabando escondido",
"Grabando en el baño",
"Sonidos raros",
"Audio Desincronizado",
"Apenas la grabe",
"Es Hombre?",
"Es Mujer?",
"No se vale cantar",
"Ya Gano",
"Canto en el bulto pasado",
"No canto en el bulto pasado",
"Perritos de fondo.",
"Bebé cantando.",
"Cancion repetida",
"Yo queria cantar esa",
"Bajenle al volumen",
"Mi infancia",
"Cancion de mi mamá",
"Cancion de mi papá",
"Cancion Popular (+2 veces)",
"OP/ED Anime Latino",
"Monos Chinos en Japones",
"Animu in English",
"Banda",
"Tokusatsu",
"Roboces",
"Idols",
"Opera",
"Rap",
"CPUB equivocado",
"CPUB es Tendencia",
"Memes del año pasado",
"Joche con memes",
"Ganganm Style",
"Pog Champ",
"Arjoneando",
"Evangelion",
"Pausa para el baño",
"Mas de 10 entries",
"Mas de 20 entries",
"Exactamente 11 minutos",
"Menos de 1 minuto"
"Tiempo De Vals"
];


var num_opciones = opciones.length;


// hacemos dos ciclos uno para columnas, otra para renglones
// cada celda, seleccionamos un numero dentre 0 y length
// tomamos la celda y cambiamos el texto por un nuevo

var tabla = document.getElementById("BingoTabla");

var borrados =0;
for ( let row = 0; row < 5; row ++){
    //metemos una nueva tabla
    var renglon = tabla.insertRow(row);
    for ( let cell = 0; cell < 5; cell ++){

        var celda = renglon.insertCell(cell);

        if ( row == 2 && cell ==2){
            //FreeCELL
            celda.innerHTML = "#CPUBXV<BR>FREE" ;
            celda.setAttribute("class", "central");
            continue;
        }

        //escogemos el numero al azar
        var texto = ""
        if (borrados == num_opciones ){
            alert("No hay suficientes textos para terminar el bingo")
            break;
        }

        while ( !texto ) {
            azarazo= Math.floor((Math.random() * num_opciones));
            texto = opciones[ azarazo ];
        }
        celda.innerHTML =texto ;
        opciones[azarazo]="";
        borrados ++;
    }
}

}