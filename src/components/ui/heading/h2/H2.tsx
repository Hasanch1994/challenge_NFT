import styled from "styled-components";

interface Props {
  mode: "Rift" | "Acumin";
  size: number;
}

const H2 = styled.h2<Props>`
  color: white;
  font-family: ${({ mode }) =>
    mode === "Rift" ? "riftMedium" : "acuminproRegular"};
  font-weight: 700;
  font-style: normal;
  font-size: ${({ size }) => size}px;
`;

// eslint-disable-next-line react-refresh/only-export-components
export default H2;
