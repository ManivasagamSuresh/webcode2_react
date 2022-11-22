import React from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'

function Launch() {
  const navigate = useNavigate()
  let products=()=>{
    navigate("/Products")
  }
  return (
    <div>
        <div className="col-lg-12 align-middle">
    <h1 className="text-center" style={{color:"#FFc40a"}}>Welcome to our Rental Portal</h1>
    <h6 className="text-center">Make your safe and secure rental here !</h6>
    <p className="text-center" >Products we provide<br/>Dslr Cameras,Action Cameras,Tripods,Projectors
    </p>

    
  </div>
  <div className="col-lg-12 text-center mt-5">
  <button type="button" class="btn btn-outline-warning  btn-lg" onClick={products} style={{marginTop:"150px"}} > Select Products</button>
  </div>
  <div className="col-lg-12" style={{marginTop:"200px"}} ><Contact/></div>
  </div>
  )
}

export default Launch