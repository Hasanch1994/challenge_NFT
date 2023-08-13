import styled from "styled-components";
import Box from "../../../../../ui/box/Box";
import H3 from "../../../../../ui/heading/h3/H3";
import { detailItems } from "../../../../../../fakeData/details";
import DetailItem from "./DetailItem";

const Details = () => {
  return (
    <Container>
      <H3 mode="Rift" size={24} transform="uppercase" ts="italic">
        Details
      </H3>

      <ItemsContainer>
        {detailItems &&
          detailItems.map((item) => <DetailItem key={item.id} {...item} />)}
      </ItemsContainer>
    </Container>
  );
};

const ItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
export default Details;
