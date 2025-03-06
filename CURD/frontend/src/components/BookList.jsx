import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:9091/books/get")
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteBook = (id) => {
        axios.delete(`http://localhost:9091/books/delete/${id}`)
            .then(() => {
                setBooks(prevBooksdata => prevBooksdata.filter(book => book._id !== id));
                alert("Book deleted")
            })  
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="header">
                <h1>Book List</h1>
            </div>
            <hr />
            <ul>
                {books.map(book => (
                   <li key={book._id}>
                    <div className="content">
                        <img src={book.bookImage} alt="bookImage" height={80} />
                        <h3>{book.Title}</h3>
                        <h5>{book.Author}</h5>
                        <span>(${book.Price})</span>
                        <p>{book.PublishedDate}</p>
                    </div>
                    <div className="button-group">
                        <Link to={`/bookdetail/${book._id}`}><button className="view-button">View</button></Link>
                        <Link to={`/bookedit/${book._id}`}><button className="edit-button">Edit</button></Link>
                        <button onClick={() => deleteBook(book._id)} className="delete-button">Delete</button>
                    </div>
                   </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
