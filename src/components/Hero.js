import TypeAnimation from "react-type-animation";
import pro from "../assets/pro.jpg";
const Hero = () => {
  return (
    <>
      <div className="h-screen lg:p-12 p-16 ">
        <div className="grid md:grid-cols-2 justify-center">
          {/* Animated Section */}
          <div className="w-max lg:text-[5rem] md:text-[2rem] text-[2rem] flex flex-col md:flex md:justify-center lg:items-start items-center font-bold md:order-none order-1 mt-5">
            <div className="flex">
              <p className="text-heroArrow ">&lt;</p>
              <p className="text-heroText ">Hello 👋</p>
              <p className="text-heroArrow">/&gt;</p>
            </div>
            <div className="flex">
              <p className="text-heroArrow ">&lt;</p>
              <div className="flex">
                <p className="text-paleWhite ">I'm</p>&nbsp;
                <div className="flex text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-purple-800">
                  <TypeAnimation
                    className="whitespace-nowrap "
                    cursor={true}
                    sequence={[
                      "Bappaditya.",
                      1000,
                      "a Designer",
                      1000,
                      "a Developer",
                      1000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                  />
                </div>
              </div>
              <p className="text-heroArrow">/&gt;</p>
            </div>
          </div>

          {/* Image Section */}
          <div className=" md:ml-40 md:justify-end md:mr-2 flex justify-center items-center">
              <img className="h-36 md:h-80 rounded-full" src={pro} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
