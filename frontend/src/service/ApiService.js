import axios from "axios";

const productUrl = '/api/products'

export const getProductsById = (id) =>
    axios.get(`${productUrl}/${id}`).then(response => response.data)

export const getUserProductsList = () =>
    axios.get(productUrl).then(response => response.data)

export const postProduct = (product) =>
    axios.post(productUrl, {
        "id": product.id,
        "product_name": product.product_name,
        "brands": product.brands,
        "nutriscore_grade": product.nutriscore_grade,
        "nova_group": product.nova_group,
        "nutriments": product.nutriments,
        "ingredients_text_de": product.ingredients_text_de,
        "quantity": product.quantity,
            "allergens_tags": product.allergens_tags,
            "additives_prev_original_tags": product.additives_prev_original_tags,
    }).then((response) => response.data)

export const getUserProductsById = (id) =>
    axios.get(`${productUrl}/details/${id}`).then(response => response.data)


export const deleteProduct = (id) =>
    axios.delete(`${productUrl}/${id}`)


export const getProductsByKeywords = (keywords) =>
    axios.get(`${productUrl}/search/${keywords}`).then(response => response.data)