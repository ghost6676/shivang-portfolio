import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar mainbox">
      <a href="/">
        <h2 className="navbar-logo-text">Shivang Singh</h2>
      </a>
      <div className="navbar-links">
        <a href="#about">
          <p className="navbar-text select">About </p>
        </a>
        <a href="https://www.linkedin.com/in/shivang-singh077/" target="_blank">
          <div className="external-link">
            <p className="navbar-text">LinkedIn</p>
            <Image src="/arrow.png" width="19" height="19" />
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/18pNiYtc6qI4ND_PMHfg-9H-jU3RfkIOh/view?usp=drivesdk"
          target="_blank"
        >
          <div className="external-link">
            <p className="navbar-text">Resume</p>
            <Image src="/arrow.png" width="19" height="19" />
          </div>
        </a>
      </div>
    </div>
  );
}
