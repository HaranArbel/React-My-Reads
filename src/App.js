import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage.js'
import MainPage from './components/MainPage.js'

const BooksApp = () => {

    return (
        <div>
            <Route exact path='/search' component={SearchPage}/>
            <Route exact path='/' component={MainPage}/>
        </div>
    )
}

export default BooksApp
