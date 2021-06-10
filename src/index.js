import React from "react";
import ReactDom from "react-dom";

import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

import "./index.css";

// setup vars
// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>;
// });
// console.log(newNames);

function BookList() {
    console.log(greeting);
    return (
        <section className="booklist">
            {books.map((book) => {
                // const { img, title, author } = book;
                // return <Book key={book.id} book={book}></Book>;
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));
