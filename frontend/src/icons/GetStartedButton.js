import LinkStyled from "./LinkedStyled";
import ArrowRight from "./ArrowRight";
import styled from "styled-components/macro";

export default function GetStartedButton() {

    return (
        <Wrapper>
        <LinkStyled to='/products/customer'><b>Einkaufsliste</b><ArrowRight/></LinkStyled>
        </Wrapper>
            )

}

const Wrapper = styled.div`
  position: center;
  
    `

