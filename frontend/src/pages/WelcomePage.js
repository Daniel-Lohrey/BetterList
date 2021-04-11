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
    height: 100vh;
    background: url('Lebensmittel.jpg') fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  `