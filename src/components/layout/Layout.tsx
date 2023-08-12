import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styled from "styled-components";
const Layout: React.FC = () => {
  return (
    <Container>
      {/* main top header */}
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
`;

const Main = styled.main`
  padding: 32px 104px;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 24px 32px;
  }

  @media (max-width: 360px) {
    padding: 24px 16px;
  }
`;
export default Layout;
