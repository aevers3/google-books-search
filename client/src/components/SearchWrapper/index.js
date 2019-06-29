import React from 'react';
import ResultsList from '../ResultsList';
import Banner from '../Banner';
import API from '../../utils/API';


class SearchWrapper extends React.Component {
    state = {
        search: "",
        results: []
    }

    searchGoogle = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            // .then(res => console.log(res.data.items[0].volumeInfo))
            .catch(err => console.log(err));
    };

    handleSaveBook = (event, ind) => {
        event.preventDefault();
        console.log(this.state)
        const newBook = Object.assign({}, this.state.results[ind].volumeInfo);
        newBook.authors = newBook.authors.reduce((prev, cur, ind) => cur + prev, '');
        newBook.link = newBook.infoLink;
        newBook.image = newBook.imageLinks.thumbnail;
        newBook.preview = newBook.previewLink;
        console.log('preview', newBook.preview);
        API.saveBook(newBook);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        this.searchGoogle(this.state.search);
    }

    render() {
        return (
            <>
                <Banner 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultsList
                    results={this.state.results}
                    handleSaveBook={this.handleSaveBook}
                />
            </>
        )
    }
}

export default SearchWrapper;