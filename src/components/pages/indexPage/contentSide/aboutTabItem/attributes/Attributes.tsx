import styled from "styled-components";
import Box from "../../../../../ui/box/Box";
import H3 from "../../../../../ui/heading/h3/H3";
import { attributeItems } from "../../../../../../fakeData/attribute";
import AttributeItem from "./AttributeItem";

const Attributes = () => {
  return (
    <Box
      style={{
        padding: "16px 24px",
        backgroundColor: "#171F2C",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
        gap: "16px",
      }}
    >
      <H3 mode="Rift" size={24} transform="uppercase" ts="italic">
        Attributes
      </H3>

      <GridContainer>
        {attributeItems &&
          attributeItems.map((item) => (
            <AttributeItem key={item.id} {...item} />
          ))}
      </GridContainer>
    </Box>
  );
};

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr; /*same width with 1fr*/
  gap: 8px;
  overflow-x: auto;

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(238px, 1fr));
  }
`;
export default Attributes;
