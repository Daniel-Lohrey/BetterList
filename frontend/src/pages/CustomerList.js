
import styled from "styled-components/macro";
import AddCustomerProduct from "../components/AddCustomerProduct";
import {useState} from "react";
import CustomerProduct from "../components/CustomerProduct";



export default function CustomerList() {
    const [productNames, setProductNames] = useState([]);

    const onAdd = (productName)=> {
        setProductNames(productNames => ([
                ...productNames,productName
            ]))
    }

    return (
        <Wrapper>
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
  display: grid;
  grid-template-rows: 30fr auto;
`

const List = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 1px;
  color: antiquewhite;
`
