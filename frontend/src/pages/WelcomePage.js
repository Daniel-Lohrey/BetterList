import WelcomeBoard from "../icons/WelcomeBoard";
import styled from "styled-components/macro";


export default function WelcomePage() {

    return (
        <Wrapper>
            <WelcomeBoard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  `