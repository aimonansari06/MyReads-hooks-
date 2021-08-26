import React from 'react';
import Shelf from '../components/Shelf';
import Search from '../components/Search';


function Homepage({books,currentlyReading,wantToRead,read,moveBook}){

   
    //console.log(books)
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf title="Currently Reading" books={currentlyReading} moveBook={moveBook} />
                <Shelf title="Want To Read" books={wantToRead} moveBook={moveBook} />
                <Shelf title="Read" books={read} moveBook={moveBook} />
            </div>
            <Search />
        </div>
    )

}
export default Homepage;

