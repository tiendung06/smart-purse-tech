import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const Team = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full xl:max-w-[1140px] 2xl:max-w-[1320px] px-3 mb-[90px] text-center text-white">
        <h2 className="lg:text-[50px] text-[35px] mb-[85px] font-bold">Our Team</h2>
        <div className="grid lg:grid-cols-3 gap-y-5">
          <div className="w-full">
            <div className="flex justify-center mb-5">
              <img
                src={team1}
                alt=""
                className="object-cover w-[180px] h-[180px] rounded-full border-2 border-[#fac044]"
              />
            </div>
            <h3 className="mb-2 font-medium text-[28px]">Mihai Ciutureanu</h3>
            <span>CEO</span>
            <p className="py-[10px] px-[30px] text-[#848e9c]">
              Mihai, a proficient CEO, brings forth a wealth of experience in the realm of digital
              marketing. Leading a digital agency that partnered with esteemed brands, he has
              developed a profound comprehension of the challenges and requisites encountered by
              modern businesses within the digital sphere.
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-center mb-5">
              <img
                src={team2}
                alt=""
                className="object-cover w-[180px] h-[180px] rounded-full border-2 border-[#fac044]"
              />
            </div>
            <h3 className="mb-2 font-medium text-[28px]">Anita Nitulescu</h3>
            <span>Marketing Manager</span>
            <p className="py-[10px] px-[30px] text-[#848e9c]">
              Anita, a skilled video director, possesses an ardent storytelling flair and a robust
              marketing background. Having collaborated with esteemed brands such as Emporio Armani
              and BMW, she boasts a demonstrable history of producing top-tier, influential content.
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-center mb-5">
              <img
                src={team3}
                alt=""
                className="object-cover w-[180px] h-[180px] rounded-full border-2 border-[#fac044]"
              />
            </div>
            <h3 className="mb-2 font-medium text-[28px]">Dan Larimer</h3>
            <span>Blockchain Developer</span>
            <p className="py-[10px] px-[30px] text-[#848e9c]">
              Through his roles at EOS and Steemit, Dan Larimer contributed significantly to the
              development of high-throughput blockchain platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
