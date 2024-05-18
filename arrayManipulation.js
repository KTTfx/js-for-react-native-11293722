function processArray(arr) {
  const newArray = [];

  arr.forEach(element => {
    if (element % 2 === 0) {
      const squaredElement = element * element;
      newArray.push(squaredElement);
    } else {
      const tripledElement = element * 3;
      newArray.push(tripledElement);
    }
  });

  return newArray;
}

function formatArrayStrings(stringArray, numberArray) {
  for (let i = 0; i < stringArray.length; i++) { 
    const currentString = stringArray[i];
    const correspondingNum = numberArray[i];

    if (correspondingNum % 2 === 0) {
      stringArray[i] = currentString.toUpperCase();
    } else {
      stringArray[i] = currentString.toLowerCase();
    }
  }
}



const testArray = [2, 3, 5, 7, 9]; 
const result = processArray(testArray);
console.log(result); 


const names = ["John", "Jane", "Mike", "Sarah"];
const randomNumbers = [1, 0, 3, 2]; 

formatArrayStrings(names, randomNumbers);
console.log(names);
