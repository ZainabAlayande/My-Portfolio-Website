import React from 'react';
import "../App.css";

const Project = () => {
  const projects = [
    {
      title: 'Office Request Management Tool',
      description: 'Description for Project 1',
      imageSrc: 'project1.jpg', 
      link: "",
    },
    {
      title: 'Linkedln Post Scheduler',
      description: 'Description for Project 2',
      imageSrc: 'project2.jpg', 
      link: "",
    },
    {
      title: 'Escrow Service',
      description: 'Description for Project 2',
      imageSrc: 'project2.jpg', 
      link: "",
    },
  ];

  return (
    <div className="container text-center mt-5">
      <div>
        <h1 className="text-white fw-bold fs-1 mb-4 text-center align-items-center">My Portfolio</h1>
        <p className="text-white align-items-center">
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites. I have a strong understanding of design
          and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well
          as design software such as Adobe Photoshop and Illustrator.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="col">
            <div className="card project-card">
              <img src={project.imageSrc} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
