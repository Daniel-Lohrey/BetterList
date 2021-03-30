import styled from "styled-components/macro";
import Products from "./Products";
import AddProduct from "./AddProduct";

export default function ProductList({products}) {
    return (
        <List>
            <AddProduct />
            {products.map((products)=>(
                <Products product={products} />
            ))}
        </List>
    )
}

const List = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 1px;
`