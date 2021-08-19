import lines from "../../../src/assets/images/lines.svg";
import "./knowledge.css";

const Knowledge = () => {
  return (
    <div className="industrycontainer">
      <h3 className="industryknowledge">Industry Knowledge</h3>
      <img src={lines} alt="line" className="line" />
      <div className="overallcontainer">
        <div className="knowledgecontainer">
          <h1 className="skillheader">Skills</h1>
          <h4 className="skill">
            • Excellent Knowledge of react and react native.
          </h4>
          <h5 className="skill">
            • HTML5, CSS3, SASS, JavaScript ES5, ES6, Typescript, ESlint.
          </h5>
          <h5 className="skill">• Proficiency in API integration</h5>
          <h5 className="skill">
            • Proficiency in use of version control and continuous integration
            tools e.g. Git.
          </h5>
          <h5 className="skill">
            • Proficiency in code debugging and performance Optimization.
          </h5>
          <h5 className="skill">
            • Efficient in use of IDE e.g Android Studio, WebStorm, VS Code
          </h5>
          <h5 className="skill">
            • Efficient know-how of Android SDK | Android XML
          </h5>
          <h5 className="skill">
            • Excellent communication and strong collaborative skills.
          </h5>
        </div>
        <div className="knowledgecontainer2">
          <h1 className="skillheader">Tools and Technologies</h1>
          <h4 className="skill2">• Git</h4>
          <h4 className="skill2">• Github,</h4>
          <h4 className="skill2">• Webstorm,</h4>
          <h4 className="skill2">• Android Studio,</h4>
          <h4 className="skill2">• Visual Studio code,</h4>
          <h4 className="skill2">• Terminal | bash | zsh</h4>
          <h4 className="skill2">• Android | iOS Simulator</h4>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
