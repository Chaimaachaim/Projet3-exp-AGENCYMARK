import React from "react";
import "./About.css"
import data from "../images/data"
const About=()=>{
    return(
        <div className="about">
             <div className="cnt-about">
                <h1>About Us </h1>     
                      </div>
            <div className="about-us">
                {
                    data.about.map((item,index)=>{
                          return(
                            <div className="aboutAll" key ={index}>
                             <div className="aboutImage" >  
                                <img src={item.Image} alt=""/>
                             </div>
                             <div className="aboutsecond">
                             <h2 >{item.title}</h2>
                             <p>{item.paragraph}</p>
                             </div>
                            </div>
                          )
                    })
                }
            </div>
            
        </div>
    )
}
export default About 