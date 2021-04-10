import styled from "styled-components/macro";
import GetStartedButton from "../components/GetStartedButton";
import GetProductListButton from "../components/GetProductListButton";


export default function WelcomePage() {

    return (
        <Container>
            <section>
                <h4>Die bessere Einkaufsliste</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et</p>
            </section>
            <GetStartedButton/>
            <GetProductListButton />
        </Container>
    )
}

const Container = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  background: var(--secondary-color);
  opacity: 0.85;
  padding: 20px;
  position: absolute;
  bottom: 300px;
  margin: 15px;
  line-height: 1.5;
  justify-items: end;


  img {
   
    background-size: cover;
    background-position: top;
    min-height: 100%;
    height: 100vh;
    position: relative;
  };
`