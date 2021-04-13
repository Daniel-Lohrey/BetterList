
import styled from "styled-components/macro";
import AddCustomerProduct from "../components/AddCustomerProduct";
import {useState} from "react";
import CustomerProduct from "../components/CustomerProduct";
import AppHeader from "../components/AppHeader";



export default function CustomerPage() {
    const [productNames, setProductNames] = useState([]);

    const onAdd = (productName)=> {
        setProductNames(productNames => ([
                ...productNames,productName
            ]))
    }

    return (
        <Wrapper>
            <AppHeader/>
            <AddCustomerProduct onAdd={onAdd}/>
            <List>
                {productNames.map((productName)=>(
                    <CustomerProduct  key={productName} productName={productName} />
                ))}
            </List>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
`

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`
