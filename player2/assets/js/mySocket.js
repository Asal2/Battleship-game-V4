var myURL = "http://127.0.0.1:3000";

var socket = io(myURL, { secure: true });

socket.on("playermoved", function (move) {
  socketMoves(move);
});

socket.on("resetted", function (status) {
  creatminiHTMLTable();
});
