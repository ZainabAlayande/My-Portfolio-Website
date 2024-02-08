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



  return (
    <div className="container text-center mt-5">
      <h1 className="text-white fw-bold fs-1 mb-4 text-center align-items-center">What I do</h1>
      <p className="text-white align-items-center">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong understanding of design
        and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well
        as design software such as Adobe Photoshop and Illustrator.
      </p>

      <div style={{ width: "80%" }} className='text-light align-items-center'>
        <div className='accordion'>
          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => setSDIsExpanded(!isSDExpanded)}>
              <img src={SDImage} alt='No Img' style={{ width: "5%" }} />
              <h5>Software Development</h5>
              <FontAwesomeIcon icon={isSDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isSDExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                  Additional content for Software Development
                </div>
              </div>
            )}
          </div>

          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => setWDIsExpanded(!isWDExpanded)}>
              <img src={WDImage} alt='No Img' style={{ width: "5%" }} />
              <h5>Website Design</h5>
              <FontAwesomeIcon icon={isWDExpanded ? faMinus : faPlus} className='me-2 ms-auto' />
            </div>
            {isWDExpanded && (
              <div className='accordion-collapse'>
                <div className='accordion-body'>
                  Additional content for Software Development
                </div>
              </div>
            )}
          </div>

          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => setDOIsExpanded(!isDOExpanded)}>
              <img src={DOImage} alt='No Img' style={{ width: "5%" }} />
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

          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => setIsPMExpanded(!isPMExpanded)}>
              <img src={PMImage} alt='No Img' style={{ width: "5%" }} />
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
