import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar mainbox">
      <a href="/">
        <h2 className="navbar-logo-text">Shivang Singh</h2>
      </a>
      <div className="navbar-links">
        <a href="/#about">
          <p className="navbar-text">About </p>
        </a>
        <a href="https://www.linkedin.com/in/shivang-singh077/" target="_blank">
          <div className="external-link">
            <p className="navbar-text">LinkedIn</p>
            <Image src="/arrow-black.png" width="19" height="19" />
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1JdLVm8fFrYRyYtUxB5E2gDYInM5hBUW0/view?usp=sharing"
          target="_blank"
        >
          <div className="external-link">
            <p className="navbar-text">Resume</p>
            <Image src="/arrow-black.png" width="19" height="19" />
          </div>
        </a>
      </div>
    </div>
  );
}
