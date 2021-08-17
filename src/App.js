import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelves from "./components/Shelves";
import AddButton from "./components/SearchButton";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
  };

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => this.setState({ books: myBooks }));
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat(book),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <BookShelves
                allBooks={this.state.books}
                changeShelf={this.changeBookShelf}
              />

              <AddButton />
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search
              myBooks={this.state.books}
              changeShelf={this.changeBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
