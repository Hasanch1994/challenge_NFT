import styled from "styled-components";

interface Props {
  mode: "Rift" | "Acumin";
  size: number;
  ts: "italic" | "normal";
  transform: "uppercase" | "lowercase";
  color?: string;
}

const H4 = styled.h4<Props>`
  font-family: ${({ mode }) =>
    mode === "Rift" ? "riftBold" : "acuminproRegular"};
  font-weight: 700;
  color: ${({ color }) =>
  color
      ? 
  color
  : "white"};
  font-style: ${({ ts }) => (ts ? ts : "normal")};
font-size: ${({ size }) => size}px;
  text-transform: ${({ transform }) => transform};
`;

// eslint-disable-next-line react-refresh/only-export-components
export default H4;
