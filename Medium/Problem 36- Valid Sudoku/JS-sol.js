/**
 * Iterates an input 9x9 char matrix to determine
 * if the matrix is a valid sudoku board.
 * Valid boards contain no duplicated numeric chars
 * in any single row, column, or 3x3 sub-grid. Empty
 * positions are represented by "." char. Non-empty
 * positions must contain a numeric char [1,9].
 * @param  {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let x = 0; x < 9; x++) {
    // init sets that empty ea reloop of x
    let row = new Set()
    let col = new Set()
    let grd = new Set()

    for (let y = 0; y < 9; y++) {
      // ea box is a position on a cartesian plane
      let rowBox = board[x][y]
      let colBox = board[y][x]

      // formula to automate positioning in 3x3 subgrids
      let xGrd = 3 * Math.floor(x / 3) + Math.floor(y / 3)
      let yGrd = 3 * (x % 3) + (y % 3)
      let grdBox = board[xGrd][yGrd]

      // check rows, ignoring empties
      if (rowBox !== '.') {
        // position = duplicated num
        if (row.has(rowBox)) return false
        // position != duplicated num
        row.add(rowBox) // add to set
      }
      // check cols
      if (colBox !== '.') {
        if (col.has(colBox)) return false
        col.add(colBox)
      }
      // check 3x3 subgrids
      if (grdBox !== '.') {
        if (grd.has(grdBox)) return false
        grd.add(grdBox)
      }
    }
  }
  // nested loops finish iteration w/out exiting early
  return true // board is valid sudoku
}
