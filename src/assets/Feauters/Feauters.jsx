import React from "react";
import "./Feauters.css";
import {FaUsers , FaLightbulb ,FaMicrophone , FaCopyright,FaEdit,FaStar }from "react-icons/fa";
const Feauters=()=>{
    return(
        <div className="feauters">
        <h1 id="h11">Our Feauters</h1>
        <div className="feauters-second">
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaUsers size={40}/>
                    </div>
                <h3>CRM|Sales funnel strategy</h3>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaLightbulb  size={40}/>
                    </div>
                <h3>Marketing Strategy</h3>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaMicrophone size={40}/>
                    </div>
                <h3>Voiceover Service</h3>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaCopyright size={40}/>
                    </div>
                <h3>Copywriter Services</h3>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaEdit size={40}/>
                    </div>
                <h3>Content Creation</h3>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <FaStar  size={40}/>
                    </div>
                <h3>Brand positioning|Messaging</h3>
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default Feauters
