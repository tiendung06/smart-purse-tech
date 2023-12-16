import { Link } from "react-router-dom";
import spt from "../assets/spt.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center h-[116px] bg-[#181a20]">
      <div className="flex h-full justify-center items-center w-full xl:max-w-[1140px] 2xl:max-w-[1320px] px-6">
        <div className="flex items-center justify-center w-full lg:justify-between">
          <img src={spt} alt="" className="h-[90px]" />
          <nav className="justify-end hidden font-bold text-white lg:flex">
            <Link to="#" className="p-2 nav-link">
              Buy Now
            </Link>
            <Link to="#" className="p-2 nav-link">
              The benefits of using SPT
            </Link>
            <Link to="#" className="p-2 nav-link">
              Product
            </Link>
            <Link to="#" className="p-2 nav-link">
              Team
            </Link>
            <Link to="#" className="p-2 nav-link">
              Roadmap
            </Link>
            <Link to="#" className="p-2 nav-link">
              Coin Allocation
            </Link>
            <Link to="#" className="p-2 nav-link">
              Q&A
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
