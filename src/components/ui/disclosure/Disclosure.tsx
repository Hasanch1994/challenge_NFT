import Box from "../box/Box";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  button: React.ReactNode;
  content: React.ReactNode;
}
const Disclosure: React.FC<Props> = ({ button, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <Box style={{ gap: "17px" }}>
      <ButtonWrapper onClick={handleClick}>
        {button}
        <ArrowIconWrapper isOpen={isOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M9.69471 4.29278C9.87687 4.48138 9.97766 4.73398 9.97539 4.99618C9.97311 5.25837 9.86794 5.50919 9.68253 5.69459C9.49712 5.88 9.24631 5.98517 8.98411 5.98745C8.72192 5.98973 8.46931 5.88893 8.28071 5.70678L9.69471 4.29278ZM4.98771 0.999776L4.28071 0.292777C4.46824 0.105306 4.72255 -1.00136e-05 4.98771 -1.00136e-05C5.25288 -1.00136e-05 5.50718 0.105306 5.69471 0.292777L4.98771 0.999776ZM1.69471 5.70678C1.50611 5.88893 1.25351 5.98973 0.991311 5.98745C0.729114 5.98517 0.478302 5.88 0.292894 5.69459C0.107485 5.50919 0.00231622 5.25837 3.78025e-05 4.99618C-0.00224062 4.73398 0.0985542 4.48138 0.280712 4.29278L1.69471 5.70678ZM8.28071 5.70678L4.28071 1.70678L5.69471 0.292777L9.69471 4.29278L8.28071 5.70678ZM5.69471 1.70678L1.69471 5.70678L0.280712 4.29278L4.28071 0.292777L5.69471 1.70678Z"
              fill="#00B4DB"
            />
          </svg>
        </ArrowIconWrapper>
      </ButtonWrapper>
      <ContentWrapper isOpen={isOpen}>{content}</ContentWrapper>
    </Box>
  );
};

interface WrapperProps {
  isOpen: boolean;
}

const ContentWrapper = styled.div<WrapperProps>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #00b4db;
  font-family: "acuminproRegular";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
`;

const ArrowIconWrapper = styled.span<WrapperProps>`
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transform-origin: 50% 50%;
  transition: transform 0.3s ease-in-out;
`;

export default Disclosure;
