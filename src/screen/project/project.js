import "./project.css";
import lines from "../../../src/assets/images/lines.svg";
import donor from "../../../src/assets/images/donor.png";
import food from "../../../src/assets/images/food.png";
import anime from "../../../src/assets/images/anime.png";
import train from "../../../src/assets/images/train.png";

const Project = () => {
  return (
    <div>
      <div className="maincontainer">
        <h3 className="industry">Recent Projects</h3>
        <img src={lines} alt="line" className="line" />
      </div>
      <div className="projectcontainer1">
        <img src={donor} alt="line" className="image" />
        <div>
          <h1 className="donor">Blood Donor App</h1>
          <h3 className="platform">
            A platform for Blood test, Donation, and Genotype test.
          </h3>
          <h3 className="platform">Designed by Tijani Habeeb.</h3>
          <div>
            <a
              href="https://github.com/habeeb10/DonorApp"
              class="sim-btn btn-hover-new"
              data-text="REPOSITORY"
            >
              <span>REPOSITORY</span>
            </a>
          </div>
        </div>
      </div>
      <div className="projectcontainer2">
        <img src={train} alt="line" className="image" />
        <div>
          <h1 className="donor">Train Ticket App</h1>
          <h3 className="platform">A platform for Booking Train Ticket.</h3>
          <a
            href="https://github.com/habeeb10/TrainTicketApp"
            class="sim-btn btn-hover-new"
            data-text="REPOSITORY"
          >
            <span>REPOSITORY</span>
          </a>
        </div>
      </div>
      <div className="projectcontainer3">
        <img src={food} alt="line" className="image" />
        <div>
          <h1 className="donor"> Simple Food App</h1>
          <h3 className="platform">
            A Simple Food App that comprises of various Food types .
          </h3>
          <a
            href="https://github.com/habeeb10/foodApp"
            class="sim-btn btn-hover-new"
            data-text="REPOSITORY"
          >
            <span>REPOSITORY</span>
          </a>
        </div>
      </div>
      <div className="projectcontainer4">
        <img src={anime} alt="line" className="image" />
        <div>
          <h1 className="donor">A Video App</h1>
          <h3 className="platform">
            A Video App using an API that fetches latest updates (episodes,
            title, images) and a web view on any Japanese Anime video
          </h3>
          <a
            href="https://github.com/habeeb10/ChallengeApp"
            class="sim-btn btn-hover-new"
            data-text="REPOSITORY"
          >
            <span>REPOSITORY</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
