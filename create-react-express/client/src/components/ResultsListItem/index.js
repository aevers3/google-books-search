import React from 'react';
import BookImage from '../BookImage';

function ResultListItem(props) {
    console.log('list item props',  props);
    return (
        <>
        {props.results.map((result, ind) => (
            <li className='results-list-item'
                key={result.id}>
                {/* BOOK INFO FROM API RESPONSE GOES HERE */}
                {/* Book Title, Authors */}
                <h3 className='book-title'>{result.volumeInfo.title} </h3>
                <p><strong>Author(s):</strong> {result.volumeInfo.authors}</p>
                
                {/* Image, description, etc. */}
                <div className='row'>
                    <BookImage
                        bookInfo={result.volumeInfo}
                        // alt={result.volumeInfo.title}
                        // src={result.volumeInfo.imageLinks.thumbnail}
                        className='col-sm-3'
                    />
                    <div className='col-sm-9'>
                        <p>{result.volumeInfo.description}</p>
                        <div className='row'>
                            <p className='col-6 d-flex justify-content-center'>
                                <a href={result.volumeInfo.infoLink} target='_blank'>More Info</a>
                            </p>
                            <p className='col-6 d-flex justify-content-center'>
                                <a href={result.volumeInfo.previewLink} target='_blank'>Preview</a>
                            </p>
                        </div>
                        <button onClick={(event) => {props.handleSaveBook(event, ind)}}>Save Book</button>
                    </div>
                </div>
                <hr />
            </li>
        ))}
        </>
    )
}

export default ResultListItem;