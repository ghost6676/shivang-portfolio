import "./content.css";
import Image from "next/image";
import section2 from "../../../../../public/section2.png";
import persona1 from "../../../../../public/persona1.png";
import persona2 from "../../../../../public/persona2.png";
import sitemap from "../../../../../public/sitemap.png";
import rebrand from "../../../../../public/rebrand.png";
import websitedisplay from "../../../../../public/websitedisplay.png";

export default function Content() {
  return (
    <div className="content-container">
      <div className="stack-section section1">
        <div className="stack-textbox button-textbox">
          <div className="heading-box">
            <h2 className="stack-heading">
              ReBranding and Website Design for NoteDown
            </h2>
          </div>
          <div className="button-container">
            <a href="https://www.notedown.in/" target="_blank">
              <div className="site-button">
                <p className="site-button-text">Live Site</p>
                <Image src="/arrow.png" width="19" height="19" />
              </div>
            </a>
          </div>
        </div>
        <video
          className="section1-video"
          preload="none"
          autoPlay
          muted={true}
          loop
        >
          <source src="/medias/website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="stack-section section2">
        <div className="stack-textbox">
          <p className="stack-subtext">Introduction</p>
          <p className="stack-text">
            NoteDown films is a startup that aims to reimagine visual
            storytelling and bring a fresh approach to online content, be it
            social media, short filmns or theatre. The company wanted a website
            that would help them get clients for their social media services and
            would also appeal to their general audience interested in cinemam,
            all while positioning them as &ldquo;The future of content
            production&rdquo;.
          </p>
          <div className="intro-box">
            <div className="intro-box-inner">
              <p className="intro-subtext">My Role</p>
              <p className="intro-text">
                Product Designer, Research,
                <br /> Branding, Prototyping
              </p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">The Team</p>
              <p className="intro-text">1 Designer, a team of developers</p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">Timeline</p>
              <p className="intro-text">4 weeks</p>
            </div>
          </div>
        </div>
        <Image className="section2-img" src={section2} alt="image" />
      </div>
      <div className="stack-section section3">
        <div className="stack-textbox">
          <p className="stack-subtext">Problem Statement</p>
          <h2 className="stack-heading">
            Existing Website and Brand were not portraying values and generating
            leads.
          </h2>
        </div>
      </div>
      <div className="stack-section-minor section4">
        <div className="stack-textbox">
          <p className="stack-subtext">Project Requirement Scope</p>
          <p className="stack-text short">
            Working with the founder, we defined the project goal of
            repositioning NoteDown for better customer alignment.
          </p>
        </div>
        <div className="section4-graphic">
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">Business Objectives</p>
            <p className="inner-text">
              <ul>
                <li>Generate new leads/reach-outs</li>
                <li>Increase service conversion rates</li>
              </ul>
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">Constraints</p>
            <p className="inner-text">
              <ul>
                <li>Restricted launch timelines</li>
                <li>Existing brand guidelines</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="stack-section-minor section5">
        <div className="stack-textbox">
          <p className="stack-subtext">Defining Target Audience</p>
          <p className="stack-text short">
            We made 2 personas representing the varied audience that we needed
            to cater to.
          </p>
        </div>
        <div className="section5-graphic">
          <div className="section5-graphic-innerbox">
            <div className="persona-name-box">
              <div className="persona-img-box">
                <Image className="persona-img" src={persona1} alt="image" />
              </div>
              <div className="perosna-name-text-box">
                <p className="persona-heading">Rahul</p>
                <p className="persona-subheading">Clients</p>
              </div>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">about</p>
              <p className="persona-inner-text">
                Company/Startup owners looking for someone to manage their
                social media to generate leads/increase sales.
              </p>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">needs</p>
              <p className="persona-inner-text">
                An easy and trustworthy solution to handle social media content
                production.
              </p>
            </div>
          </div>
          <div className="section5-graphic-innerbox">
            <div className="persona-name-box">
              <div className="persona-img-box">
                <Image className="persona-img" src={persona2} alt="image" />
              </div>
              <div className="perosna-name-text-box">
                <p className="persona-heading">Anshika</p>
                <p className="persona-subheading">Casual Browsers</p>
              </div>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">about</p>
              <p className="persona-inner-text">
                Young audience mainly drawn by social media. Interested in
                cinema and video production.
              </p>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">needs</p>
              <p className="persona-inner-text">
                Browse interesting content on cinema. Participate in events and
                competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="stack-section-minor section5">
        <div className="stack-textbox">
          <p className="stack-subtext">Site Mapping</p>
          <p className="stack-text">
            Deciding and organizing the content structure of the website.
          </p>
        </div>
        <div className="section6-graphic">
          <Image className="sitemap-img" src={sitemap} alt="image" />
        </div>
      </div>
      <div className="stack-section section6">
        <div className="stack-textbox">
          <p className="stack-subtext">Proposed Solution</p>
          <h2 className="stack-heading">
            A Brand and Website refresh to define a new approach for
            NoteDown&#39;s positioning and services.
          </h2>
        </div>
      </div>
      <div className="stack-section-minor section7">
        <div className="stack-textbox">
          <p className="stack-subtext">ReBranding</p>
        </div>
        <div className="section6-graphic">
          <Image className="rebrand-img" src={rebrand} alt="image" />
        </div>
        <div className="stack-textbox">
          <p className="stack-subtext">NoteDown Website</p>
        </div>
        <div className="section7-graphic">
          <Image className="rebrand-img" src={websitedisplay} alt="image" />
        </div>
      </div>
      <div className="stack-section-minor section8">
        <div className="stack-textbox ">
          <p className="stack-subtext">Project Outcomes</p>
          <p className="stack-text short">
            Leads through website increased by 200%
          </p>
        </div>
        <div className="section4-graphic res900">
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">
              200% increase in leads within 2 weeks of launch.
            </p>
            <p className="inner-text">
              NoteDown saw a direct increase in clients inquiring about their
              services through the website.
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">45% NPS increase after launch</p>
            <p className="inner-text">
              Direct improvement in brand perception and positive response from
              the target audience.
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">
              Greater brand awareness and discoverability
            </p>
            <p className="inner-text">
              NoteDown website visitors saw a wider variety of demographics from
              clients, to theatre students, and video content enthusiasts.
            </p>
          </div>
        </div>
      </div>
      <div className="stack-section-minor section9">
        <div className="stack-textbox">
          <p className="stack-subtext">Next Steps</p>
          <p className="stack-text short">
            Given less timeline and budget restrictions, the project could be
            furthur refined by utilising a bigger research group
          </p>
        </div>
        <div className="section9-graphic">
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">01</p>
            <p className="inner-text">
              Add social proof in the form of testimonials and projects to
              improve lead generation and conversion rate.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">02</p>
            <p className="inner-text">
              Cater to a wider audience by adding content not directly aimed at
              lead-generation and service conversion.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">03</p>
            <p className="inner-text">
              Conduct better research and testing to furthur iterate and refine
              the structure, content and visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
