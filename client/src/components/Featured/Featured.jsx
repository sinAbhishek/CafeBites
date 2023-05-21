import React from 'react'
 import "./featured.css"
 import img1 from "../../data/image/frapucino.png"
 import img2 from "../../data/image/nitro cold.png"
 import img3 from "../../data/image/white chocolate.png"
const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
          <div className="content">
            <div className="des-img bgc1">
              <div className="desc ">
              <h1 className='heading1'>Matcha Crème Frappuccino®: Energize Now</h1>
                <p className='para1'>"Experience the Perfect Balance of Taste and Energy with our Matcha Crème Frappuccino®"</p>

              </div>
              <div className="target-img">
              <img className="featImg" src={img1} alt="" />
              </div>
              
            </div>
            <div className="des-img bgc2">
              <div className="desc ">
              <h1 className='heading2'>Vanilla Cream Dream in a Cup</h1>
                <p className='para2'>"Indulge in the smooth and creamy taste of our Vanilla Sweet Cream Nitro Cold Brew. </p>

              </div>
              <div className="target-img">
              <img className="featImg" src={img2} alt="" />
              </div>
                
              
            </div>
            <div className="des-img bgc3">
              <div className="desc ">
              <h1 className='heading3'>Heavenly White Chocolate Espresso</h1>
                <p className='para3'>"Experience the heavenly combination of white chocolate and espresso in every sip"</p>

              </div>
              <div className="target-img">
              <img className="featImg" src={img3} alt="" />
              </div>
              
            </div>
            <div className="des-img bgc1">
              <div className="desc ">
              <h1 className='heading1'>"Matcha Crème Frappuccino®: Energize Now"</h1>
                <p className='para1'>"Experience the Perfect Balance of Taste and Energy with our Matcha Crème Frappuccino®"</p>

              </div>
              <div className="target-img">
              <img className="featImg" src={img1} alt="" />
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured