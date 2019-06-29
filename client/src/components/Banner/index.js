import React from 'react';
import './style.css';
import SearchHeader from '../SearchHeader';
import SearchForm from '../SearchForm';
import SavedHeader from '../SavedHeader';

function Banner(props) {
    console.log('bannerProps', props);
    if (props.page === 'saved') {
        return (
            <div className='banner mb-5'>
                <div className='header-wrapper'>
                    <h1 className='text-center banner-header'>Book Search Helper</h1>
                    <SavedHeader />
                </div>
            </div>
        )
    }
    return (
        <div className='banner mb-5'>
            <div className='header-wrapper'>
                <h1 className='text-center banner-header'>Book Search Helper</h1>
                <SearchHeader />
                <SearchForm
                    search={props.search}
                    handleFormSubmit={props.handleFormSubmit}
                    handleInputChange={props.handleInputChange}
                />
            </div>
        </div>
    )
}

export default Banner;