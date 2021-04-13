import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components/macro";

export default function ArrowLeft() {
    return (

        <Arrow>
            <FiChevronLeft/>
        </Arrow>

    )
}

const Arrow = styled(FiChevronLeft)`

  color: black;
  transform: scale(2.5);
  margin: 0px;
  padding-left: 15px;
`