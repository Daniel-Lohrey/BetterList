import LinkStyled from "./LinkedStyled";
import ArrowRight from "./ArrowRight";


export default function GetProductListButton() {

    return (
        <LinkStyled to='/products'><b>Produktliste</b><ArrowRight/></LinkStyled>
    )
}