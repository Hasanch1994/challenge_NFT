import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styled from "styled-components";
const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      {/* main top header */}
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  margin-top: 100px;
  display: flex;
padding: 24px 16px;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }

  @media (min-width: 1440px) {
    padding: 32px 104px;
  }
`;
export default Layout;
