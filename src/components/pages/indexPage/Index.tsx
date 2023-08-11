import styled from "styled-components";
import AuctionSide from "./auctionSide/AuctionSide";
import ContentSide from "./contentSide/ContentSide";

const Index = () => {
  return (
    <MainWrapper>
      <ContentSide />
      <AuctionSide />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export default Index;
