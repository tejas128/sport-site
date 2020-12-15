import React  from 'react';


import {Link} from'react-router-dom'




function Navbar() {

  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Sport</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/">
            <li class="nav-item active">
              <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/about">
            <li class="nav-item">
              <a class="nav-link" >About</a>
            </li>
            </Link>
            <Link to="/sport">
            <li class="nav-item">
              <a class="nav-link" >Sports</a>
            </li>
            </Link>
            <Link>
            <li class="nav-item"> <a class="nav-link" className="login">login</a></li>
            </Link>
            
            
                
            
          
            
          </ul>

        </div>
      </nav>


    </div>
  );

}

export default Navbar
