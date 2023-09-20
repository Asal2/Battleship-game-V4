var myURL = "http://127.0.0.1:3000";

var socket = io(myURL, { secure: true });

socket.on("playermoved", function (move) {
  socketMoves(move); //call socket moves which have to broadcast the player2 move
});

socket.on("resetted", function (status) {
  if (status.reset == true) {
    // if status is true
    creatminiHTMLTable(); //reset the minitable once it recieves reset signal from the other player's board
  }
});
