import React from "react";

const Book = (props) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("hello world");
    };

    const complexExample = (author) => {
        console.log(author);
    };
    // const { img, title, author } = props.book;
    const { img, title, author } = props;
    // console.log(props);
    return (
        <article
            className="book"
            onMouseOver={() => {
                console.log(title);
            }}
        >
            <img src={img} alt="" />
            <h1
                onClick={() => {
                    console.log(title);
                }}
            >
                {title}
            </h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                reference example
            </button>
            <button type="button" onClick={() => complexExample(author)}>
                more complex example
            </button>
            {/* <p>{let x = 6}</p> */}
            {/* <p>{6 + 6}</p> */}
            {/* {console.log(props)} */}
        </article>
    );
};

export default Book;
