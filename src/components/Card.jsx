import React,{useState} from 'react'

function Card({data,setCart}){
    let [toggle,setToggle] = useState(true)
    return <>
          <div className="col mb-5">
            <div className="card h-100">
              
              {(data.sale)?<div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:<></>}
                <img className="card-img-top badge-image" src={data.image} alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center">                    
                        <h5 className="fw-bolder">{data.title}</h5> 
                        <h6>{data.description}</h6> 
                        {(data.price) ? <span>{data.price}</span>:<></>}                                            
                        {(data.ratings== 5)?<div className="d-flex justify-content-center small text-warning mb-2">
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                        </div>:<></>}
                          
                        {
                        (data.oldPrice != null && data.discountPrice != null)?<><span className="text-muted text-decoration-line-through">{data.oldPrice}</span><span>{data.discountPrice}</span></>: <></>
                        }
                      </div>
                  </div>
                  
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                          {
                              toggle?<button className="btn btn-outline-dark mt-auto" 
                              onClick={()=>{
                                  setToggle(current=>!current)
                                  setCart(current=>current+1)
                              }}>Add to cart</button>
                              :
                              <button className="btn btn-outline-dark btn-danger mt-auto"
                              onClick={()=>{
                                  setToggle(current=>!current)
                                  setCart(current=>current-1)
                              }}>Remove from cart</button>
                          }
                          
                      </div>
                  </div>
            
              
              </div>
          </div>
    </>
  }

  export default Card