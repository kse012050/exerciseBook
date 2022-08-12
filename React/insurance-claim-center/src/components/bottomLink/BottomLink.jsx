import React from 'react';
import './bottomLink.css'

const BottomLink = (props) => {
    console.log(props);
    return (
        <div>
            <div className="bottomLink">
                <div className="contentWidth"> 
                    {/* {props.bottomText[0].text} */}
                    {props.bottomLinkData.map((b)=>{
                        return(
                            <a href={b.link} key="1">{b.text}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default BottomLink;