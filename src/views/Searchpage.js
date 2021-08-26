import React, { useState } from 'react'
import { search } from '../BooksAPI';
import Book from '../components/Book';

function Searchpage({moveBook}) {
  const [query,setQuery]=useState('');
  const [books, setBooks]=useState([]);

   const handleChange = async(e) => {
    try {
      const query = e.target.value;
      setQuery(query)
      if (query.trim()) {

        const results = await search(query)
        if (results.err) {
          setBooks([])
        }
        else {
          setBooks(results)
        }

      }
      else{
        setBooks([])
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">Close Search</a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={handleChange} value={query? query:""} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length >0  && books.map(book=><Book key={book.id} id={book.id} title={book.title} shelf={book.shelf} authors={book.authors} imageLinks={book.imageLinks} moveBook={moveBook}/>)}
        </ol>
      </div>
    </div>
  )
}

export default Searchpage


