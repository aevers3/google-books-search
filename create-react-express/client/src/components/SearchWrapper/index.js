import React from 'react';
import SearchHeader from '../SearchHeader';
import SearchForm from '../SearchForm';
import ResultsList from '../ResultsList';
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
                <SearchHeader />
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultsList results={this.state.results} />
            </>
        )
    }
}

export default SearchWrapper;