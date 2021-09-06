module.exports = function solveSudoku(matrix) {
  let summstring = [];
  let summrow = [];

  for (let i = 0; i < matrix.length; i++) {
    let summ = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      summ += matrix[i][j];
    }
    summstring.push(summ);
  }

  for (let i = 0; i < matrix.length; i++) {
    let summ = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      summ += matrix[j][i];
    }
    summrow.push(summ);
  }

  let indString = [];
  for (let a = 0; a < summstring.length; a++) {
    if (summstring[a] < 45) {
      indString.push(a);
    }
  }
  let indrow = [];
  for (let i = 0; i < summrow.length; i++) {
    if (summrow[i] < 45) {
      indrow.push(i);
    }
  }
  matrix[indString[0]][indrow[0]] = 45 - summrow[indrow[0]];
  matrix[indString[0]][indrow[1]] = 45 - summrow[indrow[1]];
  
  return matrix;
}
