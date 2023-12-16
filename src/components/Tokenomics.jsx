import chart from "../assets/chart.png";

const Tokenomics = () => {
  return (
    <section className="flex justify-center px-[10px] lg:px-0">
      <div className="w-full mb-20 xl:max-w-[1140px] 2xl:max-w-[1320px] bg-[#1e2329] rounded-[10px] p-5 lg:p-[60px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full 2xl:max-w-[700px] max-w-[590px] flex justify-center">
            <img src={chart} alt="" className="w-[420px]" />
          </div>
          <div className="text-white">
            <h2 className="lg:text-[50px] text-[35px] mb-[35px] font-medium">Tokenomics</h2>
            <ul className="text-xl">
              <li className="mb-[15px] flex items-center gap-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#c471ed]"></span>
                <span>PreSale (10%)</span>
              </li>
              <li className="mb-[15px] flex items-center gap-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#0097B2]"></span>
                <span>Founding Team (15%)</span>
              </li>
              <li className="mb-[15px] flex items-center gap-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#FF5E8E]"></span>
                <span>Exchange Listings and Investors (35%)</span>
              </li>
              <li className="mb-[15px] flex items-center gap-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#004AAD]"></span>
                <span>Development (15%)</span>
              </li>
              <li className="mb-[15px] flex items-center gap-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#FFB782]"></span>
                <span>Community (25%)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
