import styled from "styled-components";
import AuctionSide from "./auctionSide/AuctionSide";
import ContentSide from "./contentSide/ContentSide";

const Index = () => {
  return (
    <MainWrapper>
      <ContentSide />
      <AuctionSide isFixed={true} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export default Index;
