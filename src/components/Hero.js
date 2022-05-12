import { Emoji, EmojiProvider } from "react-apple-emojis";
import emojiData from "../assets/data.json";
import TypeAnimation from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className="h-full lg:p-12 p-16">
        <div className="lg:text-[5rem] md:text-[2rem] text-[2rem] flex flex-col lg:items-start items-center font-bold">
          <div className="flex ">
            <p className="text-heroArrow ">&lt;</p>
            <p className="text-heroText ">Hello 👋</p>
            <p className="text-heroArrow">/&gt;</p>
          </div>
          <div className="flex">
            <p className="text-heroArrow ">&lt;</p>
            <div className="flex">
              <p className="text-paleWhite ">I'm</p>&nbsp;
              <div className="flex text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-purple-800"
              >
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
      </div>
    </>
  );
};

export default Hero;
