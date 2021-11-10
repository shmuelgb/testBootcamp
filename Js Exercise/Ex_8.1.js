let theSunAlsoRises = {
    name: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    year: 1926,
    genre: 'novel',
    rating: 9.8
}

function bookInfo (book) {
    return`The book ${theSunAlsoRises.name} was written by ${theSunAlsoRises.author} in the year ${theSunAlsoRises.year}`;
}
console.log(bookInfo(theSunAlsoRises));