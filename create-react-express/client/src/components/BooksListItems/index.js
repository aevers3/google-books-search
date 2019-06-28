import React from 'react';

function BooksListItems(props) {
    console.log('bookslistitems', props.books)
    return (
        <>
            {props.books.map(book => (
                <li key={book.title}>
                    <h3 className='book-title'>{book.title}</h3>
                    <p><strong>Author(s):</strong> {book.authors}</p>

                    <div className='row'>
                        <img
                            src={book.image}
                            alt={book.title}
                            className='col-sm-3'
                        />
                        <div className='col-sm-9'>
                            <p>{book.description}</p>
                            <div className='row'>
                                <p className='col-12 d-flex justify-content-center'>
                                    <a href={book.link} target='_blank'>More Info</a>
                                </p>
                                {/* <p className='col-6 d-flex justify-content-center'>
                                    <a href={book.preview} target='_blank'>Preview</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <hr />
                </li>
            ))}
        </>
    )
}

export default BooksListItems;