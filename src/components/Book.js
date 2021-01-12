import React, {useState} from "react";
import BookShelfChanger from "./BookShelfChanger";
import {update} from "../BooksAPI";

const Book = ({book}) => {

    const [bookShelf, setBookShelf] = useState(book.shelf)

    const updateBook = (event) => {
        setBookShelf(event.target.value)
        update(book, event.target.value)
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail || ""})`
                }}></div>
                <BookShelfChanger shelf={bookShelf} handleOnChange={updateBook}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    );

};

export default Book;