import AppHeader from "../components/AppHeader";
import AddProduct from "../components/AddProduct";
import SearchProducts from "../components/SearchProducts";
import ProductList from "../components/ProductList";
import {Route} from "react-router-dom";
import {useState} from "react";


export default function MainPage() {
    const [products, setProducts] = useState([])

    return (
        <>
            <SearchProducts setProducts={setProducts} products={products}/>
            <ProductList products={products}/>

        </>
    )
}

