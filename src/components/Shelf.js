import React from 'react'
import Book from './Book';

const Shelf=({title,books,moveBook})=>{
  //console.log(books)
  return (
    <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books && books.map(book=><Book key={book.id} id={book.id} title={book.title} shelf={book.shelf} authors={book.authors} imageLinks={book.imageLinks} moveBook={moveBook}/>)}
            </ol>
          </div>
        </div>
)
}
export default Shelf;
