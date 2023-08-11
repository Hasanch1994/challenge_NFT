import styled from "styled-components";

const TermsDisclosureContent = () => {
  return (
    <>
      <OrderedList type="1">
        <ListItem>
          All NFT burn prizes are held in escrow and can be claimed by the
          winner or creator once the burn event is finished. Users must open a
          support ticket on our Discord channel to claim real world prizes, e.g.
          merch, experiences.
        </ListItem>
        <ListItem>ASSET cannot be refunded once burned.</ListItem>
        <ListItem>
          ASSET will not be refunded if do not win a burn prize.
        </ListItem>
        <ListItem>You can only buy 20% of total burn event entries.</ListItem>
      </OrderedList>
    </>
  );
};

const OrderedList = styled.ol`
  padding: 0px 20px;
`;
const ListItem = styled.li`
  color: #9099a3;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: "acuminproRegular";
`;
export default TermsDisclosureContent;
