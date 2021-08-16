/* eslint-disable no-unused-expressions */
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/Shelves'
import AddButton from './components/SearchButton'
import Search from './components/Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    query: "",
  };

 


  updateSearchPageState = (state) => {
    this.setState({ showSearchPage: state });
  };

  componentDidMount() {
    BooksAPI.getAll().then((resp) => this.setState({ books: resp }));
  }

  

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book]),
      }));
    });
   
  };


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route path="/search" render={()=> (
            <Search
            showSearchPage={this.updateSearchPageState}
          />
          )}
            
          />
          
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <BookShelves
              allBooks={this.state.books}
              changeShelf={this.changeBookShelf}
            />
          
            <AddButton showSearchPage={this.updateSearchPageState} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp
