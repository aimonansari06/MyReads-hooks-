import React , { useState, useEffect }from 'react'
import Homepage from './views/Homepage';
import Searchpage from './views/Searchpage';
import { getAll } from './BooksAPI';
import './App.css';

function App(){
  const [books, setBooks] =useState([]);
  const [currentlyReading, setCurrentlyreading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  
  
  useEffect(()=>{
      (
          async ()=>{
          try {
              const res  = await getAll();
              setBooks(res)
              addBooks(res)
              console.log(res);
          }
          catch (err) {
              console.log(err)
          }
      })()
      
  },[])
  
  const addBooks = (books) => {
      const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
      const wantToRead = books.filter(book => book.shelf === 'wantToRead');
      const read = books.filter(book => book.shelf === 'read');
      
      setCurrentlyreading(currentlyReading);
      setWantToRead(wantToRead);
      setRead(read);
      //console.log(currentlyReading,wantToRead,read)
  }
  
  const moveBook=(book,newshelf,allshelf)=>{
      console.log("books",book,"newshelf", newshelf, "allshelf ",allshelf)
      const newBooks = books.map(allBooks => {
          const foundId = allshelf[newshelf].find(
              bookID => bookID === allBooks.id
              
          );
          //console.log(foundId)
          if (foundId) {
              allBooks.shelf = newshelf;
              console.log(allBooks.shelf, newshelf)
          }
          return allBooks;
          
      })
      console.log(newBooks)
      addBooks(newBooks);
  }
  const showHomePage=()=>{
    if(window.location.pathname==='/'){
      return <Homepage books={books} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} moveBook={moveBook} />
    }
  }
  const showSearchPage=()=>{
    if(window.location.pathname==='/search'){
      return <Searchpage moveBook={moveBook}/>
    }
  }
  return (
    <div className="app">
      {showHomePage()}
      {showSearchPage()}
    </div>
  )
}

export default App;

