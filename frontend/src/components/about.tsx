import React from "react";
import g2 from "../assets/g2.jpg";
import g5 from "../assets/g5.jpg";

interface CSSVar extends React.CSSProperties {
  "--url"?: string;
}

const About = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-4"></section>
      <div className="banner">
        <div className="product">
          <div
            className="soda"
            style={{ "--url": `url(${g2})` } as CSSVar}
          ></div>

          <div
            className="soda soda-faded"
            style={{ "--url": `url(${g5})` } as CSSVar}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
