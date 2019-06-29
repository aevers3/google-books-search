import React from 'react';
import API from '../../utils/API';
import Banner from '../Banner';
import BooksList from '../BooksList';

class SavedBooksWrapper extends React.Component {

    state = {
        books: []
    };

    handleDeleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log('res', res.data);
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Banner
                    page='saved'
                />
                <BooksList
                    books={this.state.books}
                    handleDeleteBook={this.handleDeleteBook}
                />
            </div>
        )
    }
}

export default SavedBooksWrapper;