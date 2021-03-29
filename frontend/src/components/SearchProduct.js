import { useState } from 'react'
import styled from 'styled-components/macro'

export default function AddButton({ onAdd }) {
    const [productName, setProductName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!productName) {
            return
        }
        onAdd(productName)
        setProductName('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={productName}
                onChange={({ target }) => setProductName(target.value)}
            />
            <button disabled={!productName} type="submit">
                Add
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