import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://property-listing-app-1.onrender.com'
})

export default instance