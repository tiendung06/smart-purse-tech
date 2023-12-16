import Benefit from "../components/Benefit";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Presale from "../components/Presale";
import Product from "../components/Product";
import Question from "../components/Question";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";

const Home = () => {
  return (
    <div className="bg-[#181a20]">
      <Header />
      <Hero />
      <Benefit />
      <Presale />
      <Product />
      <Roadmap />
      <Tokenomics />
      <Team />
      <Question />
      <footer className="py-5 text-center text-white">
        <p>© 2023 Smart Purse Tech, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
