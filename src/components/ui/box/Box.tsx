import styled from "styled-components";

interface Props {
  direction?: "row" | "column";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  display: flex;
  display: -webkit-flex;
  flex-direction: ${({ direction }) =>
    direction && direction === "row" ? "row" : "column"};
  ${(props) => (props.style ? `style: ${props.style}` : "")};
`;

export default Box;
