import styled from "styled-components/macro";
import GetStartedButton from "./GetStartedButton";
import GetProductListButton from "./GetProductListButton";


export default function WelcomeBoard() {

    return (
        <Container>
            <section>
                <h2>BetterList</h2>
                <h4> Eine bessere Einkaufsliste,
                    in der man sich einen direkten Überblick über weitere Informationen,
                    sowie Nährwertangaben, Nutriscore oder Novagruppe des Produktes verschaffen kann.</h4>
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
  bottom: 200px;
  margin: 15px;
  line-height: 1.5;
  justify-items: end;
  
  section{
    top: 20px;
  }
  
  GetStartedButton{
    position: absolute;
  }


  img {
    justify-self: center;
  }
`
