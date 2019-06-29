import React from 'react';
import BookImage from '../BookImage';
import './style.css';


function ResultListItems(props) {
    console.log('list item props', props);
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
                                <p className='col-4 d-flex justify-content-center'>
                                    <a href={result.volumeInfo.infoLink} target='_blank'
                                        className='info-btn text-center'>More Info</a>
                                </p>
                                <p className='col-4 d-flex justify-content-center'>
                                    <button onClick={(event) => { props.handleSaveBook(event, ind) }}
                                        className='info-btn'>Save Book</button>
                                </p>
                                <p className='col-4 d-flex justify-content-center'>
                                    <a href={result.volumeInfo.previewLink} target='_blank'
                                        className='info-btn text-center'>Preview</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </li>
            ))}
        </>
    )
}

export default ResultListItems;