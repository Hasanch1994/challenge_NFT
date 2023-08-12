import styled from "styled-components";
import Box from "../../../../../ui/box/Box";
import H3 from "../../../../../ui/heading/h3/H3";
import { detailItems } from "../../../../../../fakeData/details";
import DetailItem from "./DetailItem";

const Details = () => {
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
        Details
      </H3>

      <ItemsContainer>
        {detailItems &&
          detailItems.map((item) => <DetailItem key={item.id} {...item} />)}
      </ItemsContainer>
    </Box>
  );
};

const ItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Details;
