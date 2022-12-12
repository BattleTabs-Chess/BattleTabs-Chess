const BOARDHEIGHT = 8; // How many ranks
const BOARDWIDTH = 8; // How many files 
const PIECES = {
  E = 0 // Empty square
  
  P = 1 // White Pawn 
  N = 2 // White Knight 
  B = 3 // White Bishop 
  R = 4 // White Rook 
  Q = 5 // White Queen 
  K = 6 // White King 
  
  p = 9 // Black Pawn 
  n = 10 // Black Knight 
  b = 11 // Black Bishop 
  r = 12 // Black Rook 
  q = 13 // Black Queen 
  k = 14 // Black King 
};
// This way we can represent the pieces using binary notation:
// 0010
// First digit (0) represents the colour, second to fourth digits represent the piece. 
// 0000 is an empty square. 

export { BOARDHEIGHT, BOARDWIDTH, PIECES };
