import styled from "styled-components";
import Box from "../../../../ui/box/Box";
import H4 from "../../../../ui/heading/h4/H4";
import { CountDownItems } from "../../../../../fakeData/countDown";
import AuctionCountDownBoxItem from "./AuctionCountDownBoxItem";

const AuctionCountDownBox: React.FC = () => {
  return (
    <AuctionCountDownBoxContainer>
      <H4
        mode="Rift"
        size={12}
        color="#9099A3"
        transform="uppercase"
        ts="normal"
      >
        auction countdown in
      </H4>
      <Box direction="row" style={{ gap: "4px" }}>
        {CountDownItems &&
          CountDownItems.length > 0 &&
          CountDownItems.map((item) => (
            <AuctionCountDownBoxItem key={item.id} {...item} />
          ))}
      </Box>
    </AuctionCountDownBoxContainer>
  );
};

const AuctionCountDownBoxContainer = styled(Box)`
  border-radius: 8px;
  background-color: #202831;
  padding: 4px;
  gap: 4px;
  flex: 1;

  @media (min-width: 1440px) {
    padding: 8px;
  }
`;

export default AuctionCountDownBox;
