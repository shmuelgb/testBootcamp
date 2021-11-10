let theSunAlsoRises = {
    name: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    year: 1926,
    genre: 'novel',
    rating: 9.8
};

let catch22 = {
    name: 'Catch-22',
    author: 'Joseph Heller',
    year: 1961,
    genre: 'novel',
    rating: 9.8
};

let bookUtils = {
    getFirstPublished(book1, book2) {
        let first;
        book1.year < book2.year? first = book1: first = book2;
        return first;
    },
    setNewEdition(book, edition) {
        book.latestEdition = edition;
        return;
    },
    setLanguage(book, language) {
        book.language = language;
    },
    setTranslation(book, language, translator) {
        book.translation = {language: language, translator: translator};
    },
    setPublisher(book, name, location) {
        book.publisher = {name: name, location: location};
    },
    isSamePublisher(book1, book2) {
        if (book1.publisher.name === book2.publisher.name &&
            book1.publisher.location === book2.publisher.location)
            return true;
            return false;
    },
};

// Tests!! => =>

// console.log(bookUtils.getFirstPublished(theSunAlsoRises, catch22));

// bookUtils.setNewEdition(theSunAlsoRises, 1981);
// console.log(theSunAlsoRises);

// bookUtils.setLanguage(theSunAlsoRises, 'English');
// console.log(theSunAlsoRises);

// bookUtils.setTranslation(theSunAlsoRises, 'Hebrow', 'Shmuel Gabai');
// console.log(theSunAlsoRises);

// bookUtils.setPublisher(theSunAlsoRises, 'Shmuel Gabai', 'Israel');
// bookUtils.setPublisher(catch22, 'Shmuel Gabai', 'Israel');
// console.log(bookUtils.isSamePublisher(theSunAlsoRises, catch22));
// console.log(theSunAlsoRises);

