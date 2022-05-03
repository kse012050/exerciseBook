import React, { useState } from 'react';

const JobsView = (props) => {
    let [stateTest , stateChange] = useState([{a : 'c' , b : 'd'}])
    function changeTest(){
        stateChange([{a : 'a' , b : 'b'}])
    }
    return(
        <div onClick={()=>changeTest()}>
            jobs {stateTest[0].a}
        </div>      
    )
};

export default JobsView;