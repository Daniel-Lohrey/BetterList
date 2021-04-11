import styled from "styled-components/macro";
import GetStartedButton from "../components/GetStartedButton";
import GetProductListButton from "../components/GetProductListButton";


export default function WelcomeBoard() {

    return (
        <Container>
            <section>
                <h2>BetterList</h2>
                <h4> Eine bessere Einkaufsliste,
                    in der man sich auch einen direkten Überblick über weitere Details,
                    sowie Nährwertangaben des Produktes verschaffen kann.</h4>
            </section>
            <GetStartedButton />
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
  
  section{
    margin-top: 50px;
    padding-bottom: 90px;
  }


  img {
    justify-self: center;
  }
`
