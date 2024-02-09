import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

import SDImage from "../images/png/svg.png";
import WDImage from "../images/png/graphic-designer.png";
import DOImage from "../images/png/agile.png";
import PMImage from "../images/png/planning (1).png";

const About = () => {
  const [isSDExpanded, setSDIsExpanded] = useState(false);
  const [isWDExpanded, setWDIsExpanded] = useState(false);
  const [isDOExpanded, setDOIsExpanded] = useState(false);
  const [isPMExpanded, setIsPMExpanded] = useState(false);


  const softwareDevelopmentSkills = ['Java', 'Spring Boot', 'Node.js', 'Python'];
  const apiBackendSkills = ['RESTful API Design', 'Database Management'];
  const unitTestingSkills = ['JUnit', 'Mocha', 'Chai', 'Jest'];
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'];



  return (
    <div className="container text-center mt-5">
      <h1 className="text-white fw-bold fs-1 mb-5 text-center align-items-center">What I do</h1>
      <p className="text-white fw-lighter align-items-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
        I am a Software Engineer passionate about writing clean and reusable code. I have sufficient skills
        to build API for backend technologies while also advocating for writing unit tests for all functionalities.
        I also have experience with frontend technologies. I have a strong understanding of design and a keen eye for detail.
        Having led teams before, my leadership style emphasizes collaboration, innovation, and a shared commitment to excellence.
        I am particularly passionate about Software Development and DevOps, where I see immense potential for making a positive impact.
        
      </p>

      <div style={{ maxWidth: "800px" }} className='mx-auto text-light align-items-center'>
        <div className='accordion'>
          <div className='accordion-item mb-3'>
            <div className='accordion-header' style={{ height: "80px" }} onClick={() => setSDIsExpanded(!isSDExpanded)}>
              <img src={SDImage} alt='No Img' style={{ width: "5%", marginRight: '15px' }} className='me-4'/>
              <h5>Software Development</h5>
              <FontAwesomeIcon icon={isSDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isSDExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                <SkillsList skills={softwareDevelopmentSkills} />
                </div>
              </div>
            )}
          </div>

          <div className='accordion-item mb-3'>
            <div className='accordion-header' style={{ height: "80px" }} onClick={() => setWDIsExpanded(!isWDExpanded)}>
              <img src={WDImage} alt='No Img' style={{ width: "5%" }} className='me-4' />
              <h5>Website Design</h5>
              <FontAwesomeIcon icon={isWDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isWDExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                <SkillsList skills={frontendSkills} />
                </div>
              </div>
            )}
          </div>

          <div className='accordion-item mb-3'>
            <div className='accordion-header' style={{ height: "80px" }} onClick={() => setDOIsExpanded(!isDOExpanded)}>
              <img src={DOImage} alt='No Img' style={{ width: "5%" }} className='me-4'/>
              <h5>Development & Operations (Devops)</h5>
              <FontAwesomeIcon icon={isDOExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isDOExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                  Additional content for Software Development
                </div>
              </div>
            )}
          </div>

          <div className='accordion-item mb-10'>
            <div className='accordion-header' style={{ height: "80px" }} onClick={() => setIsPMExpanded(!isPMExpanded)}>
              <img src={PMImage} alt='No Img' style={{ width: "5%" }} className='me-4'/>
              <h5>Project Management</h5>
              <FontAwesomeIcon icon={isPMExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isPMExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                  Additional content for Software Development
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

const SkillsList = ({ skills }) => (
  <ul>
    {skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
);