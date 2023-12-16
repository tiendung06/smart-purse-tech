const Benefit = () => {
  return (
    <section className="bg-[#181a20]">
      <div className="flex justify-center pb-20">
        <div className="w-full xl:max-w-[1140px] 2xl:max-w-[1320px] px-3">
          <h2 className="mt-20 mb-[100px] text-[35px] lg:text-[50px] font-medium text-center text-white">
            The benefits of using SPT
          </h2>
          <div className="grid text-white lg:grid-cols-2">
            <Item index="1" title="High Security Measures">
              The SPT wallet may offer robust security features such as strong encryption and
              additional protective mechanisms, ensuring users&apos; peace of mind regarding the
              storage and management of their SPT tokens.
            </Item>
            <Item index="2" title="Convenience and Easy Access">
              The SPT wallet might provide easy access and usability across different devices, such
              as mobile phones or computers, offering convenience to users.
            </Item>
            <Item index="3" title="Multi-Currency Management">
              SPT supports multiple cryptocurrencies, allowing users to manage not only SPT but also
              various other cryptocurrencies within the same platform.
            </Item>
            <Item index="4" title="Integration with the Ecosystem">
              Using SPT within the ecosystem enables users to easily connect diversely with various
              applications within the ecosystem quickly and cost-effectively. Users have the
              privilege to utilize transaction-supporting applications and earn profits from
              transactions within the SPT ecosystem.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
};

const Item = ({ index, title, children }) => {
  return (
    <div className="flex w-full gap-5 mb-[50px]">
      <div className="relative w-20 h-20 bg-[#e2b62c] rounded-full flex justify-center items-center text-4xl font-bold text-black">
        <div className="absolute bg-white w-[30px] h-[30px] -left-2 top-0 rounded-full"></div>
        <span>{index}</span>
      </div>
      <div className="flex-1 lg:pr-[50px]">
        <h3 className="text-[32px] text-[#e2b62c] font-medium mb-[10px]">{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Benefit;
