import styled from 'styled-components/macro'
import BackButton from "../icons/BackButton";

export default function AppHeader() {



    return (
        <Header>
            <BackButton />
            <h1>BetterList</h1>
        </Header>
    )
}

const Header = styled.header`
  background: #EAE0D5 ;
  box-shadow: 0px 2px 2px #333;
  
  
  h1 {
    padding: 11px;
    margin: 0px;
    text-align: center;
    font-size: 1.8em;
    font-family: "Arial";
    color: black;
  }
`


