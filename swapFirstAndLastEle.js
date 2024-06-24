const array = [3, 5, 2, 8, 6, 10];

console.log(swapFirstAndlast(array));

function swapFirstAndlast(arr) {
  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
