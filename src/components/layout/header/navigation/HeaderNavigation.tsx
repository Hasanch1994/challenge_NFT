import styled from "styled-components";
import { navigationItems } from "../../../../fakeData/navigation";

const HeaderNavigation: React.FC = () => {
  return (
    <Nav>
      <UnorderedList>
        {navigationItems &&
          navigationItems.length > 0 &&
          navigationItems.map((item) => (
            <ListItem key={item.id}>
              <Anchor style={{ display: "flex", alignItems: "center", gap: 7 }}>
                {item.title}{" "}
                <svg
                  className="hideArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M9.69471 1.69471C9.87687 1.50611 9.97766 1.25351 9.97539 0.991311C9.97311 0.729114 9.86794 0.478301 9.68253 0.292893C9.49712 0.107485 9.24631 0.00231622 8.98411 3.78026e-05C8.72192 -0.00224062 8.46931 0.0985537 8.28071 0.280712L9.69471 1.69471ZM4.98771 4.98771L4.28071 5.69471C4.46824 5.88218 4.72255 5.9875 4.98771 5.9875C5.25288 5.9875 5.50718 5.88218 5.69471 5.69471L4.98771 4.98771ZM1.69471 0.280712C1.50611 0.0985537 1.25351 -0.00224062 0.991311 3.78026e-05C0.729114 0.00231622 0.478302 0.107485 0.292894 0.292893C0.107485 0.478301 0.00231622 0.729114 3.78025e-05 0.991311C-0.00224062 1.25351 0.0985542 1.50611 0.280712 1.69471L1.69471 0.280712ZM8.28071 0.280712L4.28071 4.28071L5.69471 5.69471L9.69471 1.69471L8.28071 0.280712ZM5.69471 4.28071L1.69471 0.280712L0.280712 1.69471L4.28071 5.69471L5.69471 4.28071Z"
                    fill="white"
                  />
                </svg>
              </Anchor>
            </ListItem>
          ))}
      </UnorderedList>
    </Nav>
  );
};

const Nav = styled.nav`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const UnorderedList = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
`;

const Anchor = styled.li`
  font-family: "riftBold";
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default HeaderNavigation;
