import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Bookshelf from "./Bookshelf";
import {getAll} from "../BooksAPI";

const MainPage = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(books => setBooks(books))
    }, [books])

    return (
        <div className="MainPage">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelf={"Currently Reading"}
                                   books={books.filter(book => book.shelf === "currentlyReading")}/>
                        <Bookshelf shelf={"Want to Read"}
                                   books={books.filter(book => book.shelf === "wantToRead")}/>
                        <Bookshelf shelf={"Read"}
                                   books={books.filter(book => book.shelf === "read")}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        </div>
    );


};

export default MainPage;