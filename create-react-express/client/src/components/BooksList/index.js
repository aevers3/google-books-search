import React from 'react';
import BooksListItems from '../BooksListItems';

function BooksList(props) {
    return (
        <div className='container'>
            <ul className='results-list'>
                <BooksListItems
                    books={props.books}
                />
            </ul>
        </div>
    )
}

export default BooksList;