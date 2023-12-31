import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BreadCrumbsWrapper>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <BreadCrumbsArrow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  d="M1 1L6.5 6.5L1 12"
                  stroke="url(#paint0_linear_1_14)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_14"
                    x1="1"
                    y1="5.70287"
                    x2="6.4862"
                    y2="5.99401"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00B4DB" />
                    <stop offset="0.255208" stopColor="#0095CA" />
                    <stop offset="1" stopColor="#0066B0" />
                  </linearGradient>
                </defs>
              </svg>
            </BreadCrumbsArrow>
          )}

          {!isMobile ? (
            <BreadCrumbsText isLastItem={index === items.length - 1}>
              {item}
            </BreadCrumbsText>
          ) : (
            <React.Fragment>
              {index === 0 || index === items.length - 1 ? (
                <BreadCrumbsText isLastItem={index === items.length - 1}>
                  {item}
                </BreadCrumbsText>
              ) : (
                <BreadCrumbsDots>...</BreadCrumbsDots>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </BreadCrumbsWrapper>
  );
};

const BreadCrumbsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BreadCrumbsArrow = styled.span`
  margin: 0 12px;
`;

interface BreadCrumbsTextProps {
  isLastItem: boolean;
}

const BreadCrumbsText = styled.span<BreadCrumbsTextProps>`
  margin: 0 12px;
  color: ${({ isLastItem }) => (isLastItem ? "white" : "#9099a3")};
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "acuminproRegular";
  font-weight: 400;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const BreadCrumbsDots = styled.span`
  margin: 0 12px;
  color: #9099a3;
  font-size: 14px;
`;

export default Breadcrumbs;
