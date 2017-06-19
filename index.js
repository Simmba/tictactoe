const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var tictactoe = function (board) {
  var board = board || [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ];
  board.forEach((elem) => {
    console.log(elem[0] + elem[1] + elem[2]);
  });
  Promise.resolve("Game").then(askX).then(askO).then(tictactoe(board));
}
var checker = function (board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      console.log("Player" + board[i][0] + " wins!");
      break;
    } else if (board[i][i] === board[i + 1][i] && board[i][0] === board[i + 2][i]) {
      console.log("Player" + board[i][i] + " wins!");
      break;
    } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      console.log("Player" + board[i][i] + " wins!");
      break;
    } else if (board[0][2] === board[1][1] && board[0][0] === board[2][0]) {
      console.log("Player" + board[i][i] + " wins!");
      break;
    }
  }
}
var placePiece = function (str, char) {
  var arr = str.split(",");
  if (this.board[parseInt(arr[0])][parseInt(arr[1])] === "-") {
    this.board[parseInt(arr[0])][parseInt(arr[1])] = char;
  } else {
    console.log("Invalid move. Please enter new coordinates");
    var resp = readline();
    placePiece(resp, char);
  }
}
var askX = function(){
  rl.question("Place X. Give coordinates! E.g: 0,0 \n", (answer) => {
    placePiece(answer);
    checker;
    board.forEach((elem) => {
      console.log(elem[0] + elem[1] + elem[2]);
    });
  });
}
var askO = function () {
  rl.question("Place O. Give coordinates! E.g: 0,0", (answer) => {
    console.log(answer);
    placePiece(answer);
    checker;
  });
}
tictactoe();