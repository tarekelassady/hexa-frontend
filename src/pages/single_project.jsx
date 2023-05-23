import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


const SingleProjects= () => {
  const [getProject,setProject]=useState({});
  const location=useLocation();
  const projectId=location.pathname.split("/")[2];

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get(`https://hexa-backend.onrender.com/projects/${projectId}`);
    setProject(res.data);
    }
    fetchData();
  },[])

  return (
    <div className='single_project'>
      <img src={`https://hexa-backend.onrender.com/uploads/${getProject.img}`} alt="" />
      <h3>{getProject.title}</h3>
      <p>{getProject.desc}</p>
      <button><Link to="/write-project" state={getProject}>Edit</Link></button>
      <form className='comment_form' action="">
        <input type="text" name="comment" id="comment" />
        <button>Add Comment</button>

      </form>
      
    </div>
  )
}

export default SingleProjects