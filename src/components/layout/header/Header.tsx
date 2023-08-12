import logo from "../../../assets/logo.png";
import HeaderNavigation from "./navigation/HeaderNavigation";
import HeaderToolbars from "./toolbars/HeaderToolbars";
import styled from "styled-components";
import Box from "../../ui/box/Box";
import Image from "../../ui/image/Image";
const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Box
        direction="row"
        style={{
          width: "1440px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src={logo} alt="logo" title="logo" className="imageSize" />
        <HeaderNavigation />
        <HeaderToolbars />
      </Box>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  max-height: 87px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181f2b;
  padding: 24px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index:999;

  @media (max-width: 768px) {
    .imageSize {
      width: 136px;
      height: 32px;
    }
  }
`;

export default Header;
