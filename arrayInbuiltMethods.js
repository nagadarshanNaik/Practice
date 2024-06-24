const numArray = [
  10, 3, 4, 1, 4, 7, 10, 66, 5, 7, 0, 24, 8, 35, 32, 89, 65, 29, 99, 100, 34, 0,
];

function arrayFilter(numArray) {
  const result = numArray.filter((num) => {
    return num % 2 === 0 && num !== 0;
  });
  return result
}


const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => {
    return num * num
}
);
// console.log(squares); // Output: [1, 4, 9, 16]


console.log(arrayFilter(numArray));
arrayReducer();

function arrayReducer(){
    const people = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Mike', age: 35 }
      ];
      
      const peopleByName = people.reduce((acc, person) => {
        acc[person.name] = person.age;
        return acc;
      }, {});
      
      console.log(peopleByName); // Output: { John: 25, Jane: 30, Mike: 35 }
}

  