import React from 'react';
import { update } from "../BooksAPI";

const Book =({id,title,shelf,authors,imageLinks,moveBook})=>{
    
    const books={id,title,shelf,authors,imageLinks}
   const handleChange = async (e) => {
        try {
            const shelf=e.target.value;
            //console.log(shelf)
            const result = await update(books, shelf)
            moveBook(books,shelf,result);
            //console.log(books)
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks ? books.imageLinks.thumbnail:""})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={handleChange} value={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{books.title}</div>
                <div className="book-authors">{books.authors ? books.authors[0]: 'No Author'}</div>
            </div>
        </li>
    )

}
export default Book;

