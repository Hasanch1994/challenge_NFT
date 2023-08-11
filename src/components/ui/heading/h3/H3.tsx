import styled from "styled-components";

interface Props {
  mode: "Rift" | "Acumin";
  size: number;
  ts: "italic" | "normal";
  transform: "uppercase" | "lowercase";
  s?: string;
}

const H3 = styled.h3<Props>`
  font-family: ${({ mode }) =>
    mode === "Rift" ? "riftMedium" : "acuminproRegular"};
  font-weight: 700;
  color: ${({ s }) =>
    s
      ? `#
  ${s}`
      : "white"};
  font-style: ${({ ts }) => (ts ? ts : "normal")};
  font-size: ${({ size }) => size}px;
  text-transform: ${({ transform }) => transform};
`;

// eslint-disable-next-line react-refresh/only-export-components
export default H3;
