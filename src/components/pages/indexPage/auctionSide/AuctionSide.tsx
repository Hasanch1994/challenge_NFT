import styled from "styled-components";
import Box from "../../../ui/box/Box";
import Button from "../../../ui/button/Button";
import Disclosure from "../../../ui/disclosure/Disclosure";
import TermsDisclosureButton from "../../../ui/disclosure/termsDisclosure/TDButton";
import TermsDisclosureContent from "../../../ui/disclosure/termsDisclosure/TDContent";
import H2 from "../../../ui/heading/h2/H2";
import H4 from "../../../ui/heading/h4/H4";
import AuctionDateBox from "./AuctionDateBox";
import AuctionCountDownBox from "./auctionCountDown/AuctionCountDownBox";

interface Props {
  isFixed: boolean;
}

const AuctionSide: React.FC<Props> = ({ isFixed }) => {
  return (
    <HidableBox isFixed={isFixed} direction="column">
      <FixableBox isFixed={isFixed}>
        <H2 mode="Rift" size={18} color="rgba(255, 255, 255, 0.80)">
          Auction
        </H2>

        <Box style={{ gap: 8 }}>
          <ResponsiveBox direction="column">
            <AuctionDateBox title="auction start date" value="24.10.2022" />
            <AuctionDateBox title="auction end date" value="07.11.2022" />
          </ResponsiveBox>

          <AuctionCountDownBox />

          <Box
            direction="row"
            style={{
              borderRadius: "8px",
              backgroundColor: "#202831",
              padding: "18px 8px",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
              flex: 1,
            }}
          >
            <H4
              mode="Rift"
              size={18}
              color="#9099A3"
              transform="uppercase"
              ts="normal"
            >
              current bid
            </H4>
            <span
              style={{
                color: "#FFF",
                fontFamily: "riftMedium",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
              }}
            >
              3.87
              <span
                style={{
                  color: "#9099A3",
                  fontFamily: "riftMedium",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "32px",
                  paddingLeft: 4,
                }}
              >
                ASSET
              </span>
            </span>
          </Box>

          <Box
            direction="row"
            style={{
              borderRadius: "8px",
              backgroundColor: "transparent",
              border: "1px solid #464C55",
              padding: "10px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4px",
              flex: 1,
            }}
          >
            <Box>
              <H4
                mode="Rift"
                size={16}
                color="#9099A3"
                transform="uppercase"
                ts="normal"
              >
                set your bid
              </H4>{" "}
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "riftMedium",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                50,000
              </span>
            </Box>

            <Box
              style={{
                alignItems: "end",
                gap: "2px",
              }}
            >
              <span
                style={{
                  color: "#9099A3",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontFamily: "acuminproRegular",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                }}
              >
                Balance: 113027 ASSET
              </span>

              <button
                style={{
                  maxHeight: "28px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(1, 102, 177, 1)",
                  padding: "7px 22px",
                  textAlign: "center",
                  color: "#FFF",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                max
              </button>
            </Box>
          </Box>
        </Box>
        <Button>BID WITH BLOCK</Button>

        <Disclosure
          button={<TermsDisclosureButton />}
          content={<TermsDisclosureContent />}
        />
      </FixableBox>
    </HidableBox>
  );
};

interface BoxProps {
  isFixed: boolean;
}

const FixableBox = styled(Box)<BoxProps>`
  position: ${({ isFixed }) => (isFixed ? "sticky" : "static")};
  right: 0px;
  top: 135px;
  width: 328px;
  background-color: #171f2c;
  border-radius: 12px;
  padding: 16px;
  gap: 22px;

  @media (min-width: 768px) {
    width: 344px;
    padding: 24px;
  }

  @media (min-width: 1440px) {
    width: 628px;
  }
`;

const ResponsiveBox = styled(Box)`
  gap: 8px;
  flex-direction: row;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

const HidableBox = styled(Box)<BoxProps>`
  @media (max-width: 1439px) {
    display: ${({ isFixed }) => (isFixed ? "none" : "flex")};
  }
`;

export default AuctionSide;
