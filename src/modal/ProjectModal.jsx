import React from 'react'

    /**
   *open modal 
   * image on the left
   * project title
   * desctiption
   * product requirement document
   * architectural design system
   * 2 github link
   * 1 video link
   * live demo link
   */

const ProjectModal = ({project}) => {
  return (
    <div className='text-light'>

        <div>
            <img src={project.imageSrc} alt=''/>
        </div>

        <div>
            <p>Title: {project.title}</p>
            <p>Description: {project.description}</p>
            <p>Product Requirement Document: {project.title}</p>
            <p>Architectural Diagram: {project.title}</p>
            <p>Github Repository: {project.title}</p>
            <p>Recording : {project.title}</p>
            <p>View Life demo: {project.title}</p>
        </div> 
    </div>
  )
}

export default ProjectModal