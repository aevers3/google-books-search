import React from 'react';
import BooksListItems from '../BooksListItems';

function BooksList(props) {
    console.log('list props', props)
    return (
        <div className='container'>
            <ul className='results-list'>
                <BooksListItems
                    books={props.books}
                    handleDeleteBook={props.handleDeleteBook}
                />
            </ul>
        </div>
    )
}

export default BooksList;