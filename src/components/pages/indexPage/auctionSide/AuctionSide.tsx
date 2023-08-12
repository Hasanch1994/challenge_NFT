import styled from "styled-components";
import Box from "../../../ui/box/Box";
import Button from "../../../ui/button/Button";
import Disclosure from "../../../ui/disclosure/Disclosure";
import TermsDisclosureButton from "../../../ui/disclosure/termsDisclosure/TDButton";
import TermsDisclosureContent from "../../../ui/disclosure/termsDisclosure/TDContent";
import H2 from "../../../ui/heading/h2/H2";
import H4 from "../../../ui/heading/h4/H4";

interface Props {
  isFixed: boolean;
}

const AuctionSide: React.FC<Props> = ({ isFixed }) => {
  return (
    <HidableBox
      isFixed={isFixed}
      direction="column"
      style={{
        flex: 1,
      }}
    >
      <Box
        style={{
          position: isFixed ? "fixed" : "static",
          width: isFixed ? "628px" : "auto",
          backgroundColor: "#171F2C",
          borderRadius: "12px",
          padding: "24px",
          gap: 22,
        }}
      >
        <H2 mode="Rift" size={18} color="rgba(255, 255, 255, 0.80)">
          Auction
        </H2>

        <Box style={{ gap: 8 }}>
          <ResponsiveBox direction="row" style={{ gap: "8px" }}>
            <Box
              style={{
                borderRadius: "8px",
                backgroundColor: "#202831",
                padding: "8px 12px",
                gap: "4px",
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
                auction start date
              </H4>
              <span className="dateStyle">24.10.2022</span>
            </Box>

            <Box
              style={{
                borderRadius: "8px",
                backgroundColor: "#202831",
                padding: "8px 12px",
                gap: 4,
                flex: 1,
              }}
            >
              <h4>auction end date</h4>
              <span className="dateStyle">07.11.2022</span>
            </Box>
          </ResponsiveBox>

          <Box
            style={{
              borderRadius: "8px",
              backgroundColor: "#202831",
              padding: "8px",
              gap: 4,
              flex: 1,
            }}
          >
            <H4
              mode="Rift"
              size={12}
              color="#9099A3"
              transform="uppercase"
              ts="normal"
            >
              auction countdown in
            </H4>
            <Box direction="row" style={{ gap: "4px" }}>
              <Box
                style={{
                  width: isFixed ? "138px" : "auto",
                  borderRadius: "8px",
                  backgroundColor: "#171F2C",
                  padding: "4px 12px",
                  gap: 4,
                  flex: 1,
                  alignContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.80)",
                    textAlign: "center",
                    fontFamily: "riftMedium",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    /* 133.333% */
                  }}
                >
                  9
                  <span
                    style={{
                      color: "rgba(144, 153, 163, 0.80)",
                      textAlign: "center",
                      fontFamily: "riftMedium",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      paddingLeft: 2,
                    }}
                  >
                    D
                  </span>
                </span>
              </Box>

              <Box
                style={{
                  width: isFixed ? "138px" : "auto",
                  borderRadius: "8px",
                  backgroundColor: "#171F2C",
                  padding: "4px 12px",
                  gap: 4,
                  flex: 1,
                  alignContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.80)",
                    textAlign: "center",
                    fontFamily: "riftMedium",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    /* 133.333% */
                  }}
                >
                  14
                  <span
                    style={{
                      color: "rgba(144, 153, 163, 0.80)",
                      textAlign: "center",
                      fontFamily: "riftMedium",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      paddingLeft: 2,
                    }}
                  >
                    H
                  </span>
                </span>
              </Box>
              <Box
                style={{
                  width: isFixed ? "138px" : "auto",
                  borderRadius: "8px",
                  backgroundColor: "#171F2C",
                  padding: "4px 12px",
                  gap: 4,
                  flex: 1,
                  alignContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.80)",
                    textAlign: "center",
                    fontFamily: "riftMedium",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    /* 133.333% */
                  }}
                >
                  29
                  <span
                    style={{
                      color: "rgba(144, 153, 163, 0.80)",
                      textAlign: "center",
                      fontFamily: "riftMedium",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      paddingLeft: 2,
                    }}
                  >
                    M
                  </span>
                </span>
              </Box>
              <Box
                style={{
                  width: isFixed ? "138px" : "auto",
                  borderRadius: "8px",
                  backgroundColor: "#171F2C",
                  padding: "4px 12px",
                  gap: 4,
                  flex: 1,
                  alignContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.80)",
                    textAlign: "center",
                    fontFamily: "riftMedium",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  52
                  <span
                    style={{
                      color: "rgba(144, 153, 163, 0.80)",
                      textAlign: "center",
                      fontFamily: "riftMedium",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      paddingLeft: 2,
                    }}
                  >
                    S
                  </span>
                </span>
              </Box>
            </Box>
          </Box>

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
      </Box>
    </HidableBox>
  );
};

const ResponsiveBox = styled(Box)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface HidableBoxProps {
  isFixed: boolean;
}
const HidableBox = styled(Box)<HidableBoxProps>`
  @media (max-width: 768px) {
    display: ${({ isFixed }) => (isFixed ? "none" : "flex")};
  }
`;

export default AuctionSide;
