import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/'
});

// https://www.googleapis.com/books/v1/volumes/1K0mAAAACAAJ

// https://www.googleapis.com/books/v1/volumes?q=+book+&Key=+apiKey+&maxResults=40
