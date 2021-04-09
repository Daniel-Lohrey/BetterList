import styled from 'styled-components/macro'
import {useEffect, useState} from 'react'
import {getProductsById, getUserProductsList, postProduct} from "../service/ApiService";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {IconButton} from "@material-ui/core";

export default function AddProductWithEAN({products , setProducts}) {
    const [search ,setSearch] = useState("")


    useEffect(() => {
        getUserProductsList()
            .then(setProducts)
            .catch((error) => console.error(error))
    }, [setProducts])


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
            <IconButton onClick={handleSubmit} disabled={!search}>
                <AddCircleOutlineIcon />
            </IconButton>
        </ProductContainer>
    )
}

const ProductContainer = styled.form`
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 6px;
  display: flex;
  
  
  input {
    flex-grow: 2;
    border-color: var(--primary-color);
    border-width: 1px;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background: transparent;
    
  }
`