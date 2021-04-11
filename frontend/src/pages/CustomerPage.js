
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
  height: 200vh;
  background: url('Lebensmittel.jpg') fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const List = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 1px;
`
