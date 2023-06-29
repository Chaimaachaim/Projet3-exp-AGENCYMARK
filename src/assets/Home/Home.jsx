import React from "react"
import "./Home.css"
import About from "../About/About";
import gift1 from "../images/SEO .gif"
import Feauters from "../Feauters/Feauters"
import Pricing from "../Pricing/Pricing"
import Contact from "../Contact/Contact"
const Home =()=>{
    return(
        <div className="home">  
        <div className="enter-home">
        <div className="content">
             <h2>Digital<br/> <span>Marketing </span>agency</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Dignissimos ut fugit ex eaque </p>
             <button className="btnh">Read more</button>
             </div>
             <div className="gift">
                <img src={gift1} alt=""/>
             </div>
             </div>
             <About/>
             <Feauters/>
             <Pricing/>
             <Contact/>
        </div>
    )
}
export default Home