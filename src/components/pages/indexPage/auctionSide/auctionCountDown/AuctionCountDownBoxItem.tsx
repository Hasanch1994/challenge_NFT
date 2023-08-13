import styled from "styled-components";
import { CountDownType } from "../../../../../types/types";
import Box from "../../../../ui/box/Box";

const AuctionCountDownBoxItem: React.FC<CountDownType> = ({ type, value }) => {
  return (
    <CountDownBox>
      <CountDownValue>
        {value}
        <CountDownType>{type}</CountDownType>
      </CountDownValue>
    </CountDownBox>
  );
};

const CountDownBox = styled(Box)`
  border-radius: 8px;
  background-color: #171f2c;
  padding: 4px 23px;
  gap: 2px;
  flex: 1;
  align-content: center;
`;

const CountDownValue = styled.span`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: "riftMedium";
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const CountDownType = styled.span`
  color: rgba(144, 153, 163, 0.8);
  text-align: center;
  font-family: "riftMedium";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding-left: 2px;
`;

export default AuctionCountDownBoxItem;
