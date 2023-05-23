import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import useFetch from '../hooks/useFetch';
import ProjectItem from '../components/project_item/project_item';

const Projects = () => {

    const {getData,getIsLoading, getIsError,reFetch}=useFetch("http://localhost:4000/projects");

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