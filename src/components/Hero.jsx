import { useEffect, useState } from "react";
import g3 from "../assets/g3.png";
import bn2 from "../assets/bn2.gif";
import bsc from "../assets/icon-bsc.svg";
import usdt from "../assets/icon-usdt.svg";

const Hero = () => {
  const [status, setStatus] = useState(true);
  const [countdown, setCountdown] = useState(36000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <section className="md:px-3" style={{ backgroundImage: `url(${bn2})` }}>
      <div className="pt-[90px] pb-[100px] flex justify-center">
        <div className="mt-[50px] flex xl:max-w-[1140px] 2xl:max-w-[1320px] w-full flex-wrap gap-y-8">
          <div className="px-3 max-w-[770px]">
            <h1 className="mb-[30px] text-[55px] text-white font-medium">
              <span className="text-[#ebb542] font-bold">Smart Purse Tech</span> all-in-one
            </h1>
            <p className="pr-20 mb-4 text-xl text-white">
              SPT provides users with intelligent and secure transaction methods. It offers smart
              AI-powered data analysis tools and serves as a solution for creators through its NFT
              marketplace.
            </p>
            <div className="mt-[50px]">
              <img src={g3} alt="" className="w-[500px]" />
            </div>
          </div>
          <div className="px-3 max-w-[550px] w-full text-white">
            <div className="w-full bg-[#e7b54e] rounded-t-[20px] text-center text-[22px] font-bold p-[15px]">
              <p className="text-black">BUY IN BEFORE PRICE INCREASES!</p>
            </div>
            <div className="bg-black rounded-b-[20px]">
              <p className="pt-4 text-center mb-[18px] text-xl">
                NEXT PRICE INCREASE TO $0.0134 IN
              </p>
              <div className="flex items-center justify-center text-xl font-bold text-center text-black h-11">
                <div className="py-[2px] px-[10px] bg-[#ff9f46] w-[60px] h-11 flex items-center justify-center rounded-md">
                  {hours}h
                </div>
                <span className="mx-4 text-white">:</span>
                <div className="py-[2px] px-[10px] bg-[#ff9f46] w-[60px] h-11 flex items-center justify-center rounded-md">
                  {minutes}m
                </div>
                <span className="mx-4 text-white">:</span>
                <div className="py-[2px] px-[10px] bg-[#ff9f46] w-[60px] h-11 flex items-center justify-center rounded-md">
                  {seconds}s
                </div>
              </div>
              <div className="mt-[17px] px-5">
                <p className="mb-4">Progress</p>
                <div className="w-full bg-[#9e9e9e] h-[15px] rounded-lg overflow-hidden mb-[10px]">
                  <span className="w-1/4 bg-[#ff9f46] block h-full rounded-[20px]"></span>
                </div>
                <div className="grid grid-cols-2">
                  <span>1145857.07 SPT</span>
                  <span className="text-end">4500000 SPT</span>
                </div>
              </div>
              <div className="mt-[25px] px-5 pb-5">
                <p className="relative mb-4 text-center tigia">
                  <span className="bg-[#191f34] inline-block px-5 relative z-10 rounded-sm text-center">
                    $0.01 = 1 SPT
                  </span>
                </p>
                <div className="grid w-full grid-cols-2 gap-4 mb-4">
                  <button
                    className="flex items-center justify-center h-10 px-4 py-1 font-bold text-black bg-[#e4b557] border-none rounded-sm outline-none"
                    onClick={() => setStatus(true)}
                  >
                    <img src={bsc} alt="" />
                    <span>BNB</span>
                  </button>
                  <button
                    className="flex items-center justify-center h-10 px-4 py-1 font-bold text-white bg-transparent border border-[#ffffff26] rounded-sm outline-none"
                    onClick={() => setStatus(false)}
                  >
                    <img src={usdt} alt="" />
                    <span>USDT</span>
                  </button>
                </div>
                <p className="mb-4 font-bold">Wallet Balance: 0 {status ? "BNB" : "USDT"}</p>
                <p className="mb-4 font-bold">
                  {status ? "BNB" : "USDT"} you pay
                  <span className="font-bold border border-[#ffffff26] py-[1px] px-[6px]">Max</span>
                </p>
                <input
                  type="text"
                  className="w-full h-[42px] py-[5px] px-[10px] outline-none border mb-4 rounded-sm border-white bg-transparent"
                  placeholder="0"
                />
                <p className="mb-4 font-bold">Receive SPT you receive</p>
                <input
                  type="text"
                  className="w-full h-[42px] py-[5px] px-[10px] outline-none border mb-4 rounded-sm border-white bg-transparent"
                  placeholder="0"
                />
                <button className="w-full font-bold text-black bg-white rounded-md h-[46px]">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
