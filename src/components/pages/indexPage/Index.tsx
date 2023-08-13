import styled from "styled-components";
import AuctionSide from "./auctionSide/AuctionSide";
import ContentSide from "./contentSide/ContentSide";
import { useTitle } from "../../../hooks/useTitle";

const Index = () => {
  useTitle("Challenge Main");

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
  justify-content: space-between;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export default Index;
