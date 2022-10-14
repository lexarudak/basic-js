const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example

 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const cleanMatrix = matrix.map(val => {
    const newRow = []
    val.forEach(el => {
      newRow.push(0)
    })
    return newRow
  })

  

    matrix.forEach((bigVal, bigInd, BigArr) => {
    bigVal.forEach((minVal, minInd, minArr) => {
      if(minVal){
        if (cleanMatrix[bigInd - 1]){
          if (minInd !== 0) {
            cleanMatrix[bigInd - 1][minInd - 1] ++
          }
            cleanMatrix[bigInd - 1][minInd] ++
          if(minInd !== minArr.length - 1){
            cleanMatrix[bigInd - 1][minInd + 1] ++
          }
        }
         if (minInd !== 0) {
            cleanMatrix[bigInd][minInd - 1] ++
          }
          if(minInd !== minArr.length - 1){
            cleanMatrix[bigInd][minInd + 1] ++
          }
        if (cleanMatrix[bigInd + 1]){
          if (minInd !== 0) {
            cleanMatrix[bigInd + 1][minInd - 1] ++
          }
            cleanMatrix[bigInd + 1][minInd] ++
          if(minInd !== minArr.length - 1){
            cleanMatrix[bigInd + 1][minInd + 1] ++
          }
        }
        
        
      }
    })
  })
  console.log(cleanMatrix);
  return cleanMatrix
}

module.exports = {
  minesweeper
};


// const matrix = [
//  [true, false, false],
//  [false, true, false],
//  [false, false, false]
// ]
// minesweeper(matrix)
