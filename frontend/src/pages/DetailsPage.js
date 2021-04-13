import styled from "styled-components/macro";
import DetailsProduct from "../components/DetailsProduct";
import AppHeader from "../components/AppHeader";


export default function DetailsPage() {

    return (
        <Wrapper>
            <AppHeader />
            <DetailsProduct/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  
  `