import Breadcrumbs from "../../../ui/breadcrumbs/BreadCrumbs";
import ImagePoint from "../../../../assets/image.png";
import Box from "../../../ui/box/Box";
import Image from "../../../ui/image/Image";
import H1 from "../../../ui/heading/h1/H1";
import P from "../../../ui/paragraph/P";

const ContentSide: React.FC = () => {
  const nftTitle: string = "NFT - #1003 johan lomu";
  return (
    <Box
      style={{
        gap: "24px",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Breadcrumbs
        items={["Blaze", "Active Auctions", "NFT - #1003 Jonah Lomu"]}
      />
      <H1>{nftTitle}</H1>

      <Image
        src={ImagePoint}
        width="100%"
        height={580}
        alt="image"
        title={nftTitle}
      />

      <Box
        style={{
          backgroundColor: "#202831",
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "12px",
          padding: "8px",
        }}
      >
        <P>
          The official collection for Oleksandr Usyk, the Boxing Heavyweight
          Champion of the World. A unique collection of 2000 pieces of artwork
          designed by world-renowned Dosbrak traits depicting moments from
          Usyk's illustrious career, Ukrainian culture and collection proceeds
          supporting the Usyk Foundation. Purchase an Usyk NFT to redeem daily
          ASSET rewards to use within the ecosystem. The official collection for
          Oleksandr Usyk, the Boxing Heavyweight Champion of the World. A unique
          collection of 2000 pieces of artwork designed by world-renowned
          Dosbrak traits depicting moments from Usyk's illustrious career,
          Ukrainian culture and collection proceeds supporting the Usyk
          Foundation. Purchase an Usyk NFT to redeem daily ASSET rewards to use
          within the ecosystem. The official collection for Oleksandr Usyk, the
          Boxing Heavyweight Champion of the World. A unique collection of 2000
          pieces of artwork designed by world-renowned Dosbrak traits depicting
          moments from Usyk's illustrious career, Ukrainian culture and
          collection proceeds supporting the Usyk Foundation. Purchase an Usyk
          NFT to redeem daily ASSET rewards to use within the ecosystem. The
          official collection for Oleksandr Usyk, the Boxing Heavyweight
          Champion of the World. A unique collection of 2000 pieces of artwork
          designed by world-renowned Dosbrak traits depicting moments from
          Usyk's illustrious career, Ukrainian culture and collection proceeds
          supporting the Usyk Foundation. Purchase an Usyk NFT to redeem daily
          ASSET rewards to use within the ecosystem. The official collection for
          Oleksandr Usyk, the Boxing Heavyweight Champion of the World. A unique
          collection of 2000 pieces of artwork designed by world-renowned
          Dosbrak traits depicting moments from Usyk's illustrious career,
          Ukrainian culture and collection proceeds supporting the Usyk
          Foundation. Purchase an Usyk NFT to redeem daily ASSET rewards to use
          within the ecosystem. The official collection for Oleksandr Usyk, the
          Boxing Heavyweight Champion of the World. A unique collection of 2000
          pieces of artwork designed by world-renowned Dosbrak traits depicting
          moments from Usyk's illustrious career, Ukrainian culture and
          collection proceeds supporting the Usyk Foundation. Purchase an Usyk
          NFT to redeem daily ASSET rewards to use within the ecosystem. The
          official collection for Oleksandr Usyk, the Boxing Heavyweight
          Champion of the World. A unique collection of 2000 pieces of artwork
          designed by world-renowned Dosbrak traits depicting moments from
          Usyk's illustrious career, Ukrainian culture and collection proceeds
          supporting the Usyk Foundation. Purchase an Usyk NFT to redeem daily
          ASSET rewards to use within the ecosystem. The official collection for
          Oleksandr Usyk, the Boxing Heavyweight Champion of the World. A unique
          collection of 2000 pieces of artwork designed by world-renowned
          Dosbrak traits depicting moments from Usyk's illustrious career,
          Ukrainian culture and collection proceeds supporting the Usyk
          Foundation. Purchase an Usyk NFT to redeem daily ASSET rewards to use
          within the ecosystem. The official collection for Oleksandr Usyk, the
          Boxing Heavyweight Champion of the World. A unique collection of 2000
          pieces of artwork designed by world-renowned Dosbrak traits depicting
          moments from Usyk's illustrious career, Ukrainian culture and
          collection proceeds supporting the Usyk Foundation. Purchase an Usyk
          NFT to redeem daily ASSET rewards to use within the ecosystem.
        </P>
      </Box>
    </Box>
  );
};

export default ContentSide;
