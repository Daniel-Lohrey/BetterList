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

  color: #EAE0D5;
  transform: scale(2.5);
  margin-top: 10px;
`