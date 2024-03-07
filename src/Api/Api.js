import axios from 'axios';

const baseURL = 'http://localhost:5000/'; 
const APIHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': {
    toString () {
      return `Bearer ${localStorage.getItem('token')}`
    }
  }
};

const API = axios.create({
  baseURL,
  timeout: 6000,
  headers: APIHeaders
});

export default API;
