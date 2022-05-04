import axios from 'axios';
import React, { useEffect, useState } from 'react';


const JobsView = (props) => {
    let [jobs , setJobs] = useState([])

    useEffect(()=>{
        axios.get('https://api.hnpwa.com/v0/jobs/1.json')
            .then((respone)=>{
                // console.log(respone);
                setJobs(respone.data)
            })
            .catch((error)=>console.log(error))
    },[])

    return(
        <div>
            {jobs.map((jobs)=><div key={jobs.id}>{jobs.title}</div>)}
        </div>      
    )
};

export default JobsView;