import React from 'react'
import db from "../db.json";

const Home = () => {
  console.log(db);
  return (
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
  )
}

export default Home;

  // ---------PRODUCTS--------- 
//   <div className='product'>
//   <div className="card-container">
//     <div className="img-wrapper" >
//       <img src={Women}   />
//       <div className="img-overlay">
//         $ 18                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={bag}  />
//       <div className="img-overlay">
//             $ 7                                         
//       </div>
//      </div>

//      <div className="img-wrapper" >
//        <img src={dress}  />
//         <div className="img-overlay">
//           $ 15                                        
//         </div>
//      </div>

//      <div className="img-wrapper" >
//        <img src={heels} />
//        <div className="img-overlay">
//         $ 10                                        
//        </div>
//      </div>

//      <div className="img-wrapper" >
//        <img src={men_jewellery}  />
//        <div className="img-overlay">
//         $ 9                                        
//        </div>
//      </div>

//      <div className="img-wrapper" >
//        <img src={rings}  />
//        <div className="img-overlay">
//         $ 10                                        
//        </div>
//      </div>

//      <div className="img-wrapper" >
//         <img src={shirt} />
//         <div className="img-overlay">
//         $ 15                                        
//         </div>
//      </div>

//      <div className="img-wrapper" >
//        <img src={shoes} />
//        <div className="img-overlay">
//         $ 20                                        
//        </div>
//      </div>

//      <div className="img-wrapper" >
//         <img src={specs}  />
//         <div className="img-overlay">
//         $ 15                                        
//         </div>
//      </div>

//     <div className="img-wrapper" >
//       <img src={Women} />
//       <div className="img-overlay">
//         $20                                         
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={women_specs} />
//       <div className="img-overlay">
//         $ 20                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={heels}  />
//       <div className="img-overlay">
//         $ 30                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={earbuds}  />
//       <div className="img-overlay">
//          $ 30                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={decoration} />
//       <div className="img-overlay">
//          $ 10
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={img}/>
//       <div className="img-overlay">
//          $ 15                                      
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={watch} />
//       <div className="img-overlay">
//          $ 20                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={cosmetic}/>
//       <div className="img-overlay">
//          $ 15                                      
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={flower}  />
//       <div className="img-overlay">
//          $ 10                                      
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={plant} />
//       <div className="img-overlay">
//          $ 10                                        
//       </div>
//     </div>

//     <div className="img-wrapper" >
//       <img src={image}  />
//       <div className="img-overlay">
//          $ 10                                      
//       </div>
//     </div>
//     </div>
//   </div> 
  
  


// </div>













   

