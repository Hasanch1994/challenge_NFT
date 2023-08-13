import styled from "styled-components";

interface Props {
  isCircle?: boolean;
}

const Image = styled.img<Props>`
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

  border-radius: ${({ isCircle }) => (isCircle ? "50%" : "0")};
`;

export default Image;
