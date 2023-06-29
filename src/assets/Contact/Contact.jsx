import {useState,useRef} from "react";
import "./Contact.css";
import img3 from "../images/preview.png"
const Contact=()=>{
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [message , setMessage]=useState("");
    return(
        <div className="contact">
              <h4 id="contact-h4">contact Us</h4>
              <div className="contact-form">
                <div className="contactImg">
        <img src={img3} alt=''/></div>
        <form className="fom" >
          <div className="input-form">
            <label htmlFor="name">
                your-Name
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>  
            </label>
          </div>
       <div className="input-form">
        <label htmlFor="email">
            your-Email
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        </div> 
        <div className="input-form">
            <label htmlFor="message">
                Note
                <textarea type="text" id="name" value={message} rows="6" onChange={(e)=>setMessage(e.target.value)}/>
            </label>
        </div>
       <button className=" btn33">Send</button> 
        </form>
        </div>
        </div>
    )
}
export default Contact