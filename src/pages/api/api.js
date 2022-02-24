
import axios from 'axios';

export const KEY = 'b352dffebe3e61918cfaf88464175e8052539be2'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${KEY}`,
  }
})

export default api