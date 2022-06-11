import React from "react";
import cover from "../assets/aboutcover.jpg";
const About = () => {
  return (
    <div className="text-white -mx-2 mb-20">
      <div>
        <img className="z-0" src={cover} />
      </div>
      <div className="z-10 -mt-20 my-20 md:-mt-52 font-bold text-4xl md:text-8xl  drop-shadow-xl opacity-75">
        hello there!
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 mx-2">
        <div className="col-span-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          explicabo fugiat neque veniam a repellendus facilis quaerat amet
          atque! Officia perferendis rem sapiente necessitatibus eaque ratione
          autem numquam eius magnam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium magnam, recusandae laboriosam, placeat
          aliquid commodi facere atque dolorum eligendi, quod consectetur iusto.
          Possimus sit qui autem non vitae quia accusantium.
        </div>
        <div className="col-span-1 "></div>
      </div>
    </div>
  );
};

export default About;
