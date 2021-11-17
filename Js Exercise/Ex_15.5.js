function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
//counter + is not reassigning anything. shuld use += insted. found it while debugging and saw that counter remains 0 right after the "counter + 1;" line.
