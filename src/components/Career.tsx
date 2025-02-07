import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                {/* <h5></h5> */}
              </div>
              <h4>2024-NOW</h4>
            </div>
            <p>
            Developed websites, provided custom automation scripts, and made Odoo-based solutions for clients. Worked with them to build applications and enhance digital efficiency across various domains.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>New Stance</h5>
              </div>
              <h4>2024</h4>
            </div>
            <p>
            Developed an automated influencer analytics dashboard and built RESTful APIs using Django and PostgreSQL to process user data efficiently. Created automation scripts with Selenium to enhance workflow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Finexos</h5>
              </div>
              <h4>NOW</h4>
            </div>
            <p>
            Led development of Finexos' platform using Django and React, enhancing user experience and accessibility. Designed responsive UI components. Managed an agile team of 4 to ensure timely delivery of assigned projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
