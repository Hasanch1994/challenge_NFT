import NotificationIcon from "../../../icons/NotificationIcon";
import SearchIcon from "../../../icons/SearchIcon";
import AccountItem from "./AccountItem";
import "./toolbars-styles.css";
import profileImage from "../../../../assets/profile.png";
import MenuIcon from "../../../icons/MenuIcon";
const HeaderToolbars: React.FC = () => {
  const toolbarItems: React.ReactNode[] = [
    <SearchIcon />,
    <NotificationIcon />,
    <AccountItem title="Mike" image={profileImage} />,
    <MenuIcon/>
  ];
  return (
    <div className="toolbar">
      {toolbarItems.map((item, index) => (
        <div className={`toolbar-item ${index === 2 && 'padding-x'}`} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeaderToolbars;
