import React from "react";
import Book from "./Book";

const Bookshelf = ({shelf, books}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, index) => (
                        <li key={index}>
                            <Book book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );


};

export default Bookshelf;