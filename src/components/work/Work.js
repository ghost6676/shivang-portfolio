import "./work.css";
import Image from "next/image";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";

export default function Work() {
  return (
    <div className="work mainbox">
      <a
        href="https://www.behance.net/gallery/205072161/Stack-Mobile-App-UX-Case-Study"
        target="_blank"
      >
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
      </a>
      <a href="/notedown">
        <div className="work-box project2">
          <div className="work-box-text">
            <div className="inner-text">
              <div className="work-label">
                <p className="label-text purple">Web Design</p>
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
      <a href="/sitar-classes">
        <div className="work-box project3">
          <div className="work-box-text">
            <div className="inner-text">
              <div className="work-label whitebg">
                <p className="label-text black">Web Design</p>
              </div>
              <h2 className="work-heading white">Ratna Lahiri Sitar</h2>
              <p className="work-subtext white">
                Landing page and Website Design
              </p>
            </div>
          </div>
          <div className="work-box-img">
            <Image className="project-image" src={project3} alt="image" />
          </div>
        </div>
      </a>
    </div>
  );
}
