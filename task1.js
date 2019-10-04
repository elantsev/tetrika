function searchPairs(array, N) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    const firstElement = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondElement = array[j];
      if (firstElement + secondElement === N) {
        result.push([firstElement, secondElement]);
      }
    }
  }
  return result;
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));

// [[1, 4], [2, 3]]
