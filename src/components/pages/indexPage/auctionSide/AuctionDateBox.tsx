import styled from "styled-components";
import Box from "../../../ui/box/Box";
import H4 from "../../../ui/heading/h4/H4";

interface Props {
  title: string;
  value: string;
}

const AuctionDateBox: React.FC<Props> = ({ title, value }) => {
  return (
    <AuctionDateBoxContainer>
      <H4
        mode="Rift"
        size={18}
        color="#9099A3"
        transform="uppercase"
        ts="normal"
      >
        {title}
      </H4>
      <AuctionValue className="dateStyle">{value}</AuctionValue>
    </AuctionDateBoxContainer>
  );
};

const AuctionDateBoxContainer = styled(Box)`
  border-radius: 8px;
  background-color: #202831;
  padding: 8px 12px;
  gap: 4px;
  flex: 1;
`;

const AuctionValue = styled.span`
  color: #fff;
  font-family: "riftMedium";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
`;

export default AuctionDateBox;
