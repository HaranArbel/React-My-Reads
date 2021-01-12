import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import {search} from "../BooksAPI";

const SearchPage = () => {

    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])

    useEffect(() => {
        search(query).then(books => setBooks(books))
    }, [query])

    return (
        <div className="search-books">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">search books</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                </div>
                {(books && books.length !== 0) ? <Bookshelf shelf={"Search Results"} books={books}/> : null}
                <div className="search-books-results">
                    <ol className="books-grid">

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;