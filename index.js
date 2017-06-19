const readline = require('readline');
var tictactoe = function(board) {
 var board = board  || [["-","-","-"],["-","-","-"],["-","-","-"]];
 board.forEach((elem)=>{
   elem.forEach((dash)=>{
     console.log(dash);
   });
   console.log("\n");
 });
 console.log("Place X");
 console.log("Give coordinates! E.g: 0,0");
 var response = readline();
 placePiece(response);
 checker;
 board.forEach((elem)=>{
   elem.forEach((dash)=>{
     console.log(dash);
   });
   console.log("\n");
 });
 console.log("Place O");
 console.log("Give coordinates! E.g: 0,0");
 checker;
 tictactoe(board);
}
var checker = function(board) {
  for(var i = 0; i<board.length; i++){
    if(board[i][0] === board[i][1] && board[i][0] === board[i][2]){
      console.log("Player" + board[i][0] + " wins!");
      break;
    }else if(board[i][i] === board[i+1][i] && board[i][0] === board[i+2][i]){
      console.log("Player" + board[i][i] + " wins!");
      break;
    }else if(board[0][0] === board[1][1] && board[0][0] === board[2][2]){
      console.log("Player" + board[i][i] + " wins!");
      break;
    }else if(board[0][2] === board[1][1] && board[0][0] === board[2][0]){
      console.log("Player" + board[i][i] + " wins!");
      break;
    }
  }
}
var placePiece= function(str, char) {
  var arr = str.split(",");
  if(this.board[parseInt(arr[0])][parseInt(arr[1])] === "-"){
    this.board[parseInt(arr[0])][parseInt(arr[1])] = char;
  }else{
    console.log("Invalid move. Please enter new coordinates");
    var resp = readline();
    placePiece(resp, char);
  }
}