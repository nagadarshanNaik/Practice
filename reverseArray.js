const array = ["grey", "white", "black", "green"];
const array1 = ["grey", "white", "black", "green"];


console.log("Method 1 : ", reverseArrayMethod_1(array));
console.log("Method 2 : ", reverseArrayMethod_2(array));
console.log("Method 3 : ", array1.reverse());

function reverseArrayMethod_1(arr) {
  let newArray = arr;
  var reverseArray = [];
  for (let i = newArray.length - 1; i >= 0; i--) {
    reverseArray.push(newArray[i]);
  }
  return reverseArray;
}

function reverseArrayMethod_2(arr) {
  for (let i = 0; i < arr.length/2; i++) {
    const temp = arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
  }
  return arr;
}
