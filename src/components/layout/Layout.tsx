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
  justify-content:center;
  margin: 0 auto;
`;

const Main = styled.main`
  margin-top: 100px;
  display: flex;

  @media (min-width: 1440px) {
    padding: 32px 104px;
  }

  @media (min-width: 768px) {
    padding: 24px 32px;
  }

  @media (min-width: 360px) {
    padding: 24px 16px;
  }
`;
export default Layout;
