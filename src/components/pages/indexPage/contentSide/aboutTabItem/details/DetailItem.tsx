import React from "react";
import { DetailType } from "../../../../../../types/types";
import styled from "styled-components";

const DetailItem: React.FC<DetailType> = ({ title, value }) => {
  return (
    <Article>
      <Title>{title}</Title>
      <Value mode={value}>
        {value}
        {!isNaN(Number(value)) && "%"}
      </Value>
    </Article>
  );
};

const Article = styled.article`
  min-height: 48px;
  border-radius: 10px;
  background-color: #202831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

const Title = styled.p`
  color: #fff;
  font-family: "riftBold";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`;

interface ValueProps {
  mode: number | string;
}

const Value = styled.p<ValueProps>`
  color: ${({ mode }) =>
    isNaN(Number(mode)) ? "#9099a3" : Number(mode) > 0 ? "#70FD75" : "#FD7070"};
  text-align: right;
  font-family: "riftBold";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
export default DetailItem;
