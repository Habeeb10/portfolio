import "./home.css";
import habeeb from "../../../src/assets/images/habeeb.jpeg";
const Home = () => {
  return (
    <div id="home">
      <div className="maincontainer">
        <div className="container">
          <h1 className="habeeb">opeyemi</h1>
          <div>
            <h1 className="frontend">
              Frontend <br /> Developer.
            </h1>
            <h1 className="user">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </h1>
          </div>
          <div className="imagecontainer">
            <div className="imagebox">
              <img src={habeeb} alt="habeebphoto" className="habeebimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<nav class="kfDSgG" aria-label="Main navigation." id="section-nav">
  <ul className="ullist">
    <li className="list">
      <button type="button" aria-label="Home." class="nav-bullet"></button>
    </li>
    <li>
      <button type="button" aria-label="About" class="nav-bullet"></button>
    </li>
    <li>
      <button
        type="button"
        aria-label="Knowledge"
        class="nav-bullet current"
      ></button>
    </li>
  </ul>
</nav>;

export default Home;
