let numbers = [11, 22, 33, 44, 555, 66, 77, 88, 99, 100];

const max = numbers.reduce((max, current) => {
  return max < current ? current : max;
});
console.log(max);

const sumOfEvens = numbers.reduce((sum, current) => {
  if (current % 2 === 0) {
    return sum + current;
  }
  return sum;
}, 0);
console.log(sumOfEvens);

const average = numbers.reduce((average, current) => {
  return average + current / numbers.length;
}, 0);
console.log(average);
