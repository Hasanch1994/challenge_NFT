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
        flex: 1,
      }}
    >
      <Box
        style={{
          width: "580px",
          gap: "24px",
          overflowY: "auto",
        }}
      >
        <Breadcrumbs
          items={["Blaze", "Active Auctions", "NFT - #1003 Jonah Lomu"]}
        />
        <H1>{nftTitle}</H1>

        <ResponsiveBox direction="row">
          <Box style={{ flex: 1 }}>
            <ResponsiveImage
              src={ImagePoint}
              width="100%"
              height={580}
              alt="image"
              title={nftTitle}
            />
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
      </Box>
    </div>
  );
};

const ResponsiveImage = styled(Image)`
  @media (max-width: 768px) {
    width: 344px;
    height: 344px;
  }

  @media (max-width: 360px) {
    width: 328px;
    height: 328px;
  }
`;

const SmallAuction = styled(Box)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const ResponsiveBox = styled(Box)`
  @media (min-width: 360px) {
    flex-direction: column;
  }
`;

export default ContentSide;
