import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = '&key=AIzaSyC3vVfuQuQFalxDjkW23QkVYyV8Kg-2jEQ';


export default {
  search: function (query) {
    return axios.get(BASEURL + query + API_KEY)
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log('bookData', bookData);
    return axios.post("/api/books", bookData);
  },
  // Get saved books from db
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  }
};