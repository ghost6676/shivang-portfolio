import "./work.css";
import Image from "next/image";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.png";

export default function Work() {
  return (
    <div className="work mainbox">
      <div className="work-box">
        <div className="work-box-text">
          <div className="inner-text">
            <div className="work-label">
              <p className="label-text">App design - personal project</p>
            </div>
            <h2 className="work-heading">Stack</h2>
            <p className="work-subtext">
              Redefining budgeting using real-time spending feedback.
            </p>
          </div>
        </div>
        <div className="work-box-img">
          <Image className="project-image" src={project1} alt="image" />
        </div>
      </div>
      <a href="/notedown">
        <div className="work-box project2">
          <div className="work-box-text">
            <div className="inner-text">
              <div className="work-label">
                <p className="label-text">Web Design</p>
              </div>
              <h2 className="work-heading">Notedown</h2>
              <p className="work-subtext">Brand Identity and Website Design</p>
            </div>
          </div>
          <div className="work-box-img">
            <Image className="project-image" src={project2} alt="image" />
          </div>
        </div>
      </a>
    </div>
  );
}
