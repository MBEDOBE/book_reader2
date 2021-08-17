import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class Search extends React.Component {
  state = {
    books: [],
    query: "",
  };

 

  getData = (query) => {
    this.setState((prevState) => ({ ...prevState, query }));
    BooksAPI.search(query).then((res) => {
      //console.log("results", res);
      if (typeof res !== "undefined" && res.error !== "empty query") {
        this.setState(() => ({
          
          books: res,
        }));
      } else {
        this.setState(() => ({
          books: [],
        }));
      }
      
    });
  }; 


  

  clearSearch = () => {
    this.setState({
      query: "",
      books: [],
    });
  };

  
 

  render() {
    const { myBooks, changeShelf } = this.props;
    const { query } = this.state;
    const getBookShelf = (book) => {
      return myBooks?.find((item) => item.id === book.id)?.shelf ?? "none";
    };
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearSearch}>
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query }
              onChange={(e) => this.getData(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query && this.state.books.map((book) => {
              let bookShelf = getBookShelf(book);
              return(
              <li key={book.id} >
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf || bookShelf}
                        onChange={(e) =>
                          this.props.changeShelf(book, e.target.value)
                        }
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
              )
})}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;