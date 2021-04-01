import axios from "axios";

const productUrl = '/api/products'

export const getProductsById = (id) =>
    axios.get(`${productUrl}/${id}`).then(response => response.data)

export const getUserProductsList = () =>
    axios.get(`${productUrl}`).then(response => response.data)

export const postProduct = (product) =>
    axios.post(productUrl, {
        "id": product.id,
        "product_name": product.product_name,
        "brands": product.brands
    }).then((response) => response.data)


export const getProductsByKeywords = (keywords) =>
    axios.get(`${productUrl}/search/${keywords}`).then(response => response.data)