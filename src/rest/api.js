import axios from "axios";
import {API_URL} from './url';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: "json"
});