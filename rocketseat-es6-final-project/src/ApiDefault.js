import axios from 'axios'

const apiDefault = axios.create({
    baseURL: `https://api.github.com/`
})

export default apiDefault