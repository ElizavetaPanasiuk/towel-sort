
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !Array.isArray(matrix) || !matrix.length ? [] : matrix.map((elem, index) => index % 2 === 0 ? elem : elem.reverse()).toString().split(',').map(elem => +elem) || [];
}
