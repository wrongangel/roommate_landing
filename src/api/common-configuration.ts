import axios from 'axios'

// Common configuration for axios instance
export default axios.create({
  baseURL: '/api/v1/lending',
  headers: {
    'Content-type': 'application/json',
  },
})