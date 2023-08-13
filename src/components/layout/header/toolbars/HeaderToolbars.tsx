import NotificationIcon from "../../../icons/NotificationIcon";
import SearchIcon from "../../../icons/SearchIcon";
import AccountItem from "./AccountItem";
import profileImage from "../../../../assets/profile.png";
import styled, { css } from "styled-components";
import MenuIcon from "../../../icons/MenuIcon";
const HeaderToolbars: React.FC = () => {
  const toolbarItems: React.ReactNode[] = [
    <SearchIcon />,
    <NotificationIcon />,
    <AccountItem title="Mike" image={profileImage} />,
    <MenuIcon />,
  ];
  return (
    <Toolbar>
      {toolbarItems.map((item, index) => (
        <ToolbarItem index={index} key={index}>
          {item}
        </ToolbarItem>
      ))}
    </Toolbar>
  );
};

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface Props {
  index: number;
}

const ToolbarItem = styled.div<Props>`
  min-width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #202831;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.16);
  display: ${({ index }) => (index === 3 || index === 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ index }) =>
    index === 2 &&
    css`
      padding-left: 5px;
      padding-right: 12px;
    `}

  @media (min-width: 1440px) {
    display: ${({ index }) => (index !== 3 ? "flex" : "none")};
  }
`;

export default HeaderToolbars;
