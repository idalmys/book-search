const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "JavaScript & JQuery: The Missing Manual",
    author: "David Sawyer McFarland",
    description: "JavaScript lets you supercharge your web pages with animation, interactivity, and visual effects, but learning the language isn't easy. This fully updated and expanded guide takes you step-by-step through JavaScript basics, then shows you how to save time and effort with jQuery--the library of prewritten JavaScript code--and the newest innovations from the jQuery UI plug-in",
    image: "http://books.google.com/books/content?id=0oWMBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:"https://books.google.com/books/about/JavaScript_JQuery_The_Missing_Manual.html?hl=&id=0oWMBAAAQBAJ",
    date: new Date(Date.now())
  },
  {
      title:"Computer Programming",
      author:"J. Maynard",
      description: "Computer Programming: Made Simple, New Edition focuses on the processes, principles, methodologies, techniques, and approaches involved in computer programming. The publication first takes a look at the introduction to computer structure, backing store, input, and output devices, and logic and flowcharting. Discussions focus on flowcharting, file organization, sequencing, and security, magnetic disc devices, optical character recognition, keyboard, encoders, optical mark reading, input and output unit, and backing store. The manuscript then ponders on operating systems, data and numbers, introduction to COBOL, and word types and constants. The text examines arithmetic statements, MULTIPLY and DIVIDE statements, program control, data classes in COBOL, editing, and data transfer. Topics include READ and WRITE statements, types of editing, PICTURE clause, file labeling, BLOCK CONTAINS clause, PERFORM and STOP statements, and MULTIPLY, DIVIDE, and COMPUTE statements. The book also tackles microprocessors, arrays, and subscripts, loops and subroutines, and program control. The publication is a dependable source of data for computer programmers and researchers interested in computer programming",
      image: "http://books.google.com/books/content?id=IZrICwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      link:"https://play.google.com/store/books/details?id=IZrICwAAQBAJ"
  }
];

db.Book
  .remove({})
  .then(() => db.googlebooks.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " books inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });