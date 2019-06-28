import React from 'react';
import './style.css';

function SearchForm(props) {
    return (
        <form>
            <div className='container text-center'>
                <div className='row d-flex justify-content-center mt-5'>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name='search'
                        type='text'
                        className='form-control'
                        placeholder='Search for a book'
                        id='search'
                    />
                </div>
                <div className='row mt-3 d-flex justify-content-center'>
                    <button
                        onClick={props.handleFormSubmit}
                        className='search-button '>
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;