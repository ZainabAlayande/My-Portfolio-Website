import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
import SDImage from "../images/png/svg.png";
import WDImage from "../images/png/graphic-designer.png";
import DOImage from "../images/png/agile.png";
import PMImage from "../images/png/planning (1).png";
import { backendSkills,react,scripting,softSkills,spring,strategy,database,devops,
  frontend,frontendSkills,others,containerization,productManagement } from '../utils/Constant';
const About = () => {
  const [isSDExpanded, setSDIsExpanded] = useState(false);
  const [isWDExpanded, setWDIsExpanded] = useState(false);
  const [isDOExpanded, setDOIsExpanded] = useState(false);
  const [isPMExpanded, setIsPMExpanded] = useState(false);


  return (
    <div className="container text-center mt-5">
      <h1 className="text-white fw-bold fs-1 mb-5 text-center align-items-center">About Me</h1>
      <p className="text-white fw-lighter align-items-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
        I am a <span className="text-warning fw-bold">Software Engineer </span> passionate about writing clean and reusable code. I have sufficient skills
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
              <h5>Backend Technology</h5>
              <FontAwesomeIcon icon={isSDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isSDExpanded && (
              <div className='accordion-collapse '>
                <div className='mt-2 mb-3 accordion-body d-flex flex-row justify-content-center'>
                
                <div className="w-25">
                <SkillsList skills={backendSkills} />
                </div>
                
                <div className="w-25">
                <SkillsList skills={spring} />
                </div>

                <div className="w-25">
                <SkillsList skills={database} />
                </div>

                <div className="w-25">
                <SkillsList skills={others }/>
                </div>
                
               

                </div>
              </div>
            )}
          </div>

          <div className='accordion-item mb-3'>
            <div className='accordion-header' style={{ height: "80px" }} onClick={() => setWDIsExpanded(!isWDExpanded)}>
              <img src={WDImage} alt='No Img' style={{ width: "5%" }} className='me-4' />
              <h5>Frontend Technology</h5>
              <FontAwesomeIcon icon={isWDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isWDExpanded && (
              <div className='accordion-collapse'>
                <div className='mb-3 mt-2 accordion-body d-flex flex-row'>

                <div className="w-25">
                <SkillsList skills={frontendSkills }/>
                </div>

                <div className="w-25">
                <SkillsList skills={frontend }/>
                </div>

                <div className="w-25">
                <SkillsList skills={react }/>
                </div>
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
                <div className='mb-3 mt-2 accordion-body d-flex flex-row'>
                 
                <div className="w-25">
                <SkillsList skills={devops }/>
                </div>

                <div className="w-25">
                <SkillsList skills={containerization }/>
                </div>

                <div className="w-25">
                <SkillsList skills={scripting }/>
                </div>
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
                <div className='mt-2 mb-3 accordion-body d-flex flex-row'>
                 
                <div className="w-25">
                <SkillsList skills={productManagement }/>
                </div>

                <div className="w-25">
                <SkillsList skills={strategy }/>
                </div>

                <div className="w-25">
                <SkillsList skills={softSkills }/>
                </div>

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
      <li className='fw-bold' key={index}>{skill}</li>
    ))}
  </ul>
);