import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})


export const getData = async () => {
    try {
        const response = await api.get('/data')
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }

}