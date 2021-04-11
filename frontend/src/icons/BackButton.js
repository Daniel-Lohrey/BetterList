import {useHistory} from "react-router-dom";
import styled from "styled-components/macro";
import ArrowLeft from "./ArrowLeft";

export default function BackButton() {

    const history = useHistory();

    return (
        <Button onClick={() => history.goBack()}><ArrowLeft /></Button>
    )

}

const Button = styled.button`
    outline: 0;
    border: 0;
    background: transparent;
    padding: 10px 10px 10px 0;
    position: absolute;
    top: 13px;
`