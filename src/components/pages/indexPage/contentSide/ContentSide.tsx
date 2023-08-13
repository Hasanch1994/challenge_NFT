import Breadcrumbs from "../../../ui/breadcrumbs/BreadCrumbs";
import ImagePoint from "../../../../assets/image.png";
import Box from "../../../ui/box/Box";
import Image from "../../../ui/image/Image";
import H1 from "../../../ui/heading/h1/H1";
import TabList from "../../../ui/tabList/TabList";
import { TabType } from "../../../../types/types";
import AboutTabItem from "./aboutTabItem/AboutTabItem";
import styled from "styled-components";
import AuctionSide from "../auctionSide/AuctionSide";

const tabs: TabType[] = [
  {
    title: "About",
    content: <AboutTabItem />,
  },
  {
    title: "FAQ",
    content: <div>Content for Tab 2</div>,
  },
  {
    title: "Bid history",
    content: <div>Content for Tab 3</div>,
  },
];

const ContentSide: React.FC = () => {
  const nftTitle: string = "NFT - #1003 johan lomu";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        flex: 1,
      }}
    >
      <ContainerContentBox
        style={{
          overflowY: "auto",
        }}
      >
        <Breadcrumbs
          items={["Blaze", "Active Auctions", "NFT - #1003 Jonah Lomu"]}
        />
        <H1>{nftTitle}</H1>

        <ResponsiveBox direction="row" style={{ gap: "16px" }}>
          <Box style={{ flex: 1 }}>
            <ResponsiveImage src={ImagePoint} alt="image" title={nftTitle} />
          </Box>

          <SmallAuction style={{ flex: 1 }}>
            <AuctionSide isFixed={false} />
          </SmallAuction>
        </ResponsiveBox>

        <Box
          style={{
            overflowX: "hidden",
            backgroundColor: "#202831",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <TabList tabs={tabs} />
        </Box>
      </ContainerContentBox>
    </div>
  );
};

const ContainerContentBox = styled(Box)`
  gap: 24px;
  overflow-y: scroll;
  @media screen and (min-width: 360px) {
    width: 328px;
  }

  @media screen and (min-width: 760px) {
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 580px;
  }
`;

const ResponsiveImage = styled(Image)`
  border-radius: 12px;
  @media (min-width: 360px) {
    width: 328px;
    height: 328px;
  }

  @media (min-width: 768px) {
    width: 344px;
    height: 344px;
  }

  @media (min-width: 1440px) {
    width: 580px;
    height: 580px;
  }
`;

const SmallAuction = styled(Box)`
  @media (min-width: 1440px) {
    display: none;
  }
`;

const ResponsiveBox = styled(Box)`
  @media (min-width: 360px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default ContentSide;
