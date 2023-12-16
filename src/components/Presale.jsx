import t1 from "../assets/t1.png";

const Presale = () => {
  return (
    <section className="lg:px-3">
      <div className="py-20 px-[10px] lg:p-20 bg-[#1e2329] flex justify-center">
        <div className="flex xl:max-w-[1140px] 2xl:max-w-[1320px] w-full px-3 gap-5 lg:gap-24 flex-wrap">
          <div>
            <img
              src={t1}
              alt=""
              className="w-full lg:w-[320px] xl:w-[425px] 2xl:w-[525px] rounded-[20px]"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="mb-10 text-[35px] lg:text-[50px] font-medium">Buy in Presale</h2>
            <p className="text-xl">
              When purchasing SPT in this previous sale, you will receive the lowest price before it
              is publicly announced. The price of SPT will increase to
              <span className="text-[#e2b62c] font-bold"> $0.1 on February 16, 2024</span>, on Mexc,
              Pancakeswap, and Bitmart exchanges.
            </p>
            <button className="mt-5 bg-[#dfb53e] font-bold py-[10px] px-[30px] rounded-md text-black">
              Buy SPT tokens now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
