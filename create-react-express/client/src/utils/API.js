import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = '&key=AIzaSyC3vVfuQuQFalxDjkW23QkVYyV8Kg-2jEQ';


export default {
    search: function(query) {
        return axios.get(BASEURL + query + API_KEY)
    }
};