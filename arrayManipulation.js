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
  
const testArray = [2 3, 5, 7, 9];
const result = processArray(testArray);
console.log(result);

