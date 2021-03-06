import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/416ztNCSb8L._AC_SX184_.jpg"
    alt=""
  />
);

const Title = () => <h1>On the House: A Washington MemoirOn the House</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    John Boehner
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
