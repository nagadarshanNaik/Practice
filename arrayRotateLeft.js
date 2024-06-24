// Rotate the elements left of a given array of integers
const array = [2, 3, 4, 6];
// console.log(rotateLeftUsingForEach(array));
console.log(rotateLeftUsingForLoop(array));

function rotateLeftUsingForEach(array) {
  // using For each
  const firstEle = array[0];
  array.forEach((ele, i, array) => {
    array[i] = array[i + 1];
  });
  array[array.length - 1] = firstEle;
  return array;
}
function rotateLeftUsingForLoop(array) {
  const firstEle = array[0];
  for (i = 0; i <= array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = firstEle;
  return array;
}
