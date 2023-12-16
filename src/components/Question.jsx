import { useState } from "react";
import support from "../assets/support.png";

const Question = () => {
  return (
    <section className="lg:px-3">
      <div className="py-[100px] bg-[#1e2026] flex justify-center">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] w-full px-3 gap-24">
          <h2 className="text-[35px] lg:text-[55px] mb-[50px] font-medium text-white">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap justify-between w-full">
            <div className="w-full lg:max-w-[770px]">
              <Collapse question="What is SPT system?">
                SPT is a smart e-wallet system built on the Binance Smart Chain platform to meet
                users&apos; transaction needs in a safe and transparent way.
              </Collapse>
              <Collapse question="Benefits of trading with SPT?">
                Using SPT to pay, users will receive many benefits such as: Safety and security when
                making transactions, high percentage discounts when using applications of the SPT
                system
              </Collapse>
              <Collapse question="When will SPT be released and where can I buy it?">
                SPT will be released in December 2023 and users can buy it at martpursetech.com
              </Collapse>
              <Collapse question="Products in the SPT ecosystem?">
                DEX exchange, Marketplace NFT, SPT Predictions tool...
              </Collapse>
            </div>
            <div className="flex justify-center h-full">
              <img src={support} alt="" className="w-[350px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Collapse = ({ question, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-5 rounded-md bg-[#181a20] cursor-pointer w-full"
      onClick={() => setOpen(!open)}
    >
      <div className="py-[9px] px-[15px] flex justify-between">
        <p className="font-bold text-white">{question}</p>
        {!open && (
          <span className="flex items-center justify-center w-5 h-5 font-bold text-white">+</span>
        )}
        {open && (
          <span className="flex items-center justify-center w-5 h-5 font-bold bg-[#fcd535] rounded-full">
            -
          </span>
        )}
      </div>
      {open && <div className="py-[9px] px-[15px] text-[#848e9c]">{children}</div>}
    </div>
  );
};

export default Question;
