import React from 'react';
import './style.css';
import ResultsListItem from '../ResultsListItem';

function ResultsList(props) {
    
    return (
        props.results 
        ?
        <div className='container'>
            <ul className='results-list'>
                <ResultsListItem
                    results={props.results}
                    handleSaveBook={props.handleSaveBook}
                />
            </ul>
        </div>
        :
        <h3 className='text-center'>No Results</h3>
    )
}

export default ResultsList;