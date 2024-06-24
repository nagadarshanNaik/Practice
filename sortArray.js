const array = [10, 8, 3, 1, 56, 43, 2, 7, 24];
// const array = [1,2,3,4,5,6,7,8];


// console.log(sortArray(array));
console.log(sortArrayUsingInbuiltMethod(array));


function sortArray(arr) {
  // let newArr = arr; //  this means refering same array in memory so if any changes done to any one of the array that effects both
  // let newArr = [...arr];  // to make a copy of array
  let newArr = arr.slice();  // // to make a copy of array
  for (let i = 0; i < newArr.length - 1; i++) {
    let swapped = false;
    for (j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(arr);
  console.log(newArr);

  if(JSON.stringify(arr)=== JSON.stringify(newArr) ){
    console.log("Array is already sorted");
  }
  else{
    console.log("Array is not sorted");
  }
  return newArr;
}
function sortArrayUsingInbuiltMethod(arr){
  let newArray = arr.sort((a,b)=>{
   return (a-b)
  })
  return newArray
}
