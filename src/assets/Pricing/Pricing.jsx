 import React from "react";
import "./Pricing.css";
import data from "../images/data";
const Pricing =()=>{
    return(
        <div className="Pricing">
            <h1 id="prich1">Our Packages</h1>
              <div className="price-box">
                {
                    data.pricing.map((item, index)=>{
                        return(
                       <div className="priceAll" key={index}>
                           <h1>{item.title}</h1>
                           <div className="price-text">
                            <h2>{item.h2}</h2>  </div>
                            <div className="price-text2">
                            <h4>{item.h4}</h4>
                            <h4>{item.h4}</h4>
                            <h4>{item.h4}</h4>
                            </div>
                         </div>
                        )
                    })
                }
              </div>
        </div>
    )
}
export default Pricing