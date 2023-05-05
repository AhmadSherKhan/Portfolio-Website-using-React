import "./HeroStyle.css";
import img1 from "../assets/triangle.png";
import img2 from "../assets/graph.png";
const Hero = (props) => {
  return (
    <div className="hero">
      <img src={img2} alt="graph" className="graph" />
      <div className="left-text">
        <p className="sub-heading">Web Developer</p>
        <p className="heading">
          Hi I'm <span>Ahmad Sher</span>
        </p>
        <p className="text">
          Building innovative web solutions for your business Your partner in
          creating cutting-edge websites and web applications Transforming your
          ideas into digital reality
        </p>
        <button className="btn-main">Hire Me</button>
        <button className="btn-sec">Let's Connect</button>
      </div>
      <div className="image">
        <img src={props.image} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
