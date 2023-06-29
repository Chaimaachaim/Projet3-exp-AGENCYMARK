import React,{useState}  from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import "./Nav.css"
import {Link} from "react-router-dom"
const Nav=()=>{
const [click , setClick]=useState(false)
const handleClick=()=>setClick(!click)
       return( 
        <div className="nav">
     <div className="logo">
    <h1>Agency Local</h1>
     </div>
        <div className= {click ? 'links active':'links'} >
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="About">About</Link>
        <Link className="link" to="Feauters">Feauters</Link>
        <Link className="link" to="Pricing">Pricing</Link>
        <Link className="link" to="Contact">Contact</Link> 
     </div>
     <div className="hambur" onClick={handleClick}>
     { click ?(<FaTimes  size={28}/>):( <FaBars size={20} />)}
     
     </div>
        </div>
    )
   }
export default Nav