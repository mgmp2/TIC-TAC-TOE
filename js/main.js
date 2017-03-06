
function startTicTacToe(){
//Allow to clean
  for(var i = 1; i<= 9; i++){
    comenzarNuevo(i);
  }
  document.turn = "X";
  document.winner = null;
  mostrar("TURN OF: "+document.turn);
};

function mostrar(msg){
  document.getElementById('message').innerText = msg;
}

function sgtMov(square){
  if(document.winner != null){
    mostrar("The winner was " +document.winner);
  }
  else if(square.innerHTML == ""){
  square.innerHTML = document.turn;
  cambiarTurno();
  }
  else{
  mostrar("This spaces was used");
  }
  }

function cambiarTurno(){
  if(obtenerGanador(document.turn)){
    alert("You win "+document.turn+"!!");
    document.winner = document.turn;
  }
  else if(document.turn == "X"){
    document.turn = "O";
    mostrar("Turn of: "+document.turn);
  }else {
    document.turn = "X";
    mostrar("Turn of: "+document.turn);
  }
}

function obtenerFila(x,y,z, move){
  var r = false;
  if(obtenerResultado(x) == move && obtenerResultado(y) == move &&
     obtenerResultado(z) == move){
       r = true;
     }
     return r;

  }

  function obtenerResultado(number){
    return document.getElementById("t"+number).innerHTML;
  }

  function obtenerGanador(move){
    var result = false;
    if (obtenerFila(1,2,3, move) || obtenerFila(4,5,6, move) ||
        obtenerFila(7,8,9, move) || obtenerFila(1,4,7, move) ||
        obtenerFila(2,5,8, move) || obtenerFila(3,6,9, move) ||
        obtenerFila(1,5,9, move) || obtenerFila(3,5,7, move)){
          result = true;
        }

        return result;
  }

  function comenzarNuevo(number){
     document.getElementById("t"+number).innerHTML = "";

  }
