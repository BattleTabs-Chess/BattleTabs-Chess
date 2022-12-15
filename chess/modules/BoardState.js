import * from "./ChessConstants.js";

function BoardState(fen = "8/8/8/8/8/8/8/8 w - - 0 0") {
  let state = {}; // The BoardState object to be returned 
  let boardGrid = []; // The board 
  
  // Step 1: Parse the FEN string. If none is provided or the string is invalid, default to an empty board. 
  let splitFenSlash = fen.split("/"); 
  if (splitFen.length != 8) return Boardstate();
  let index = 0;
  for (let i = 0; i < 7; i++) {
    let potato /* what am i supposed to call it lol */ = splitFenSlash.split(""); 
    for (let j = 0; j < potato.length; /* Finding the length of a potato */ j++) {
      if (potato[j] in PIECES || potato[j]) {
        boardGrid[index++] = PIECES[potato[j]];
        continue; 
      } else if (Number(potato[j]) && Number(potato[j]) > 0 && Number(potato[j]) <= 8) {
        for (let k = 0; k < Number(potato[j]); k++) {
          boardGrid[index++] = PIECES["E"];
        }
        continue;
      } else { 
        return BoardState();
      }
    }
  }
  let lastEntries = splitFenSlash.split(" ");
  if (lastEntries.length == 6) {
    let potato /* what am i supposed to call it lol */ = lastEntries[0].split(""); 
    for (let j = 0; j < potato.length; /* Finding the length of a potato */ j++) {
      if (potato[j] in PIECES || potato[j]) {
        boardGrid[index++] = PIECES[potato[j]];
        continue; 
      } else if (Number(potato[j]) && Number(potato[j]) > 0 && Number(potato[j]) <= 8) {
        for (let k = 0; k < Number(potato[j]); k++) {
          boardGrid[index++] = PIECES["E"];
        }
        continue;
      } else { 
        return BoardState();
      }
    }
  } else {
    return BoardState();
  }
  if (boardGrid.length != 64) {
    return BoardState();
  }
  
}

export { BoardState };
