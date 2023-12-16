import lt1 from "../assets/lt1.png";
import lt2 from "../assets/lt2.png";
import lt3 from "../assets/lt3.png";
import lt4 from "../assets/lt4.png";

const Roadmap = () => {
  return (
    <section className="flex justify-center py-[50px]">
      <div className="w-full xl:max-w-[1140px] 2xl:max-w-[1320px] px-3 pb-[50px] mb-[50px] border-b-2 border-[#5f6672]">
        <h2 className="text-6xl mb-[65px] font-bold text-center text-white">Roadmap</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <RoadmapItem img={lt1} title="Phase 1">
            Develop contracts, pre-sell and launch marketing campaigns to the community about SPT.
          </RoadmapItem>
          <RoadmapItem img={lt2} title="Phase 2">
            Research and develop a decentralized exchange (DEX - Decentralized Exchange) according
            to the Automated Market Maker (AMM) model and put it into use.
          </RoadmapItem>
          <RoadmapItem img={lt3} title="Phase 3">
            Developed and launched NFT Marketplace for users to create NFTs and buy and sell them.
          </RoadmapItem>
          <RoadmapItem img={lt4} title="Phase 4">
            Developed and launched SPT Predictions tool to analyze the potential of potential coins.
            Continue to promote the market and launch potential products towards the future.
          </RoadmapItem>
        </div>
      </div>
    </section>
  );
};

const RoadmapItem = ({ img, title, children }) => {
  return (
    <div className="relative p-5 item-roadmap">
      <span className="relative flex justify-center w-full text-center roadmap-icon mb-[58px]">
        <img src={img} alt="" className="logo-img" />
      </span>
      <div className="relative w-full h-10 mt-5 roadmap-line"></div>
      <div className="item-roadmap-content">
        <h3 className="text-center p-[10px] bg-[#e2b62c] text-[22px] font-bold rounded mb-2">
          {title}
        </h3>
        <div className="roadmap-text text-[#848e9c] text-xl text-center">{children}</div>
      </div>
    </div>
  );
};

export default Roadmap;
