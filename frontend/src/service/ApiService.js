import axios from "axios";

const productUrl = '/api/products'

export const getProducts = (id) =>
    axios.get(`${productUrl}/${id}`).then(response => response.data)

export const getProductsByKeywords = (keywords) =>
    axios.get(`${productUrl}/search/${keywords}`).then(response => response.data)