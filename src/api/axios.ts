import axios from 'axios';

export default axios.create({
  baseURL: "https://my-job-api-778.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
})