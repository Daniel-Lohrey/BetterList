import styled from "styled-components/macro";
import Product from "./Product";


export default function ProductList({ products, onDeleteProduct }) {


    return (
        <List>
            {products.map((product)=>(
                <Product  key={product.id} product={product} onDeleteProduct={onDeleteProduct}/>
            ))}
        </List>
    )
}

const List = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 1px;
  color: antiquewhite;
`
