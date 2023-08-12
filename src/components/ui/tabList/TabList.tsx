import React, { useState } from "react";
import styled from "styled-components";
import Box from "../box/Box";
import { TabType } from "../../../types/types";

interface TabListProps {
  tabs: TabType[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <Box style={{ gap: 24 }}>
      <UnorderedList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={activeTabIndex === index ? true : false}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </TabItem>
        ))}
      </UnorderedList>

      <TabContent>{tabs[activeTabIndex].content}</TabContent>
    </Box>
  );
};

const UnorderedList = styled.ul`
  list-style-type: none;
`;

interface TabItemProps {
  active: boolean;
}

const TabItem = styled.li<TabItemProps>`
  color: ${({ active }) => (active ? "#00b4db" : "#FFF")};
  font-family: "riftBold";
  font-size: 30px;
  font-style: italic;
  line-height: normal;
  display: inline-block;
  margin-right:24px;
  cursor: pointer;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: #00b4db;
  }

  &:active {
    color: #00b4db;
  }

  @media (max-width: 360px) {
    font-size: 24px;
    margin-right:16px;
  }
`;

const TabContent = styled.section`
  transition: all ease-in-out 0.4s;
`;
export default TabList;
