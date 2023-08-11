import Box from "../../../ui/box/Box";
import Button from "../../../ui/button/Button";
import Disclosure from "../../../ui/disclosure/Disclosure";
import TermsDisclosureButton from "../../../ui/disclosure/termsDisclosure/TDButton";
import TermsDisclosureContent from "../../../ui/disclosure/termsDisclosure/TDContent";

const AuctionSide: React.FC = () => {
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
          position: "fixed",
          width: "628px",
          backgroundColor: "#171F2C",
          borderRadius: "12px",
          padding: "24px",
          gap: 22,
        }}
      >
        <h3>Auction</h3>
        <Box style={{ gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Box
              style={{
                borderRadius: "8px",
                backgroundColor: "#202831",
                padding: "8px 12px",
                gap: 4,
                flex: 1,
              }}
            >
              <h4>auction start date</h4>
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
          </div>

          <Box
            style={{
              borderRadius: "8px",
              backgroundColor: "#202831",
              padding: "8px",
              gap: 4,
              flex: 1,
            }}
          >
            <h4>auction countdown in</h4>
            <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <Box
                style={{
                  width: "138px",
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
                  width: "138px",
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
                  width: "138px",
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
                  width: "138px",
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
            </div>
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
            <h4>current bid</h4>
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
              gap: 4,
              flex: 1,
            }}
          >
            <Box>
              <h4>set your bid</h4>
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
              }}
            >
              <span
                style={{
                  color: "#9099A3",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                }}
              >
                Balance: 113027 ASSET
              </span>

              <button
                style={{
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
    </div>
  );
};

export default AuctionSide;
