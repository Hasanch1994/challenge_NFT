import styled from "styled-components";
import Box from "../../../../../ui/box/Box";
import H3 from "../../../../../ui/heading/h3/H3";
import { attributeItems } from "../../../../../../fakeData/attribute";
import AttributeItem from "./AttributeItem";

const Attributes = () => {
  return (
    <Container style={{}}>
      <H3 mode="Rift" size={24} transform="uppercase" ts="italic">
        Attributes
      </H3>

      <GridContainer>
        {attributeItems &&
          attributeItems.map((item) => (
            <AttributeItem key={item.id} {...item} />
          ))}
      </GridContainer>
    </Container>
  );
};

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr; /*same width with 1fr*/
  gap: 8px;
  overflow-x: auto;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr; /*same width with 1fr*/
  }
`;

const Container = styled(Box)`
  padding: 16px;
  background-color: #171f2c;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 16px;
  border-radius: 12px;
  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;
export default Attributes;
