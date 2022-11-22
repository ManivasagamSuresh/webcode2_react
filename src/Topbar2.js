import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function Topbar2() {
  return (
    <div className="containernav">     
        <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    <button id="navbut"  onClick={()=>{console.log('hello')}} 
 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <li className="nav-item" style={{textDecoration: "none"}}><Link id="link1" to={"/"}  className="nav-link">Home</Link></li> 
        <li className="nav-item" style={{textDecoration: "none"}}><Link id="link2" to={"/CartItems"}  className="nav-link">Cart Items</Link></li>
        <li className="nav-item" style={{textDecoration: "none"}}><Link id="link4" to={"/Products"}  className="nav-link">Products</Link></li>
      </div>
    </div>
  </div>
</nav>
    </div>

  )
}

export default Topbar2

        