import styled from "styled-components";

const Button = styled.button`
  display: flex;
  width: auto;
  height: 56px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 22px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  border: 0;
  cursor: pointer;
  background: linear-gradient(90deg, #00b4db 0%, #0095ca 25.52%, #0066b0 100%);
  transition: all ease-in-out 0.2s;
  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }
`;

export default Button;
