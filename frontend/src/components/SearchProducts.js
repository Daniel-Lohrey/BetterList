import styled from 'styled-components/macro'
import {useEffect, useState} from 'react'
import {getProductsById, getUserProductsList, postProduct} from "../service/ApiService";


export default function SearchProducts({products , setProducts}) {
    const [search ,setSearch] = useState("")


    useEffect(() => {
        getUserProductsList()
            .then(setProducts)
            .catch((error) => console.error(error))
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        getProductsById(search)
            .then(response =>{
                postProduct(response).then( updatedProduct => setProducts(
                    [...products, updatedProduct]
                ))
            });
    }


    const handleChange = (changeEvent) => {
        setSearch(changeEvent.target.value)
    }

    return (
        <ProductContainer onSubmit={handleSubmit}>
                <input
                    placeholder="Product EAN"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit">SEARCH</button>
        </ProductContainer>
    )
}

const ProductContainer = styled.form`
  
  display: flex;

  input {
    flex-grow: 1;
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
  }
  button {
    font-size: 1em;
    font-color: #fff;
    flex-grow: 0.2;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
  }
`