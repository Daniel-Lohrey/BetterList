import styled from 'styled-components/macro'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {IconButton} from "@material-ui/core";
import {useState} from "react";





export default function AddCustomerProduct({onAdd}) {
    const [productName, setProductName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(productName);
        setProductName("")
    }

    const handleChange = (changeEvent) => {
        setProductName(changeEvent.target.value)

    }



    return (
            <ProductContainer  onSubmit={handleSubmit} >
                <input
                    placeholder="Merke dir..."
                    type="text"
                    value={productName}
                    onChange={handleChange}
                />
                <IconButton type="submit" onSubmit={handleSubmit} >
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
  
  button {
    font-size: 0.8em;
    font-color: #fff;
    flex-grow: 0.2;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    border-width: 1px;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
  }
`