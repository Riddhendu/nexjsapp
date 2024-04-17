import axios from 'axios'

const baseUrl = process.env.BASE_URL

export const httpAxios = axios.create({
    baseURL:baseUrl
})