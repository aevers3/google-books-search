import React from 'react';

function ResultsList(props) {
    return (
        <>
            <ul className='results-list'>
                {props.results.map(result => (
                    <li className='result-list-item'
                        key={result.id}>
                        {/* BOOK INFO FROM API RESPONSE GOES HERE */}
                        <h3>{result.volumeInfo.title} </h3>
                        <p><strong>Author(s):</strong> {result.volumeInfo.authors}</p>
                        <p>{result.volumeInfo.description}</p>
                        <img alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks.thumbnail} />
                        <p>
                            <a href={result.volumeInfo.infoLink} target='_blank'>More Info</a>
                        </p>
                        <p>
                            <a href={result.volumeInfo.previewLink} target='_blank'>Preview</a>
                        </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ResultsList;