import React from "react";
import Box from "../../../../ui/box/Box";
import H2 from "../../../../ui/heading/h2/H2";
import P from "../../../../ui/paragraph/P";
import Attributes from "./attributes/Attributes";
import Details from "./details/Details";

const AboutTabItem: React.FC = () => {
  return (
    <Box style={{ gap: 24 }}>
      <Box style={{ gap: 4 }}>
        <H2 mode="Acumin" size={18}>
          About NFT
        </H2>

        <P>
          The official collection for Oleksandr Usyk, the Boxing Heavyweight
          Champion of the World. A unique collection of 2000 pieces of artwork
          designed by world-renowned Dosbrak traits depicting moments from
          Usyk's illustrious career, Ukrainian culture and collection proceeds
          supporting the Usyk Foundation. Purchase an Usyk NFT to redeem daily
          ASSET rewards to use within the ecosystem.
        </P>
      </Box>

      <Attributes />
      <Details />
    </Box>
  );
};

export default AboutTabItem;
