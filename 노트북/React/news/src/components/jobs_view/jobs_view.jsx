import React, { useEffect, useState } from 'react';
import { fetchJobsList } from '../../api';

const JobsView = (props) => {
    let [jobs , setJobs] = useState([])

    useEffect(()=>{
        fetchJobsList()
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