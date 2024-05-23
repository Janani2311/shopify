import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let data = [
    {
      title:"Fancy Product",
      sale:false,
      ratings:null,
      oldPrice:null,
      discountPrice:null,
      price:"$40.00 - $80.00",
      image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      description:"This is a Fancy Product",
      
    }, 
    {
      title:"Special Item",
      sale:true,
      ratings:5,
      oldPrice:"$20.00",
      discountPrice:"$18.00",
      price:null,
      image:"https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      description:"This is a Special Item"
    },
    {
      title:"Sale Item",
      sale:true,
      ratings:null,
      oldPrice:"$50.00",
      discountPrice:"$25.00",
      price:null,
      image:"https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:"This is a Sale Item"
    },
    {
      title:"Popular Item",
      sale:false,
      ratings:5,
      oldPrice:null,
      discountPrice:null,
      price:"$40.00",
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description:"This is a Popular Item"

    },
    {
      title:"Sale Item",
      sale:true,
      ratings:null,
      oldPrice:"$50.00",
      discountPrice:"$25.00",
      price:null,
      image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description:"This is a Sale Item"
    },
    {
      title:"Fancy Product",
      sale:false,
      ratings:null,
      oldPrice:null,
      discountPrice:null,
      price:"$120.00 - $280.00",
      image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      description:"This is a fancy product"
    },
    {
      title:"Special Item",
      sale:true,
      ratings:5,
      oldPrice:"$20.00",
      discountPrice:"$18.00",
      price:null,
      image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      description:"This is a Special Item"
    },
    {
      title:"Popular Item",
      sale:false,
      ratings:5,
      oldPrice:null,
      discountPrice:null,
      price:"$40.00",
      image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      description:"This is a Popular Item"

    },
  ]
  let [cart,setCart] = useState(0)
  return <>
        <Navbar cart={cart}/>
        <Header/>
        
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    data.map((e,i) => {
                      return <Card data={e} key={i} setCart={setCart}/>
                    })
                  }
                </div>
            </div>
        </section>
      <Footer/>
  </>
  
}

export default App

