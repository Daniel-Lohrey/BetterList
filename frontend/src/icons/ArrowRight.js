import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components/macro";

export default function ArrowRight() {
    return (

        <Arrow>
            <FiChevronRight/>
        </Arrow>

    )
}

const Arrow = styled(FiChevronRight)`
  
  color: black;
  transform: scale(1.7);
`