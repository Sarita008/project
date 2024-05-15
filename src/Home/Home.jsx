import React from 'react'
import db from "../db.json";
import "../css/Home.css";

const Home = () => {
  // console.log(db);
  return (
    <>

    <div className='product'>
        <div className="card-container">
        {
       db.user.map((data) => {
        return(
          <div className="img-wrapper" key={data.id} >
              <img src={data.img} alt="" />
              <div className="img-overlay">
                     {data.price}                                       
              </div>
              </div>
        )
       })
      }
        </div>
    </div>
</>
  
  
  )
}

export default Home;

  