// import React from 'react';
// import "../App.css";
// import Modal from "react-modal";
// import ProjectModal from '../modal/ProjectModal';
// import { useState, useEffect } from 'react';


// const Project = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [closeModal, setCloseModal] = useState(false);

//   /**
//    *open modal 
//    * image on the left
//    * project title
//    * desctiption
//    * product requirement document
//    * architectural design system
//    * 2 github link
//    * 1 video link
//    * live demo link
//    */


//   const projects = [
//     {
//       title: 'Office Request Management Tool',
//       description: 'Description for Project 1',
//       imageSrc: 'project1.jpg', 
//       link: "",
//     },
//     {
//       title: 'Linkedln Post Scheduler',
//       description: 'Description for Project 2',
//       imageSrc: 'project2.jpg', 
//       link: "",
//     },
//     {
//       title: 'Escrow Service',
//       description: 'Description for Project 2',
//       imageSrc: 'project2.jpg', 
//       link: "",
//     },
//   ];

//   return (
//     <div className="container text-center mt-5">
//       <div>
//         <h1 className="text-white fw-bold fs-1 mb-4 text-center align-items-center">My Portfolio</h1>
//         <p className="text-white align-items-center">
//           I am a skilled and passionate web designer with experience in creating
//           visually appealing and user-friendly websites. I have a strong understanding of design
//           and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well
//           as design software such as Adobe Photoshop and Illustrator.
//         </p>
//       </div>

//       <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
//         {projects.map((project, index) => (
//           <div key={index} className="col">
//             <div className="card project-card" onClick={() => setIsModalOpen(!isModalOpen)}>
//               <img src={project.imageSrc} className="card-img-top" alt={project.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{project.title}</h5>
//                 <p className="card-text">{project.description}</p>
//               </div>
//             </div>

//             {isModalOpen && (
//           <ProjectModal isModalOpen={isModalOpen} closeModal={closeModal} project={project}/>
//         )}
//           </div>
//         ))}

        
//       </div>
//     </div>
//   );
// };

// export default Project;



import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjectModal from '../modal/ProjectModal';

const modalStyles = {
  content: {
    width: '50%',
    height: '80%',
    top: '50%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#27272A',
    borderRadius: '5%',
  },
};

const Project = () => {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);

  const projects = [
    {
      title: 'Office Request Management Tool',
      description: 'Description for Project 1',
      imageSrc: 'project1.jpg',
      link: '',
    },
    {
      title: 'Linkedln Post Scheduler',
      description: 'Description for Project 2',
      imageSrc: 'project2.jpg',
      link: '',
    },
    {
      title: 'Escrow Service',
      description: 'Description for Project 3',
      imageSrc: 'project3.jpg',
      link: '',
    },
  ];

  const openModal = (index) => {
    setModalOpenIndex(index);
  };

  const closeModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <div className="container text-center mt-5">
      <div>
        <h1 className="text-white fw-bold fs-1 mb-4 text-center align-items-center">My Portfolio</h1>
        <p className="text-white align-items-center">
          I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly
          websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and
          JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="col">
            <div className="card project-card" onClick={() => openModal(index)}>
              <img src={project.imageSrc} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
            {modalOpenIndex === index && (
              <Modal isOpen={modalOpenIndex === index} onRequestClose={closeModal} style={modalStyles}>
                <div className="d-flex justify-content-end">
                  <FontAwesomeIcon icon={faTimes} onClick={closeModal} className="text-dark cursor-pointer" />
                </div>
                <ProjectModal project={project} />
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
