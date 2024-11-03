// part 1 (creating objects)

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960
};

book.genre = "Fiction";

delete book.yearPublished;

console.log(`Title: ${book.title}, Author: ${book.author}`);

let hasGenre = "genre" in book; 
console.log(`Does the book have a genre? ${hasGenre}`);

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

const people = [
    { name: "Gio", age: 30 },
    { name: "Davit", age: 25 },
    { name: "Nika", age: 35 }
];

let bookLength = Object.keys(book).length;
console.log(`Number of properties in book: ${bookLength}`);

let library = {
    name: "City Library",
    location: "Downtown",
    books: {
        fiction: ["To Kill a Mockingbird", "1984"],
        nonFiction: ["Sapiens", "Educated"]
    }
};
console.log(`First fiction book: ${library.books.fiction[0]}`); 

let bookValues = Object.values(book);
console.log(`Book values: ${bookValues}`);
