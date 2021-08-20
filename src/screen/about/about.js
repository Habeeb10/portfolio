import lines from "../../../src/assets/images/lines.svg";
import "./about.css";

const About = () => {
  return (
    <div className="aboutcontainer">
      <h1 className="about">About</h1>
      <img src={lines} alt="line" className="line" />
      <div className="secondcontainer">
        <div className="tijani">
          <h1 className="myname">Tijani Habeeb Opeyemi</h1>
          <h6 className="aboutme" aboutme>
            I’m a cross-platform mobile application developer, with a
            superfluity of qualitative experience in the area of architecting
            and designing complex as well as robust mobile application and
            services. I’m exceptionally fast in learning, also open to new
            ideas, a good team player, resourceful problem solver, well grounded
            in communication and interaction. Attention to detail oriented
            personnel, and usability blending nicely with beautiful and modern
            aesthetics.
          </h6>
          <div>
            <a href="https://drive.google.com/file/d/1mPEr1SpKYgLnwCM5JjtDkGtMMbIUf9xN/view?usp=drivesdk">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
