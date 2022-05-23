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
            {jobs.map((jobs)=>
                <p key={jobs.id}>
                    <a href={jobs.url}>
                        {jobs.title}
                    </a>
                    <small>
                        {jobs.domain} , {jobs.time_ago}
                    </small>
                </p>
            )}
        </div>      
    )
};

export default JobsView;