import { useState } from 'react'
import styled from 'styled-components/macro'

export default function AddProduct({ onAdd }) {
    const [product, setProduct] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!product) {
            return
        }
        onAdd(product)
        setProduct('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={product}
                onChange={({ target }) => setProduct(target.value)}
            />
            <button disabled={!product} type="submit">
                Search
            </button>
        </Form>
    )
}


const Form = styled.form`
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