import React from 'react';
import './style.css';
import ResultsListItem from '../ResultsListItem';

function ResultsList(props) {
    return (
        <div className='container'>
            <ul className='results-list'>
                <ResultsListItem
                    results={props.results}
                    handleSaveBook={props.handleSaveBook}
                />
                
            </ul>
        </div>
    )
}

export default ResultsList;