## My Reads Project

This MyReads project is the first project after completing the React Fundamentals module in the React NanoDegree course. The application was created using [create-react-app]. This project is made up of three shelves; what you are currently reading, what you have read and what you would like to read. You can move books from and to these shelves depending on their status in your "library".

## Installation

you can use [npm] or [yarn] to install the project:

```bash
npm install
```

after which you run the following command to start the app:
```bash
npm start

```



## Development Notes

## 1. Backend Server

To simplify the development process, we were provided a backend server for us to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

    getAll
    update
    search

# getAll

# Method Signature:

getAll();

    Returns a Promise which resolves to a JSON object containing a collection of book objects.
    This collection represents the books currently in the bookshelves in your app.

# update

# Method Signature:

update(book, shelf);

    book: <Object> containing at minimum an id attribute
    shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
    Returns a Promise which resolves to a JSON object containing the response data of the POST request

# search

# Method Signature:

search(query, maxResults);

    query: <String>
    maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
    Returns a Promise which resolves to a JSON object containing a collection of book objects.
    These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results

## Project Status
This project was done 
## License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
```

