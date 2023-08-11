import styled from "styled-components";

const Image = styled.img`
  border-radius: 8px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.85);
    transform: scale(1.01);
  }
  &:active {
    filter: brightness(1);
  }
`;

export default Image;
