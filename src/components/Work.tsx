import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Project One",
    category: "Web Development",
    tools: "JavaScript, TypeScript, React, Three.js",
    image: "/images/project1.webp",
  },
  {
    name: "Project Two",
    category: "Automation",
    tools: "Python, Selenium, BeautifulSoup",
    image: "/images/project2.webp",
  },
  {
    name: "Project Three",
    category: "Data Analysis",
    tools: "Python, Pandas, Matplotlib",
    image: "/images/project3.webp",
  },
  {
    name: "Project Four",
    category: "Full-Stack",
    tools: "Django, React, PostgreSQL",
    image: "/images/project4.webp",
  },
  {
    name: "Project Five",
    category: "Machine Learning",
    tools: "Python, TensorFlow, Scikit-learn",
    image: "/images/project5.webp",
  },
  {
    name: "Project Six",
    category: "API Development",
    tools: "FastAPI, Docker, Redis",
    image: "/images/project6.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
        {projects.map((project, index) => (
        <div className="work-box" key={index}>
          <div className="work-info">
            <div className="work-title">
              <h3>0{index + 1}</h3>
              <div>
                <h4>{project.name}</h4>
                <p>{project.category}</p>
              </div>
            </div>
            <h4>Tools and Features</h4>
            <p>{project.tools}</p>
          </div>
          <WorkImage image={project.image} alt={project.name} />
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
