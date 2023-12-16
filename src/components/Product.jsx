import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.jpg";

const Product = () => {
  return (
    <section className="flex justify-center pt-[50px]">
      <div className="w-full xl:max-w-[1140px] 2xl:max-w-[1320px] px-3">
        <ProductItem image={p1} title="SPT Exchange (DEX)">
          The development of a DEX platform is aimed at providing customers with an environment that
          ensures convenient, secure, and transparent exchanges of various cryptocurrencies at
          minimal transaction costs. This platform utilizes blockchain technology and smart
          contracts to enable direct peer-to-peer transactions, eliminating intermediaries and
          fostering a secure and transparent exchange process. By implementing robust security
          measures, maintaining transparency in transactional activities, and minimizing transaction
          fees, the platform aims to prioritize customer safety, trust, and affordability in the
          cryptocurrency exchange ecosystem.
        </ProductItem>
        <ProductItem image={p2} title="SPT's NFT Marketplace">
          The SPT NFT marketplace enables users to creatively craft their own NFTs. They can trade,
          buy, and sell, aiming to profit within the SPT NFT marketplace.
        </ProductItem>
        <ProductItem image={p3} title="SPT Predictions">
          SPT Predictions leverages AI technology to develop an application forecasting prices
          across various types of digital assets and diverse stocks. Our platform utilizes
          artificial intelligence to generate predictions, offering insights into the potential
          prices of different cryptocurrencies and stocks, empowering users to make informed
          investment decisions.
        </ProductItem>
      </div>
    </section>
  );
};

const ProductItem = ({ image, title, children }) => {
  return (
    <div className="relative p-[30px] mb-[50px] w-full border rounded-xl border-[#fcd535]">
      <div className="flex flex-wrap justify-between gap-5 lg:gap-14">
        <div className="">
          <img src={image} alt="" className="w-full max-w-[500px] rounded-xl" />
        </div>
        <div className="flex-1">
          <h3 className="mb-6 text-white text-[28px] lg:text-[42px] font-medium">{title}</h3>
          <p className="text-[#848E9C] leading-7">{children}</p>
        </div>
      </div>
      <div className="absolute right-0 p-3 font-bold top-4 tag">Coming soon</div>
    </div>
  );
};

export default Product;
