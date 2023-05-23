import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import useFetch from '../hooks/useFetch';
import ProjectItem from '../components/project_item/project_item';

const Projects = () => {

    const {getData,getIsLoading, getIsError,reFetch}=useFetch("https://hexa-backend.onrender.com/projects");

  return (
    <div>
        
        {getIsLoading?<h3>Loading .. Please Wait</h3>
        :getData.map(project=>(
          <ProjectItem project={project}/>
        )

        )}
    </div>
  )
}

export default Projects