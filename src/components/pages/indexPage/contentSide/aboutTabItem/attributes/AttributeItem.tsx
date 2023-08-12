import React from "react";
import { AttributeType } from "../../../../../../types/types";
import styled from "styled-components";
import Box from "../../../../../ui/box/Box";

const AttributeItem: React.FC<AttributeType> = ({
  title,
  type,
  percent,
  value,
}) => {
  return (
    <Article>
      <Type>{type}</Type>
      <Title>{title}</Title>

      <Box
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Percent>
          {percent}
          {"%"}
        </Percent>

        <Box direction="row" style={{ alignItems: "center", gap: 2 }}>
          <Value>{value}</Value>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M13.2772 11.3544L11.5162 13.2424C11.4781 13.2834 11.432 13.3161 11.3807 13.3385C11.3294 13.3609 11.2741 13.3725 11.2181 13.3725H2.87104C2.83128 13.3725 2.7924 13.3609 2.75914 13.3391C2.72588 13.3173 2.69969 13.2863 2.68378 13.2499C2.66787 13.2134 2.66292 13.1731 2.66955 13.1339C2.67617 13.0947 2.69408 13.0583 2.72108 13.0291L4.47865 11.1411C4.51673 11.1001 4.56284 11.0674 4.61412 11.045C4.66539 11.0226 4.72072 11.011 4.77666 11.0109H13.1253C13.1654 11.0101 13.2049 11.0211 13.2388 11.0426C13.2727 11.0642 13.2995 11.0952 13.3158 11.1319C13.3321 11.1686 13.3372 11.2093 13.3305 11.2488C13.3237 11.2884 13.3054 11.3251 13.2779 11.3544H13.2772ZM11.5162 7.55151C11.4779 7.51071 11.4318 7.47813 11.3806 7.45575C11.3293 7.43338 11.2741 7.42169 11.2181 7.42139H2.87104C2.83128 7.42143 2.7924 7.43305 2.75914 7.45484C2.72588 7.47663 2.69969 7.50764 2.68378 7.54407C2.66787 7.58051 2.66292 7.6208 2.66955 7.66C2.67617 7.69921 2.69408 7.73563 2.72108 7.76482L4.47865 9.65441C4.51687 9.69521 4.56301 9.7278 4.61425 9.75017C4.66549 9.77254 4.72075 9.78423 4.77666 9.78453H13.1253C13.1649 9.78418 13.2036 9.77235 13.2366 9.75048C13.2697 9.7286 13.2956 9.69762 13.3114 9.66128C13.3272 9.62494 13.3321 9.58479 13.3256 9.54572C13.319 9.50664 13.3013 9.4703 13.2745 9.44111L11.5162 7.55151ZM2.87104 6.19537H11.2181C11.2741 6.1953 11.3294 6.18371 11.3807 6.16132C11.432 6.13894 11.4781 6.10624 11.5162 6.06525L13.2772 4.1768C13.3047 4.14758 13.323 4.11087 13.3297 4.0713C13.3364 4.03172 13.3313 3.99103 13.315 3.95434C13.2987 3.91766 13.2719 3.8866 13.2381 3.86508C13.2042 3.84356 13.1647 3.83253 13.1245 3.83338H4.77819C4.72199 3.83324 4.66636 3.84473 4.61481 3.86712C4.56327 3.88952 4.51691 3.92233 4.47865 3.9635L2.72108 5.85157C2.69408 5.88075 2.67617 5.91718 2.66955 5.95638C2.66292 5.99559 2.66787 6.03587 2.68378 6.07231C2.69969 6.10875 2.72588 6.13976 2.75914 6.16155C2.7924 6.18334 2.83128 6.19496 2.87104 6.19499V6.19537Z"
              fill="url(#paint0_linear_1_46)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_46"
                x1="3.56269"
                y1="13.6015"
                x2="11.1536"
                y2="2.90093"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stop-color="#9945FF" />
                <stop offset="0.3" stop-color="#8752F3" />
                <stop offset="0.5" stop-color="#5497D5" />
                <stop offset="0.6" stop-color="#43B4CA" />
                <stop offset="0.72" stop-color="#28E0B9" />
                <stop offset="0.97" stop-color="#19FB9B" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 10px;
  background-color: #202831;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const Type = styled.p`
  color: #9099a3;
  font-family: "acuminproRegular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
`;

const Title = styled.p`
  color: #fff;
  font-family: "riftBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`;

const Percent = styled.p`
  color: #70fd75;
  font-family: "acuminproRegular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const Value = styled.p`
  color: #fff;
  text-align: right;
  font-family: "riftMedium";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
export default AttributeItem;
