import "./header-style.css";
import logo from "../../../assets/logo.png";
import HeaderNavigation from "./navigation/HeaderNavigation";
import HeaderToolbars from "./toolbars/HeaderToolbars";
const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "24px",
        position: "fixed",
        right: 0,
        left: 0,
        zIndex: 99,
      }}
    >
      <div
        style={{
          width: "1440px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" title="logo" />
        <HeaderNavigation />
        <HeaderToolbars />
      </div>
    </header>
  );
};

export default Header;
