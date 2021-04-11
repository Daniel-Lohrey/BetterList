import AddProductWithEAN from "../components/AddProductWithEAN";
import ProductList from "../components/ProductList";
import {useState} from "react";
import {deleteProduct} from "../service/ApiService";
import styled from "styled-components/macro";
import AppHeader from "../components/AppHeader";




export default function MainPage() {
    const [products, setProducts] = useState([])

    const deleteUserProduct = (id) => {
        deleteProduct(id).then(() => {
            setProducts(
                products.filter((product) => product.id !== id))
        })
    }

    return (
        <Wrapper>
            <AppHeader />
            <AddProductWithEAN setProducts={setProducts} products={products}/>
            <ProductList products={products} onDeleteProduct={deleteUserProduct}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 30fr auto;
`
